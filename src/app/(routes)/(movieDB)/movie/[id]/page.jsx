import React from 'react'
import Image from 'next/image';

const getMovies = async (id) => {
    const url = `https://api.themoviedb.org/3/${id}`;
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


    const movie = await getMovies(`movie/${params.id}`)
    console.log(movie)

    const handleRunitime = (runtime) => {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;
        return `${hours}h ${minutes}m`
    }

    let runtime = handleRunitime(movie.runtime)
    return (
        <div className='movie-page-container'>
            <div className="movie-page-container_top">
                <div className='movie-page-container_top_inner_image'>
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        fill={true}
                        sizes={"700"}
                        loading="eager"
                        quality={100}
                        priority
                        alt={`Poster for ${movie.title}`}
                    />
                </div>
                <div className='movie-page-container_top_inner'>
                    <div className='single-movie-poster-image-container'>
                        <Image
                            src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                            fill={true}
                            sizes={"700"}
                            loading="eager"
                            quality={100}
                            priority
                            alt={`Poster for ${movie.title}`}
                        />
                    </div>
                    <div className='single-movie-details'>
                        <div className='single-movie-details_top'>
                            <h1>{movie.title} <span>{`(${movie.release_date})`}</span></h1>
                            <div>
                                {movie.genres.map((genre, index) => {
                                    if(index === movie.genres.length - 1) {
                                        return (
                                            <span key={index}> {genre.name}</span>
                                        )
                                    }
                                    return (
                                        <span key={index}> {genre.name},</span>
                                    )
                                })}
                                <span className='movie-single-circle-divider'> • </span>
                                <span>{runtime}</span>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page