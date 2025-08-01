
import initMessage from "@/lib/injectAi";
export default async function sendMessage(
  init=initMessage,
  lastContent: { role: string; content: string }[],
  content: string,
  onContent: (content: string) => void,
  onError: (error: Error) => void
) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AK}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [
          init,
          ...lastContent.map((k) => {
            if (k.role == "user") {
              return { role: "user", content: "user:" + k.content };
            } else {
              return k;
            }
          }),
          { role: "user", content: "user:" + content },
        ],
        stream: true,
      }),
    }
  );
  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error("Response body is not readable");
  }
  const decoder = new TextDecoder();
  let buffer = "";
  let contentAll = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      // Append new chunk to buffer
      buffer += decoder.decode(value, { stream: true });
      while (true) {
        const lineEnd = buffer.indexOf("\n");
        if (lineEnd === -1) break;
        const line = buffer.slice(0, lineEnd).trim();
        buffer = buffer.slice(lineEnd + 1);
        if (line.startsWith("data: ")) {
          const data = line.slice(6);
          if (data === "[DONE]") break;
          try {
            const parsed = JSON.parse(data);
            const contentChunk = parsed.choices[0].delta.content;
            if (contentChunk) {
              contentAll += contentChunk;
              onContent(contentAll);
            }
          } catch (e) {
            if (e instanceof Error) {
              onError(new Error(`Failed to parse JSON: ${e.message}`));
            }
          }
        }
      }
    }
  } finally {
    reader.cancel();
  }
}