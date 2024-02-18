'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";

export default function Card({result}) {
    let vote_average = result.vote_average;
  let roundedNumber = Math.round(vote_average * 10) / 10;
  return (
    <div className=' rounded-lg hover:scale-90 sm:hover:scale-105 md:hover:scaale-105 m-2 overflow-hidden lg:hover:scale-105 '>
        <Link href={`/movie/${result.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${
                 result.poster_path
            }`}
            width={500}
            height={300}
            className='sm:rounded-t-lg '
        ></Image>
        {/* <div className='flex gap-10 h-6 items-center'> */}
            {/* <div className='text-orange-600 font-bold'>
                    {result.title || result.name}
            </div>
            <p>
                {roundedNumber}
            </p> */}
            {/* <p>
                {result.first_air_date || result.release_date}
            </p> */}
        {/* </div> */}
        
        {/* <div className='flex-col m-3 space-y-2 ' >
            <div className='text-orange-600 font-bold'>
                {result.title || result.name}
            </div>
            <p className='line-clamp-3'>
                {result.overview}
            </p>
            <div className='flex space-x-28'>
                <p>
                    {result.first_air_date || result.release_date}
                </p>
                <div className='flex gap-1 place-items-center'>
                <FcLikePlaceholder />
                    {result.vote_count}
                </div>
            </div>
            
            
            
        </div> */}
        </Link>
    </div>
  )
}
