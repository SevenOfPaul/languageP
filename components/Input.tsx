import { motion } from "framer-motion";
import {useState,useRef} from "react";
    import { SendHorizontal } from "lucide-react";
export function Input({className,getInput}){
    const [isInput,setIsInput]=useState(false);
    const textInput=useRef(null);
    function handleInput(e: React.FormEvent<HTMLTextAreaElement>){
        const target=e.target as HTMLTextAreaElement;
        if(target.value.length>0){
            setIsInput(true); 
        }else{
            setIsInput(false);
        }
    }
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>){
        if(e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend(); 
        }
    }
    function handleSend(){
        if(isInput){
            getInput(textInput.current.value);
            textInput.current.value = ""; 
            setIsInput(false);
        } 
    }
    return <motion.div className={className} initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}>
        <div className="flex-1 max-w-[98%]">
            <textarea ref={textInput} className="w-[92%] h-auto resize-none min-h-10 focus:ring-0 focus:border-transparent
            focus:border-none" placeholder="请输入你的问题" onInput={(e)=>handleInput(e)} onKeyDown={handleKeyDown}/>
        </div>
         <div className={`w-10 rounded-md shadow-sm absolute bottom-2 left-[92%]
           p-2 cursor-pointer
           ${isInput?'bg-purple-500 hover:bg-purple-600 hover:scale-110 transition-colors duration-200 ':'bg-purple-300'}`
           }>
         <SendHorizontal className={isInput?'text-white':'text-gray-100'} onClick={handleSend}/>
         </div>
    </motion.div>
}
