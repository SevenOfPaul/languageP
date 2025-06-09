import { motion } from 'framer-motion';
import { Trash, X } from 'lucide-react';
import { useEffect, useState,useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLocalStorageState } from 'ahooks';
import { Input } from './Input';
import Message from './Message';
import sendMessage from "@/lib/sendMessage";
type Message={
 role:"user"|"assistant",
 content:string,
}
export function Bot({setShowAi}){
    const cardVariants = {
        // 隐藏状态
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95, // 缩小卡片
            rotateX: -30, // 增加 X 轴旋转
            transformOrigin: "top",
            filter: "blur(10px)",
            transition: {
                duration: 0.3, // 隐藏动画时长
                ease: "easeInOut"
            }
        },
        // 显示状态
        show: {
            opacity: 1,
            y: 0,
            scale: 1, // 恢复正常大小
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 15,
                mass: 1.2,
                restDelta: 0.001,
                restSpeed: 0.001
            },
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
            filter: "blur(0px)"
        },
        // 退出状态
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.95, // 缩小卡片
            rotateX: 30, // 反向 X 轴旋转
            transformOrigin: "top",
            filter: "blur(10px)",
            transition: {
                duration: 0.3, // 退出动画时长
                ease: "easeInOut"
            }
        }
    };
    const [messages, setMessage] = useLocalStorageState<Message[]>("messages", {
      defaultValue: [],
    });
    const scrollRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (scrollRef.current) {
        // 将滚动位置设置到最底部
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        console.log("scroll to bottom", scrollRef.current.scrollTop);
      }
      if (messages.length==0) {
        sendMessage(
          [],
          "你好呀",
          (content) => {
            setMessage([
              { role: "assistant", content: content },
            ]);
          },
          () => {}
        ); 
      }
    }, [messages]);

      function getInput(val:string){
        const newMessages = [...messages, { role: "user", content: val }] as Message[];
        setMessage(newMessages);
        sendMessage(
          newMessages,
          val,
          (content) => {
            setMessage([
              ...newMessages,
              { role: "assistant", content: content },
            ]);
          },
          () => {}
        );
      }
    return (
      <motion.div
        className="bg-white w-full h-full rounded-lg shadow-lg relative"
        variants={cardVariants}
        initial="hidden" // 初始状态
        animate="show" // 显示状态
        exit="exit" // 退出状态
      >
        <div className="top-5 left-5 absolute cursor-pointer flex gap-2">
        <div
            className="tooltip  tooltip-bottom"
            data-tip="关闭助手"
          >
          <X
            className="h-6 w-6  hover:scale-125"
            onClick={() => setShowAi(false)}
          />
          </div>
          <div
            className="tooltip  tooltip-bottom"
            data-tip="清理聊天记录"
          >
            <Trash
              className="h-6 w-6  hover:scale-125"
              onClick={() => setMessage([])}
            />
          </div>
        </div>
        <div className="p-4 mx-auto">
          <h2 className="text-center text-xl font-bold mb-4">
            鹏语言AI智能助手
          </h2>
        </div>
        {/**这里保存message */}
        <div
          className="overflow-y-auto overflow-x-hidden h-[70vh]"
          ref={scrollRef}
        >
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
        <Input
          className="mx-1 fixed bottom-16 w-[99%] h-20 p-2 border rounded-lg border-slate-500"
          getInput={getInput}
        />
      </motion.div>
    );
}

export default  function AI({setShowAi}) {
    const [container, setContainer] = useState(null);   
    useEffect(() => {    
        // 创建一个新的 div 元素     
        const newContainer = document.createElement('div');     
        // 将新的 div 元素添加到 body 节点上     
        document.body.appendChild(newContainer);
        newContainer.style.position="fixed";
        newContainer.style.top="50px";
        newContainer.style.right="0px";   
        newContainer.style.zIndex="9999";
        newContainer.style.width="50%";  
        newContainer.style.height="100%";  
        // 设置状态     
        setContainer(newContainer);     
        // 组件卸载时，从 body 节点上移除 div 元素     
        return () => {       
            document.body.removeChild(newContainer);     
        };   
    }, []);   

    return container ? createPortal(<Bot setShowAi={setShowAi}/>, container) : <></>;
}