import React from 'react'
import MovieFilter from '@/app/_components/movies/Movies'



const getMovies = async (query) => {
  "use server"
  const url = `https://api.themoviedb.org/3/${query}`;
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




const Page = async () => {
  return (
    <div className='movie_page_wrapper'>
      <MovieFilter getMovies={getMovies}  />
    </div>
  )
}

export default Page