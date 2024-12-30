import React from 'react'
import { Image } from 'nextra/components'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import styles from "./styles/theme.module.scss"
const config: DocsThemeConfig = {

  head:()=>{
    const { frontMatter } = useConfig();
  return <>
        <meta property="og:title" content={frontMatter.title || '鹏语言'} /></>
  },
  logo:
   <div className={styles.logo}>
    <Image alt='logo' className='w-8 h-8' src={"/P.png"}></Image>
    <span>鹏语言</span>
  </div>,
  darkMode:true,
  project: {
    link: 'https://github.com/SevenOfPaul/compiler',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com',
  footer: {
    component:()=>{
      const footerData=[
        {
          kind:"官方库",
          contents:[
            {
              name:"对不起",
              path:""
            },{
                 name:"没有官方库",
              path:""
            }
          ]
        }
      ]
     return <div className='width-auto bg-slate-100 pt-20 pb-4 flex flex-row justify-center '>
     {footerData.map(d=> <div key={d.kind} className='flex flex-col content-center'>
       <p className='footer-t-m text-xl text-gray-600'>{d.kind}</p>
       {
        d.contents.map(k=><a key={k.name}  href={k.path} className='text-gray-500 footer-m'>{k.name}</a>)
       }
     </div>)}
     </div>
    },
  },
}

export default config

