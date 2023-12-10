import HistoryButtons from "@/components/HistoryButtons";
import SearchBar from "./_components/SearchBar";
import UserPreference from "@/components/UserPreference";
import { Bell } from "lucide-react";
// import UserPreference from "@/components/UserPreference"

function page() {
  return (
    <main className="w-[74.8vw]">
      <div className="p-7 flex justify-between items-center">
        <HistoryButtons />
        <SearchBar />
        <div className="flex gap-3">
          <button className="text-white bg-[#393939] w-8 h-8 flex items-center justify-center rounded-full">
            <Bell className="h-5 w-5" strokeWidth={1} />
          </button>
          <UserPreference />
        </div>
      </div>
      <div className="no-scroll p-7 h-[71vh] overflow-auto">
        <div
          className="text-white aspect-[3.628/1] rounded-lg py-8 px-10"
          style={{
            backgroundImage: "url(/images/featuredlarge.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-[1.62906rem]">Featuring</h2>
          <div className="mt-6">
            <h3 className="text-[3.00406rem] capitalize [leading-trim:both] max-w-[23.875rem] [line-height:3.5rem]">
            Metro Boomin &
The Weekend
            </h3>
            <p className="text-[0.75rem] [leading-trim:both] max-w-[15rem] my-2">
              Discover Metro's latest hits and records listen to Metro Boomin's
              latest playlist
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-9 text-white mt-10">
          <div className="">
            <img className="aspect-square rounded-[0.625rem] w-full" src="/images/happy.png" alt="" />
            <p className="mt-2">Happy</p>
          </div>
          <div className="">
            <img className="aspect-square rounded-[0.625rem]  w-full" src="/images/happy.png" alt="" />
            <p className="mt-2">Happy</p>
          </div>
          <div className="">
            <img className="aspect-square rounded-[0.625rem]  w-full" src="/images/happy.png" alt="" />
            <p className="mt-2">Happy</p>
          </div>
          <div className="">
            <img className="aspect-square rounded-[0.625rem]  w-full" src="/images/happy.png" alt="" />
            <p className="mt-2">Happy</p>
          </div>
          <div className="">
            <img className="aspect-square rounded-[0.625rem]  w-full" src="/images/happy.png" alt="" />
            <p className="mt-2">Happy</p>
          </div>
          <div className="">
            <img className="aspect-square rounded-[0.625rem]  w-full" src="/images/happy.png" alt="" />
            <p className="mt-2">Happy</p>
          </div>
          <div className="">
            <img className="aspect-square rounded-[0.625rem]  w-full" src="/images/happy.png" alt="" />
            <p className="mt-2">Happy</p>
          </div>
          <div className="">
            <img className="aspect-square rounded-[0.625rem]  w-full" src="/images/happy.png" alt="" />
            <p className="mt-2">Happy</p>
          </div>
          <div className="">
            <img className="aspect-square rounded-[0.625rem]  w-full" src="/images/happy.png" alt="" />
            <p className="mt-2">Happy</p>
          </div>
      </div>
      </div>
     
    </main>
  );
}

export default page;
