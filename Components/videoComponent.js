import page from "@/app/movie/[id]/page";

export async function VideoComponent(props) {
    const movieId=props.mov.id;
    const res= await fetch (
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    const vid = await res.json();

   
    return <iframe src={`https://www.youtube.com/embed/${vid.results[0].key}`} frameborder="0" allowfullscreen />
  }