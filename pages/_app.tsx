import React from "react"
import "../styles/global.scss"
import Head from "next/head"
export default function App({ Component, pageProps }) {
    return <>
  <Head children={<><title>"鹏语言"</title>
    <meta name="og:image" content={"/P.png"}/>
    </>}>
  </Head>
    <Component {...pageProps}/></>
  }