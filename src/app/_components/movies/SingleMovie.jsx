import React from 'react'
import Image from 'next/image';
import MetaScore from './MetaScore';

const getMovies = async () => {
    const account_id = 20182941;
    let min_date = new Date();
    let max_date = new Date();
    const url = `https://api.themoviedb.org/3/movie/now_playing?page=2`;
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
    console.log(movies)

    return (
        <div className='movie-container'>
            {movies.results.map((movie, index) => {
                return (
                    <div key={index} className='single-movie-container'>
                        <div className='movie-image-container'>
                            <Image
                                className='movie-image'
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                fill={true}
                                sizes={"220px 220px"}
                                alt={`Poster for ${movie.title}`}
                            />

                        </div>
                        <div className="score-container">
                            <svg class="circle-container" viewBox="2 -2 28 36" xmlns="http://www.w3.org/2000/svg">
                                <circle className="circle-container__background" r="16" cx="16" cy="16"></circle>
                                <circle
                                    className="circle-container__progress"
                                    r="16"
                                    cx="16"
                                    cy="16"
                                    style={{
                                        strokeDashoffset: '0',
                                        strokeDasharray: `${movie.vote_average * 10} 100`,
                                        stroke: movie.vote_average * 10 > 70 ? '#00ff00' : movie.vote_average * 10 > 50 ? '#ffff00' : '#ff0000',
                                    }}
                                >
                                </circle>
                            </svg>
                            <span className='score'>{movie.vote_average}</span>
                        </div>
                        <div className='movie-details'>
                            <p className='movie-details-date'>{movie.release_date}</p>
                            <p className='movie-details-title'>{movie.title}</p>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default SingleMovie