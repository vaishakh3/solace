
import { getSession } from '@/app/api/auth/[...nextauth]/route'
import AiChatbot from '../_components/AiChatbot'
import NavControls from '../_components/NavControls'
import Quiz from "../_components/Quiz";


export default async function MainLayout({ children }) {
  return (
    <main className="w-full h-full p-7 flex flex-col">
        <NavControls />
        <div className='flex flex-grow gap-7'>
            <div className='no-scroll w-[46vw] h-[73vh] overflow-auto'>
             {children}
            </div>
            <div className='chat-border w-[23.5vw] flex flex-col'>
               {/* <AiChatbot /> */}
               <Quiz />
            </div>
        </div>
    </main>
  );
}
