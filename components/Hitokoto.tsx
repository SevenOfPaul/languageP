'use client'

import { useEffect, useState } from 'react'
import randomHito, { HitokotoData } from '../lib/HitokotoData'



export const Hitokoto = () => {
  const [data, setData] = useState<HitokotoData | null>(null)
  async function getHito(){
    try{
         let res=await fetch("https://v1.hitokoto.cn/")
        setData(await res.json());
    }catch(e){
        setData(randomHito());
      console.error(e)
    }
  }
  useEffect(() => {
 (async()=>{
     await  getHito();
 })();
  }, [])

  if (!data) return null

  return (
    <div
      className="fixed md:bottom-4 bottom-36  right-4 z-50 max-w-sm hover:cursor-pointer"
      onClick={() => getHito()}
    >
      <div className="chat chat-end">
        <div className="chat-bubble bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <p className="mb-1">{data.hitokoto}</p>
          <p className="text-xs opacity-75">
            —— {data.from_who !== "未知" ? data.from_who : ""} 「{data.from}」
          </p>
        </div>
      </div>
    </div>
  );
}

