import React from "react"
import "../styles/global.scss"
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function App({ Component, pageProps }) {
    return (
      <>
        <Head
          children={
            <>
              <title>Paul's Blog</title>
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