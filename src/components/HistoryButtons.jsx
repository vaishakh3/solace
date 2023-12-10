import { ArrowLeft, ArrowRight } from "lucide-react"

function HistoryButtons() {
  return (
    <div className="flex gap-3 text-white">
        <button className="w-8 h-8 rounded-full bg-[#393939] flex justify-center items-center">
          <ArrowLeft strokeWidth={0.75} />
        </button>
        <button className="w-8 h-8 rounded-full bg-[#393939] flex justify-center items-center">
          <ArrowRight strokeWidth={0.75} />
        </button>
      </div>
  )
}

export default HistoryButtons
