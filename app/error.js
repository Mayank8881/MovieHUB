"use client"
import React from 'react'
import Link from 'next/link';
import { useEffect } from 'react'
export default function error({error,reset}) {
    useEffect(()=>{
        console.log(error);
    },[error]);
  return (
    <div className='flex justify-center h-screen overflow-hidden m-20 text-3xl'>
        <div className='flex-col'>
            <h1>Oops! Something went wrong </h1>
            <Link href='/' className='text-orange-600 ml-32'>Try Again !!!</Link>
        </div>
    </div>

  );
}
