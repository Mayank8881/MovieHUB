// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { AiFillLike } from "react-icons/ai";
// import Video from '@/Components/video';

// export default async function page({ params }) {
//     const movieId = params.id;
//     const res = await fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
//     );
//     const mov = await res.json();

//     let Rating = Math.round(mov.vote_average * 10) / 10;

//     return (
//         <>
//             <div className='snap-end'>
//                 <div className='xl:flex m-10 gap-10 h-auto lg:text-lg'>
//                     <div className='mt-10 w-full xl:w-[40%]'>
//                         <Image
//                             src={`https://image.tmdb.org/t/p/original/${mov.backdrop_path || mov.poster_path}`}
//                             width={600}
//                             height={900}
//                             className='rounded-3xl w-full h-auto object-cover'
//                             alt={mov.title || mov.name}
//                         />
//                     </div>
//                     <div className='xl:w-[60%] xl:h-auto'>
//                         <div className="order-1 md:order-2 flex flex-col mt-7">
//                             <div className='flex gap-5 mt-5 mb-4'>
//                                 <h1 className="text-4xl font-bold">{mov.title || mov.name}</h1>
//                                 <div className='bg-yellow-600 p-2 flex justify-center items-center rounded-full w-14 h-14 text-xl font-bold'>
//                                     {Rating}
//                                 </div>
//                             </div>

//                             <div className='flex gap-2 items-center mb-4'>
//                                 {mov.genres.map((genre, index) => (
//                                     <div key={index} className='bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-md text-sm'>
//                                         {genre.name}
//                                     </div>
//                                 ))}
//                                 <div className="text-gray-400 p-2 text-sm">{mov.runtime} min</div>
//                             </div>

//                             <div className="space-y-4">
//                                 <p className="text-gray-300 mb-4">{mov.overview}</p>
//                                 <div className='text-orange-600 flex items-center gap-2'>
//                                     <AiFillLike /> {mov.vote_count}
//                                 </div>
//                                 <p className='text-orange-600 mb-4'>{mov.first_air_date || mov.release_date}</p>
//                                 <Link href={mov.homepage} legacyBehavior>
//                                     <a target='_blank' className='text-blue-500 underline hover:text-blue-700'>
//                                         Official Website
//                                     </a>
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="mt-6 h-0.5 bg-gray-600 dark:bg-slate-50"></div>
//                     </div>
//                 </div>

//                 <div className='flex justify-center mt-10'>
//                     <VideoComponent movieId={movieId} />
//                 </div>
//             </div>
//         </>
//     );
// }

// export async function VideoComponent({ movieId }) {
//     const res = await fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.API_KEY}`
//     );
//     const vid = await res.json();

//     return (
//         <div className='flex justify-center h-full w-full'>
//             <iframe
//                 src={`https://www.youtube.com/embed/${vid.results[0].key}`}
//                 frameBorder="0"
//                 allowFullScreen
//                 className='rounded-lg shadow-lg h-[400px] md:h-[500px] w-[100%] max-w-[1000px]'
//             />
//         </div>
//     );
// }


import Header from '@/Components/Home/Header';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillLike, AiFillStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";

// console.log('API Key:', process.env.NEXT_PUBLIC_API_KEY);

export default async function MovieDetailsPage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const mov = await res.json();

  let Rating = Math.round(mov.vote_average * 10) / 10;

  return (
    <>
    
    <div
      className="min-h-screen text-gray-700 dark:text-gray-300"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${mov.poster_path || mov.poster_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-gradient-to-br from-black/60 to-black/30 min-h-screen">
        <div className='bg-gradient-to-br from-black/80 to-black/60 text-white' >
          <Header/>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="lg:flex items-center justify-center gap-8 lg:space-x-8">
            {/* Movie Poster */}
            <div className="flex lg:w-1/3 mb-8 lg:mb-0 h-[510px] w-[400px] border-4 border-gray-400  opacity-90 items-center transition duration-500 ease-in-out transform hover:scale-110 hover:-rotate-12 hover:border-orange-600 hover:text-green-400">
              <Image
                src={`https://image.tmdb.org/t/p/original/${ mov.backdrop_path}`}
                width={400}
                height={500}
                className="h-[500px] w-full rounded-xl shadow-2xl object-cover "
                alt={mov.title || mov.name}
              />
            </div>

            {/* Movie Details */}
            <div className="lg:w-2/3">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-300 
                  transition duration-500 ease-in-out transform hover:scale-110 hover:-rotate-6 hover:border-orange-600 hover:text-green-400">
                    {mov.title || mov.name}
                </h1>

                  <div className="flex items-center space-x-2 bg-orange-600 text-gray-900 px-3 py-3 rounded-full
                  transition duration-500 ease-in-out transform hover:scale-110 hover:-rotate-180 hover:border-orange-600">
                    {/* <AiFillStar className="text-2xl" /> */}
                    <span className="text-xl font-bold">{Rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {mov.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium 
                                transition duration-500 ease-in-out transform hover:scale-125 hover:rotate-12 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                    >
                      {genre.name}
                    </span>
                  ))}
                  <span
                    className="flex items-center space-x-1 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border-2 border-gray-300 
                              transition duration-500 ease-in-out transform hover:scale-110 hover:-rotate-12 hover:border-orange-600 hover:text-green-400"
                  >
                    <BiTime />
                    <span>{mov.runtime} min</span>
                  </span>
                </div>


                <div className='bg-gradient-to-br from-black/60 to-black/30 p-2 rounded-2xl'>
                  <p className="text-gray-300 text-lg  leading-relaxed">{mov.overview}</p>

                  <div className="flex items-center lg:space-x-44 space-x-8 text-gray-300">
                    <div className='flex gap-4'>
                      <div className="flex items-center space-x-1 ">
                        <AiFillLike className="text-orange-500" />
                        <span className='w-20'>{mov.vote_count} likes</span>
                      </div>
                      <div className='flex gap-4'>
                        <span>|</span>
                        <span className='w-24'>{mov.release_date}</span>
                      </div>
                      
                    </div>
                    <div>
                      <Link href={mov.homepage} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 w-fit">
                        <span>Official Website</span>
                        <FaExternalLinkAlt />
                      </Link>
                    </div>
                    
                  </div>
                </div>
                
              </div>
              {/* Video Section */}
              <div className="mt-12 overflow-hidden">
                {/* <div className="aspect-w-16 aspect-h-9 rounded-xl text-gray-300 flex justify-start overflow-hidden shadow-2xl text-3xl h-full w-full font-bold mb-6 text-start">Trailer</div> */}
                <VideoComponent movieId={movieId} />
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
    </div>
    </>
  );
}

async function VideoComponent({ movieId }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const vid = await res.json();

  return (
    <>
      <div className='aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl text-3xl flex-col border-4 border-gray-400 h-[250px] w-[600px]'>
        <iframe
          src={`https://www.youtube.com/embed/${vid.results[0].key}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </>
  );
}
