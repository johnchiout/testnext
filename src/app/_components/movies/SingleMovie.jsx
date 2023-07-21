import React from 'react'
import Image from 'next/image';



const getMovies = async () => {
    const account_id = 20182941;
    const url = `https://api.themoviedb.org/3/discover/movie`;
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


const SingleMovie = async () => {
    const movies = await getMovies();
    let newMovies = [movies]
    return (
        <div>
           {newMovies.map((movie, index) => {
                    return (
                       <div key={index}>
                         <div  className='movie-image-container'>
                        <Image 
                            className='movie-image'
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            fill={true}
                            alt={`Poster for ${movie.title}`}
                        />
                        </div>
                       </div>

                    )
              
           })}
        </div>
    )
}

export default SingleMovie