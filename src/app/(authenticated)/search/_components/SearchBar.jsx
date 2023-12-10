import { Search } from 'lucide-react'
import React from 'react'

function SearchBar() {
  return (
    <form className='relative w-[55vw]'>
          <input
            className="w-full min-h-[2.3125rem] rounded-[4.375rem] bg-transparent border border-[#8D8D8D] py-2 pr-1 pl-10 text-white placeholder:text-[#A8A8A8] text-sm bg-[#393939]"
            placeholder="What do you want to listen to?"
            type="text"
            name="prompt"
            id="prompt"
          />
          <button className="absolute left-1.5 top-1/2 -translate-y-1/2 h-[1.7rem] w-[1.7rem] bg-[#C6C6C6] rounded-full flex items-center justify-center">
          <Search className="h-5 w-5" strokeWidth={1} />
          </button>
    </form>
  )
}

export default SearchBar
