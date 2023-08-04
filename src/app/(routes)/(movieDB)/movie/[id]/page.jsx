import React from 'react'
import MovieFilter from '@/app/_components/movies/Movies'
import Image from 'next/image';


const getMovies = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    console.log(url)
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzJhMTdkOGQ5NmMwNjVlZGNiMDZkY2QxOWViYmI5ZCIsInN1YiI6IjY0YmE3ZTRkNGQyM2RkMDBhZDBkYjgyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6kf_cG-73K23KX4yAriEvabGKb9jDaMEtNW366n5jOU';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'accept': 'application/json'
        }

    })

    const data = await response.json()
    return data;
}




const Page = async ({ params }) => {


    const movie = await getMovies(params.id)
    const movieImages = await getMovies(`${params.id}/images`)
    console.log(movieImages)
    return (
        <div className='movie-page-container'>

            <div className="movie-page-container_top">
            <div className='movie-page-container_top_inner_image'>
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        fill={true}
                        sizes={"100% 600px"}
                        alt={`Poster for ${movie.title}`}
                    />
                    </div>
                <div className='movie-page-container_top_inner'>
                    <p>sefsef</p>
                </div>
            </div>
        </div>
    )
}

export default Page