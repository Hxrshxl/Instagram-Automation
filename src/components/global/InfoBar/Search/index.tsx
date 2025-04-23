import React from 'react'
import { Search, SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className="flex overflow-hidden gap-x-2 border-[1px] border-[#352CC] rounded-full px-4 py-1 items-center flex-1">
   <SearchIcon className="text-[#352CC]"/>
    <Input 
      placeholder="Search by name, email or status"
      className="border-none outline-none ring-0 focus:ring-0 flex-1  bg-transparent placeholder:text-[#352CC]"
    />
  </div>
  

  )
}

export default SearchBar