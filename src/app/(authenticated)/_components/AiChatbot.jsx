"use client"

import { ArrowUp } from "lucide-react";
import Message from "./Message";
import { useEffect, useRef } from "react";

function AiChatbot() {
    const chatRef = useRef(null);

    useEffect(() => {
        if(chatRef.current){
            chatRef.current.scrollTo({
                top: chatRef.current.scrollHeight,
                behavior: "smooth"
            })
        }
    }, [])

  return (
    <>
      <h2 className="text-white text-xl p-5">e1even AI</h2>
      <div ref={chatRef} className="chat flex-grow h-[15rem] flex flex-col py-2 px-5 gap-5 overflow-auto">
        <Message from="user" />
        <Message from="bot" />
        <Message from="bot" />
        <Message from="bot" />
        <Message from="bot" />
      </div>
      <form className="p-5">
        <div className="relative">
          <input
            className="w-full min-h-[2.3125rem] rounded-[1.875rem] bg-transparent border border-[#8D8D8D] py-2 pl-3 pr-10 text-white placeholder:text-[#A8A8A8] text-sm"
            placeholder="How are you feeling?"
            type="text"
            name="prompt"
            id="prompt"
          />
          <button className="absolute right-1.5 top-1/2 -translate-y-1/2 h-[1.7rem] w-[1.7rem] bg-[#C6C6C6] rounded-full flex items-center justify-center">
            <ArrowUp className="h-5 w-5" strokeWidth={0.8} />
          </button>
        </div>
      </form>
    </>
  );
}


export default AiChatbot;
