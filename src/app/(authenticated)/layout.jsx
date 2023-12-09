import Sidebar from "@/components/Sidebar/Sidebar";



export default async function MainLayout({ children }) {
  return (
   <div className="h-full flex flex-col">
    <div className="flex-1 flex p-5 gap-3.5">
      <div className="flex-shrink-0 w-80">
          <Sidebar/>
      </div>
      <div className="bg-green-400 flex-grow">{children}</div>
    </div>
    <div className="blue-blur h-[10%] text-white">player</div>
   </div>
  )
}
