import React from "react"
import "../styles/global.scss"
import Head from "next/head"
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { useEffect } from 'react';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import rust from 'highlight.js/lib/languages/rust';
hljs.registerLanguage('rustInit', rust);
export default function App({ Component, pageProps }) {
  useEffect(() => {
  hljs.highlightAll();
}, []);
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