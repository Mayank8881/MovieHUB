import Card from '@/app/Card'
import React from 'react'

export default function Result({results}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl gap-x-4 gap-y-2 mx-auto py-4'>
    {
        results.map((result)=>(
            <Card key={result.id} result={result}/>
        ))
    }
    </div>
   
  )
}
