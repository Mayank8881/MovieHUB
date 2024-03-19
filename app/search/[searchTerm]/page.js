import Result from '@/Components/Result';

export default async function SearchPage({ params }) {
  const seachTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=true`
    ,{timeout: 5000}
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
        <h1 className='text-center pt-6'>No results found</h1>}
      {results && <Result results={results} />}
    </div>
  );
}