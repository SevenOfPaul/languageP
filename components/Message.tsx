import { motion } from "framer-motion";
import Markdown from "markdown-to-jsx";
// 定义动画变体
const chatVariants = {
  hidden: {
    opacity: 0,
    y: 20, // 初始位置向下偏移 20px
    scale: 0.9 // 初始缩小为 90%
  },
  show: {
    opacity: 1,
    y: 0, // 移动到正常位置
    scale: 1, // 恢复正常大小
    transition: {
      type: "spring", // 使用弹簧动画
      stiffness: 150, // 弹簧刚度
      damping: 10, // 阻尼
      mass: 0.8 // 质量
    }
  }
};

export default function Message({
  message,
}: {
  message: { role: string; content: string };
}) {
  return (
    <>
      <motion.div
        className={`chat ${
          message.role === "user" ? "chat-end" : "chat-start"
        }`}
        variants={chatVariants} // 使用动画变体
        initial="hidden" // 初始状态
        animate="show" // 动画显示状态
      >
        <motion.div
          className="chat-bubble text-[#252424]  bg-gradient-to-r from-pink-400 to-violet-400
           hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden 
           shadow-md rounded-lg p-3"
        >
          <Markdown>{message.content}</Markdown>
        </motion.div>
      </motion.div>
    </>
  );
}