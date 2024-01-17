'use client'
import {useState,React} from 'react'
import {useRouter} from 'next/navigation'
import { FaSearch } from "react-icons/fa";

export default function SearchBox() {

    const[search,setSearch]=useState('');
    const router=useRouter();
    const handleSubmit=(e)=>{
        e.preventDefault();
        router.push(`/search/${search}`)
    }

  return (
    <form onSubmit={handleSubmit} className='flex justify-center items-center gap-2 '>
        <input type='text' placeholder='search movie' value={search} onChange={(e)=> setSearch(e.target.value)} 
            className='bg-transparent w-32 lg:w-40 text-center border border-orange-600 rounded-xl p-2 placeholder-orange-600 dark:placeholder-gray-400'/>
        <button className='text-orange-600' disabled={search===''}><FaSearch /></button>
    </form>
  )
}
