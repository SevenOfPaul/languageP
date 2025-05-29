import React from "react"
import "../styles/global.scss"
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import seo from "./seo.json"
export default function App({ Component, pageProps }) {
    return (
      <>
        <Head
          children={
            <>
              <title>Paul's Blog</title>
              <title>{seo.map(s=>s.title+" ")}</title>
               {
                seo.map((s, index) => (
                  <meta key={index} name={s.title} content={s.content} />
                ))
               }
              <meta name="baidu-site-verification" content="codeva-UOeGseNARG" />
            </>
          }
        ></Head>
        <Component {...pageProps} />
        <Analytics/>
        <SpeedInsights/>
      </>
    );
  }