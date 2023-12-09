import HistoryButtons from "@/components/HistoryButtons"
import SearchBar from "./_components/SearchBar"
// import UserPreference from "@/components/UserPreference"

function page() {
  return (
    <main className="w-[74.8vw]">
      <div className="p-7 flex justify-between">
        <HistoryButtons />
        <SearchBar />
        <div>
          {/* <UserPreference /> */}
        </div>
      </div>
    </main>
  )
}

export default page
