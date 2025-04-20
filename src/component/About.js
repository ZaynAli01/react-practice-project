import React, { useState, useContext } from 'react'
import DarkModeContext from './DarkModeContext'

export default function About() {
  const [value, setValue] = useState()
  const [clicked, setClicked] = useState(false)
  const { isActive } = useContext(DarkModeContext)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setClicked(true)

  }

  const handleOnChange = (e) => {
    setValue(e.target.value)
    setClicked(false)
  }


  return (
    <>
      <div className={`${isActive ? 'body' : ''} d-flex justify-content-center`}>
        <div className='container position-absolute mt-4'>
          <form onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Enter text Here</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleOnChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <div id="emailHelp" className={`form-text mt-4 ${clicked ? '' : 'd-none'} ${isActive ? 'text-light' : 'text-dark'}`}>{value}</div>
        </div>
      </div>
    </>
  )
}
