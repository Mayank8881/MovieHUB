import Footer from '@/Components/Footer';
import NavItems from '@/Components/NavItems';
import Navbar from '@/Components/Navbar';
import Result from '@/Components/Result';
import Welcome from '@/Components/Welcome';
import Header from '@/Components/Home/Header';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  let type;
  const genre = searchParams.genre || 'fetchTrending';
  if (genre=='fetchTopRated') {
    type=`/movie/top_rated`;
  }
  else if(genre=='fetchUpcoming'){
    type=`/movie/upcoming`;
  }
  else{
    type=`/trending/all/week`;
  }
  
  const res = await fetch(
    `https://api.themoviedb.org/3${type}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const results = data.results;
  console.log(results)
  return (
    <div className='overflow-hidden h-auto w-full '>
      <Header/>
      <NavItems/>
      <Result results={results} />
      <Footer/>
    </div>
  );
}