import React, { useContext, useEffect, useState } from 'react'
import DarkModeContext from './DarkModeContext'
import { data } from 'react-router-dom';

export default function Movie() {

  const { isActive } = useContext(DarkModeContext)
  const [moviesData, setMoviesData] = useState([])

  const getMovies = async () => {
    try {
      let data = await fetch('https://movie-database-api1.p.rapidapi.com/list_movies.json?limit=15', {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com',
          'x-rapidapi-key': '42c10e19eamsh38ed1982908640ep10050djsn2620bfe2726a'
        }
      })
        .then((res) => res.json())
        .then((data) => setMoviesData(data.data.movies))
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };


  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className={`${isActive ? 'body' : ''} d-flex justify-content-center`}>
      <div className="container position-absolute mt-3">
        <table className={`table table-striped ${isActive ? 'table-dark' : ''}`}>
          <thead className="bg-secondary text-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Movie Name</th> {/* typo fixed here too */}
              <th scope="col">Category</th>
              <th scope='col'> Video </th>
            </tr>
          </thead>
          <tbody>
            {moviesData.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.title}</td>
                <td>{item.genres.join(" , ")}</td>
                <td><a href={item.url} className={`text-decoration-none  ${isActive ? 'text-light' : 'text-dark'}`}>{item.url}</a> </td>

              </tr>
            ))}
          </tbody>
        </table >
      </div>
    </div>
  )
}
