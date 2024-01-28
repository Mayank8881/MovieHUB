"use client"
import React from 'react'
import Navbar from './Navbar'
export default function NavItems() {
  return (
    <div className='flex bg-orange-200 dark:bg-gray-600  h-16 items-center justify-center text-2xl mt-3'>
      <div className='ml-4 flex gap-10 '>
        <Navbar title='Trending' param='fetchTrending'/>
        <Navbar title='TopRated' param='fetchTopRated' />
        <Navbar title='UpComing' param='fetchUpcoming'/>
        </div>
    </div>

  )
}
