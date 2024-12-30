import React from "react"
import "../styles/global.scss"
import Head from "next/head"
export default function App({ Component, pageProps }) {
    return <>
  <Head children={<><title>鹏语言</title>
    </>}>
  </Head>
    <Component {...pageProps}/></>
  }
//   window.append_to_output = function(text, is_error) {
//     const resultElement = document.getElementById('result');
//     if (resultElement) {
//         const span = document.createElement('span');
//         span.textContent = text;
//         if (is_error) {
//             span.style.color = 'red';
//         }
//         resultElement.appendChild(span);
//         resultElement.appendChild(document.createElement('br'));
//     }
// };