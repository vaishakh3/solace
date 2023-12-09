import Sidebar from "@/components/Sidebar/Sidebar";



export default async function MainLayout({ children }) {
  return (
   <div className="h-full flex flex-col">
    <div className="h-[80%] flex-grow flex p-5 gap-3.5">
      <div className="flex-shrink-0 h-full w-80">
          <Sidebar/>
      </div>
      <div className=" bg-black rounded-[0.625rem]">{children}</div>
    </div>
    <div className="blue-blur h-[10%] text-white">player</div>
   </div>
  )
}
