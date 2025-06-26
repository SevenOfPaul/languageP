import React, { useState, useEffect } from "react";
import { useLocalStorageState } from 'ahooks';
import gameData from "@/pages/game.json";
import styles from "../styles/game.module.scss";
import sendMessage from "@/lib/sendMessage";

const GamePage = () => {
  const [currentAct, setCurrentAct] = useState(0);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [messages, setMessages] = useLocalStorageState('allMessages', {
    defaultValue: {},
  }); // { characterId: [{ text, sender }] }
  const [currentMessages, setCurrentMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showInfo,setShowInfo]=useState(true)
  const [selectedClue, setSelectedClue] = useState(null);

  useEffect(() => {
    if (currentCharacter) {
      const storedMessages = messages[currentCharacter.id];
      if (storedMessages) {
        setCurrentMessages(storedMessages);
      } else {
        setCurrentMessages([{ text: currentCharacter.initialStatement, sender: "system" }]);
      }
    } else {
      setCurrentMessages([{ text: gameData.gameFlow.acts[currentAct].gmScript, sender: "system" }]);
    }
  }, [currentCharacter, currentAct, messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setInputValue("");
      
      if (currentCharacter) {
        // Send message to character and get AI response
        setMessages((prev) => ({
          ...prev,
          [currentCharacter.id]: [...(prev[currentCharacter.id] || []), { text: inputValue, sender: "player" }],
        }));
        setCurrentMessages((prevMessages) => [
          ...prevMessages,
          { text: inputValue, sender: "player" },
        ]);
        
        // 使用AI对话功能
        sendMessage(
          {
            role: "user",
            content: `你好，我是管理员。你是我的ai助手，为开头为user的用户提供服务。
            你扮演的角色是${currentCharacter.name}，性格特点:${
              currentCharacter.persona
            }，
          牢记:符合性能特点 忽略玩家的语气，除非玩家说出确凿证据或杀人手法或杀人逻辑，否则不要承认你是凶手。
          重点 除非有确凿证据 否则不要承认你是凶手 如果你轻易承认了，那么则受到惩罚！！如果你轻易承认了，那么则受到惩罚！！ 
          如果你轻易承认了，那么则受到惩罚！！！ 相关线索:${currentCharacter.triggers.map(
            (k) => k.triggers
          )} 私人秘密：${currentCharacter.secrets.map(k=>k)}`,
          },
          (messages[currentCharacter.id] || []).map((msg) => ({
            role: msg.sender === "player" ? "user" : "assistant",
            content: msg.text,
          })),
          inputValue,
          (content) => {
            setCurrentMessages((prev) => {
              const newMessages = [...prev];
              const lastMsg = newMessages[newMessages.length - 1];
              if (
                lastMsg &&
                lastMsg.sender === "system" &&
                lastMsg.text.startsWith("[AI ")
              ) {
                newMessages[newMessages.length - 1] = {
                  text: `[AI ${currentCharacter.name}]: ${content}`,
                  sender: "system",
                };
              } else {
                newMessages.push({
                  text: `[AI ${currentCharacter.name}]: ${content}`,
                  sender: "system",
                });
              }
              setMessages((prevAll) => ({
                ...prevAll,
                [currentCharacter.id]: newMessages,
              }));
              return newMessages;
            });
          },
          (error) => {
            setCurrentMessages((prev) => {
              const newMessages = [
                ...prev,
                { text: `AI对话错误: ${error.message}`, sender: "system" },
              ];
              setMessages((prevAll) => ({
                ...prevAll,
                [currentCharacter.id]: newMessages,
              }));
              return newMessages;
            });
          }
        );
      } else {
        // If no character is selected, just add the player's message and a system message
        setCurrentMessages((prevMessages) => [
          ...prevMessages,
          { text: inputValue, sender: "player" },
          { text: "请选择一个角色进行对话。", sender: "system" },
        ]);
      }
    }
  };

  return (
    <div className={styles["game-container"]}>
      {/* 角色选择区 */}
      <div className={styles["character-select"]}>
        <h3>选择问询角色:</h3>
        <div className={styles["character-buttons"]}>
          {gameData.characters.map((char) => (
            <button
              key={char.id}
              onClick={() => {
                setCurrentCharacter(char);
              }}
              className={`${styles.button} ${
                currentCharacter?.id === char.id ? styles.active : ""
              }`}
            >
              {char.name}
            </button>
          ))}
        </div>

        {currentCharacter && (
          <button
            onClick={() => setCurrentCharacter(null)}
            className={styles["back-button"]}
          >
            返回游戏主界面
          </button>
        )}

        {
          showInfo&&<div className={styles["selected-clue-display"]}>
            <h4>案件简介</h4>
            <p>{gameData.gameInfo.introduction}</p>
            <button onClick={() => setShowInfo(false)}>关闭</button>
          </div>
        }
      </div>

      {/* 案件展示区 */}
      <div className={styles["case-display"]}>
        <h1>{gameData.gameInfo.title}</h1>
        {currentCharacter ? (
          <p>{currentCharacter.initialStatement}</p>
        ) : (
          <p>{gameData.gameFlow.acts[currentAct].gmScript}</p>
        )}
      </div>

      {/* 聊天查看区 */}
      <div className={styles["chat-view"]}>
        {currentMessages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              msg.sender === "system"
                ? styles["system-message"]
                : styles["player-message"]
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* 输入框区域 */}
      <div className={styles["input-area"]}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="输入你的问题..."
        />
        <button onClick={handleSendMessage}>发送</button>
      </div>
    </div>
  );
};

export default GamePage;
