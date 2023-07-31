import React from 'react'
import Image from 'next/image';
import MetaScore from './MetaScore';


const SingleMovie = async ({movies}) => {
   

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