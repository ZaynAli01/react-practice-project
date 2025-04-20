import React, { useContext } from 'react'
import DarkModeContext from './DarkModeContext'

export default function Movie() {

  const { isActive } = useContext(DarkModeContext)
  const movies = [
    { name: "John Wick", genre: "Action" },
    { name: "The Conjuring", genre: "Horror" },
    { name: "La La Land", genre: "Romance" },
    { name: "The Hangover", genre: "Comedy" },
    { name: "World War Z", genre: "Horror/Action" },
    { name: "The Notebook", genre: "Romance" },
    { name: "Mad Max: Fury Road", genre: "Action" },
    { name: "Get Out", genre: "Horror" },
    { name: "Pride and Prejudice", genre: "Romance" },
    { name: "Superbad", genre: "Comedy" },
    { name: "Train to Busan", genre: "Horror/Action" },
    { name: "Before Sunrise", genre: "Romance" },
    { name: "Blade", genre: "Action/Horror" },
    { name: "Bridesmaids", genre: "Comedy" },
    { name: "A Quiet Place", genre: "Horror" },
  ]
  return (
    <div className={`${isActive ? 'body' : ''} d-flex justify-content-center`}>
      <div className="container position-absolute mt-3">
        <table className={`table table-striped ${isActive ? 'table-dark' : ''}`}>
          <thead className={`bg-secondary text-light`}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Moive Name</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.name}</td>
                <td>{item.genre}</td>
              </tr>
            ))}
          </tbody>
        </table >
      </div>
    </div>
  )
}
