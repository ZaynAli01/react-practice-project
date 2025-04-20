import React, { useState, useContext } from 'react'
import DarkModeContext from './DarkModeContext'

export default function Signup() {

  const { isActive } = useContext(DarkModeContext)

  const [value, setValue] = useState({})
  const [displayValue, setDisplayValue] = useState({})

  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault()
    setDisplayValue(value)
  }

  return (
    <div className={`${isActive ? 'body' : ''} d-flex justify-content-center`}>
      <div className="container mt-4 position-absolute">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Name</label>
            <input
              type="text"
              onChange={handleOnChange}
              className="form-control"
              name='name'
              id="nameInput"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input
              type="email"
              onChange={handleOnChange}
              className="form-control"
              name='Email'
              id="emailInput"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input
              type="password"
              onChange={handleOnChange}
              className="form-control"
              name='Password'
              id="passwordInput"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>

        <div className='w-100 border mt-4 p-3' style={{ height: "17rem" }}>
          <p><strong>Name:</strong> {displayValue.name}</p>
          <p><strong>Email:</strong> {displayValue.Email}</p>
          <p><strong>Password:</strong> {displayValue.Password}</p>
        </div>
      </div>
    </div>
  );
}
