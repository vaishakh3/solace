import Sidebar from "@/components/Sidebar/Sidebar";
import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";



export default async function MainLayout({ children }) {
  return (
   <div className="h-full flex flex-col">
    <div className="flex-1 flex p-5 gap-3.5">
      <div className="flex-shrink-0 w-80">
          <Sidebar/>
      </div>
      <div className="flex-grow bg-black rounded-[0.625rem]">{children}</div>
    </div>
    <div className="blue-blur h-[10%] text-white">
      <AudioPlayer/>
    </div>
   </div>
  )
}
