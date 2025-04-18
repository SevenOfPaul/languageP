import { motion } from "framer-motion";
import { Github, Mail, MessageSquareMore, Phone } from "lucide-react";
import Image from "next/image";
export default () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.5,
        },
      }}
      className="w-full max-w-2xl mx-auto bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8 mb-12 hover:cursor-auto"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div variants={item}>
          <Image
            src="/imgs/avatar.jpg"
            width={120}
            height={120}
            className="rounded-full border-4 border-gray-100 dark:border-gray-800"
            alt={""}
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-4 text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Paul's Blog
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-2 text-gray-600 dark:text-gray-400"
        >
          全栈开发工程师
        </motion.p>

        <motion.p
          variants={item}
          className="mt-2 text-gray-600 dark:text-gray-400 max-w-md"
        >
          热爱探索新技术，专注于 TypeScript 和 Rust
          开发。致力于构建优雅的解决方案。
        </motion.p>

        <motion.div variants={item} className="flex space-x-4 mt-6">
          {[
            {
              href: "https://github.com/SevenOfPaul",
              icon: <Github className="w-6 h-6" />,
            },
            { href: "tel:13136918273", icon: <Phone className="w-6 h-6" /> },
            {
              href: "weixin://contacts/profile/13136918273",
              icon: <MessageSquareMore className="w-6 h-6" />,
            },
            { href: "3167385363@qq.com", icon: <Mail className="w-6 h-6" /> },
          ].map((social, index) => (
            <motion.a
              key={social.href}
              href={social.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
