import React from 'react'
import SingleMovie from '@/app/_components/movies/singleMovie'

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





const Page= () => {
  const movies = getMovies();
  return (
        <SingleMovie movies={movies}/>
  )
}

export default Page