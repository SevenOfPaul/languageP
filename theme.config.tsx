import React from 'react'
import { Image } from 'nextra/components'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import styles from "./styles/theme.module.scss"
import Link from 'next/link'
const config: DocsThemeConfig = {

  head: () => {
    const { frontMatter } = useConfig();
    return <>
      <meta property="og:title" content={frontMatter.title || '鹏语言'} /></>
  },
  logo:
    <div className={styles.logo}>
      <Image alt='logo' className='w-8 h-8' src={"/P.png"}></Image>
      <span>鹏语言</span>
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
      const footerData = [
        {
          kind: "官方库",
          contents: [
            {
              name: "对不起",
              path: ""
            }, {
              name: "没有官方库",
              path: ""
            }
          ]
        }, {
          kind: "挂个人",
          contents: [
            {
              name: "解释器原教程",
              path: "https://github.com/munificent/craftinginterpreters"
            }, {
              name: "原教程中文翻译",
              path: "https://readonly.link/books/https://raw.githubusercontent.com/GuoYaxiang/craftinginterpreters_zh/main/book.json"
            }, {
              name: "很厉害的B站大佬",
              path: "https://space.bilibili.com/3546574741310144"
            }
          ]
        }, {
          kind: "友链",
          contents: [
            {
              name: "招商中",
              path: "/"
            }
          ]
        }
      ]
      return <div className='width-auto bg-slate-100 pt-20 pb-4 flex flex-row justify-center gap-8'>
        {footerData.map(d => <div key={d.kind} className='flex flex-col content-center'>
          <p className='footer-t-m text-xl text-gray-600'>{d.kind}</p>
          {
            d.contents.map(k => <Link key={k.name} href={k.path} className='text-gray-500 footer-m'>{k.name}</Link>)
          }
        </div>)}
      </div>
    },
  },
}

export default config

