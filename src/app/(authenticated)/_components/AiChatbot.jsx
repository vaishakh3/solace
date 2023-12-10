"use client";

import { ArrowUp } from "lucide-react";
import Message from "./Message";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useChats } from "@/stores/chats";
import { useSession } from "next-auth/react";

function AiChatbot() {
  const { chats, addChat } = useChats();

  const { data: session } = useSession({

  });
 

  // console.log(chats)

  const chatMutation = useMutation((chats) => {
    return axios.post("/api/chat", chats);
  }, {
    onSuccess: (data) => {
      addChat(
        {
          from: "bot",
          message: data.data,
          timestamp: Date.now(),
        },
      );
      scrollToBottom()
    },
    onError: (err) => {
      console.log(err)
    }
  })

  useEffect(() => {
    if(session?.user){
      addChat({
        from: "bot",
        message: `Hello, ${session?.user?.name ?? "User"}. I'm e1even, How are you feeling today?`,
        timestamp: Date.now(),
      })
    }
  }, [session?.user?.name])

  const [prompt, setPrompt] = useState("");
  const chatRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (prompt.length > 2) {
      
      setPrompt("");
      scrollToBottom()
      // TODO handle prompt

      addChat(
        {
          from: "user",
          message: prompt,
          timestamp: Date.now(),
        },
      );

      await chatMutation.mutateAsync([...chats, {
        from: "user",
        message: prompt,
        timestamp: Date.now(),
      }])

     
    }
  }

  function scrollToBottom() {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, []);

  return (
    <>
      <h2 className="text-white text-xl p-5">e1even AI</h2>
      <div
        ref={chatRef}
        className="chat flex-grow h-[15rem] flex flex-col py-2 px-5 gap-5 overflow-auto"
      >
        {chats.map((chat, index) => (
          <Message key={index} from={chat.from} message={chat.message} />
        ))}
      </div>
      <form className="p-5" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            className="w-full min-h-[2.3125rem] rounded-[1.875rem] bg-transparent border border-[#8D8D8D] py-2 pl-3 pr-10 text-white placeholder:text-[#A8A8A8] text-sm"
            placeholder="How are you feeling?"
            type="text"
            name="prompt"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button disabled={chatMutation.isLoading} className="absolute right-1.5 top-1/2 -translate-y-1/2 h-[1.7rem] w-[1.7rem] bg-[#C6C6C6] rounded-full flex items-center justify-center disabled:opacity-50">
            <ArrowUp className="h-5 w-5" strokeWidth={0.8} />
          </button>
        </div>
      </form>
    </>
  );
}

export default AiChatbot;
