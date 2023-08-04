'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const MovieFilter = ({getMovies}) => {
    const [movies, setMovies] = useState([]);
    const [singleMovie, setSingleMovie] = useState({});
    const [dialog, setDialog] = useState(false);
    const [title, setTitle] = useState('');
    const [active, setActive ] = useState(1)
    const router = useRouter()

    useEffect(() => {
        fetchMovies('movie/now_playing', 1, "Now playing")
    }, [])

    const fetchMovies = async(query, id, title) => {
        setActive(id)
        setTitle(title)
      let result =  await getMovies(query);
        setMovies(result?.results);
      }

     const handleSingleMovie = async (id) => {
       router.push(`/movie/${id}`)
     }
      
  return (
    <div className='movie_page_wrapper'>
      <div className='top-bar'>
      <div className="movies-filter" >
        <button className={`movies-filter-button ${active === 1 && "movies-filter-button_active"}`} onClick={() => fetchMovies('movie/now_playing', 1, "Now playing")}>Now playing</button>
        <button className={`movies-filter-button ${active === 2 && "movies-filter-button_active"}`} onClick={() => fetchMovies('movie/popular', 2, "Popular")}>Popular</button>
        <button className={`movies-filter-button ${active === 3 && "movies-filter-button_active"}`} onClick={() => fetchMovies('movie/top_rated', 3, "Top rated")}>Top rated</button>
        <button className={`movies-filter-button ${active === 4 && "movies-filter-button_active"}`} onClick={() => fetchMovies('discover/movie?vote_average.gte=8&page=2&vote_count.gte=2000', 4, "Discover")}>Discover</button>
    </div>
      </div>
      <h2 className='page-title'>{title}</h2>
        <div className='movie-container'>
           
            {movies.map((movie, index) => {
                return (
                    <div key={index} className='single-movie-container'>
                        <div className='movie-image-container' onClick={() => handleSingleMovie(movie.id)}>
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
    </div>
  )
}

export default MovieFilter