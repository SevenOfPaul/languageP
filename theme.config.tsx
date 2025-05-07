import React from 'react'
import { Image } from 'nextra/components'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import styles from "./styles/theme.module.scss"
import Link from 'next/link'
import { Home, FileText, Tags, Book, Github, Mail, MessageCircle, Heart, FileCode } from 'lucide-react'
import { Hitokoto } from './components/Hitokoto'
import { motion } from 'framer-motion'
import dayjs from 'dayjs'
import { FriendLinks } from './components/FriendLinks'
//@ts-ignore webpack替换
const time = _time_; 
const config: DocsThemeConfig = {

  head: () => {
    const { frontMatter } = useConfig();
    return <>
      <meta property="og:title" content={frontMatter.title||"Paul's Blog"} />
    </>
  },
  logo:
    <div className={styles.logo}>
      <Image alt='logo' className='w-8 h-8' src={"/P.png"}></Image>
      <span>Paul's Blog</span>
    </div>,
  darkMode: true,
  project: {
    link: 'https://github.com/SevenOfPaul/compiler',
  },
  chat: {
    icon: <div className="tooltip  tooltip-bottom" data-tip="暂未开放">
      <Image alt='logo' className='w-8 h-8 mt-2' src={"/QQ.png"}></Image>
    </div>,
    link: "https://github.com/SevenOfPaul/compiler"
  },
  docsRepositoryBase: 'https://github.com',
   footer: {
     component: () => {
            const container = {
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { 
                  staggerChildren: 0.3,
                  delayChildren: 0.2
                }
              }
            };
            const item = {
              hidden: { opacity: 0, y: 50, scale: 0.9 },
              show: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8
                }
              }
            };
            
      const LeftData = {
        name: "For Paul",
        desc: "这是一个个人博客，主要用于记录自己的学习过程，用于ts和rust的技术交流",
        paths: [
          {
            name: "rust手搓解释器",
            url: "/docs/p",
          },
          {
            name: "rCore心路",
            url: "/rCore/desc",
          },
          {
            name: "杂谈",
            url: "./talk/architecture",
          },
        ],
      };
      const footerData = [
        {
          kind: "不可不看",
          icon: <Home className="w-5 h-5 text-blue-500" />,
          contents: [
            {
              name: "首页",
              path: "/",
              icon: <Home className="w-4 h-4 text-blue-500" />,
            },
            {
              name: "算法",
              path: "/talk/alogorithm/twoSum",
              icon: <FileText className="w-4 h-4 text-green-500" />,
            },
            {
              name: "react",
              path: "/web/react/fiber",
              icon: <FileCode className="w-4 h-4 text-yellow-500" />,
            },
            {
              name: "标签",
              path: "/docs/tags",
              icon: <Tags className="w-4 h-4 text-purple-500" />,
            },
          ],
        },
        {
          kind: "快速链接",
          icon: <Book className="w-5 h-5 text-pink-500" />,
          contents: [
            {
              name: "解释器教程",
              path: "https://github.com/munificent/craftinginterpreters",
              icon: <Book className="w-4 h-4 text-pink-500" />,
            },
            {
              name: "编译器源码",
              path: "https://github.com/SevenOfPaul/compiler",
              icon: <Github className="w-4 h-4 text-gray-500" />,
            },
          ],
        },
        {
          kind: "交流",
          icon: <MessageCircle className="w-5 h-5 text-teal-500" />,
          contents: [
            {
              name: "Email: 3167385363@qq.com",
              path: "mailto:3167385363@qq.com",
              icon: <Mail className="w-4 h-4 text-orange-500" />,
            },
            {
              name: "WeChat: Paul",
              path: "weixin://contacts/profile/13136918273",
              icon: <MessageCircle className="w-4 h-4 text-green-500" />,
            },
            {
              name: "Github: SevenOfPaul",
              path: "https://github.com/SevenOfPaul",
              icon: <Github className="w-4 h-4 text-violet-500" />,
            },
          ],
        },
      ];
      return (
        <>
          <div className="h-[1px] w-full bg-[#2926260d]"></div>
          <div className="w-full bg-gradient-to-b from-slate-50 to-slate-100 dark:from-neutral-900 dark:to-neutral-950 pt-16 pb-8 px-6 relative">
            <Hitokoto />
            <div className="max-w-6xl mx-auto flex flex-row justify-between flex-wrap gap-20">
              <motion.div
                initial="hidden"
                animate="show"
                variants={container}
                className="flex flex-col gap-4 max-w-md"
              >
                <motion.h2
                  variants={item}
                  className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                >
                  {LeftData.name}
                </motion.h2>
                <motion.p
                  variants={item}
                  className="max-w-96 text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {LeftData.desc}
                </motion.p>
                <motion.div
                  variants={item}
                  className="flex flex-row flex-wrap gap-2"
                >
                  {LeftData.paths.map((path, index) => (
                    <Link
                      key={path.name}
                      href={path.url || "#"}
                      className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 
                        dark:hover:text-gray-200 transition-all duration-300 
                        relative overflow-hidden rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <span
                        className="absolute inset-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 
                        transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                      />
                      <Book
                        className={`w-4 h-4 ${
                          index === 0 ? "text-blue-500" : "text-purple-500"
                        }`}
                      />
                      <span className="relative z-10">{path.name}</span>
                    </Link>
                  ))}
                </motion.div>
              </motion.div>

              <div className="flex-1 flex flex-row flex-wrap justify-between">
                {footerData.map((d) => (
                  <motion.div
                    variants={item}
                    key={d.kind}
                    className="flex flex-col gap-3 group"
                    initial="hidden"
                    animate="show"
                  >
                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                      <span className="transform group-hover:rotate-12 transition-transform duration-300">
                        {d.icon}
                      </span>
                      {d.kind}
                    </h3>
                    {d.contents.map((k) => (
                      <Link
                        key={k.name}
                        href={k.path}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 
                        transition-all duration-300 flex items-center gap-2 hover:translate-x-1 
                        relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                        after:bg-gradient-to-r after:from-pink-500 after:to-violet-500 
                        hover:after:w-full after:transition-all after:duration-300"
                      >
                        <span className="opacity-100">{k.icon}</span>
                        {k.name}
                      </Link>
                    ))}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
              <FriendLinks />
              <p className="flex items-center justify-center gap-2">
                © 2025 Paul Blog • Made with
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                by Paul
              </p>
              <p className="mt-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                使用 Next Rust 和 Tailwind CSS 构建
              </p>
              <p className="mt-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                最近更新时间: {time}
              </p>
            </div>
          </div>
        </>
      );
    },
  },
}

export default config

