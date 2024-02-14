"use client";
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'
export default function Navbar({title,param}) {
    const searchParams =useSearchParams();
    const genre=searchParams.get('genre')
  return (
    // <div className='flex bg-orange-200 dark:bg-gray-600 gap-10 justify-center h-16 items-center text-2xl mt-3'>
    //     <Link href="#" className='hover:text-orange-600 '><span>Trending</span></Link>
    //     <Link href="#" className='hover:text-orange-600 '><span>Top Rated</span></Link>
    // </div>
    <div>
        <Link 
        className={`hover:text-orange-600 font-semibold ${genre==param?'underline underline-offset-8 decoration-orange-600 rounded-lg' : ''}`}
        href={`/?genre=${param}`}><span>{title}</span></Link>
    </div>
  )
}
