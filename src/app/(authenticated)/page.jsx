import { getSession } from '@/app/api/auth/[...nextauth]/route'
import AiChatbot from './_components/AiChatbot'
import NavControls from './_components/NavControls'
import HomeSection from './_components/HomeSection'


export default async function Home() {
  const session = await getSession() 
  return (

    <main className="w-full h-full p-7 flex flex-col">
        <NavControls />
        <div className='flex flex-grow gap-7'>
            <div className='no-scroll flex-grow h-[73vh] overflow-auto'>
              <HomeSection />
            </div>
            <div className='chat-border w-[21.75rem] flex flex-col'>
              <AiChatbot />
            </div>
        </div>
    </main>
  )
}
