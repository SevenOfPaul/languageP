import React from "react"
import "../styles/global.scss"
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"
export default function App({ Component, pageProps }) {
    return (
      <>
        <Head
          children={
            <>
              <title>Paul's Blog</title>
            </>
          }
        ></Head>
        <Component {...pageProps} />
      </>
    );
  }