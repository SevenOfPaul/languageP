
const lastContent:string[] = [];
async function sendMessage(content: string,onContent: (content: string) => void, onError: (error: Error) => void) {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AK}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1-0528:free",
          messages: [...lastContent, { role: "user", content }],
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
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        // Append new chunk to buffer
        buffer += decoder.decode(value, { stream: true });
        // Process complete lines from buffer
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
                onContent(contentChunk);
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