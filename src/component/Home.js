import React, { useState, useEffect, useContext } from 'react'
import DarkModeCeontext from './DarkModeContext'
import './style.css'

export default function Home() {
  const { isActive } = useContext(DarkModeCeontext)

  const [total, setTotal] = useState(0)
  const [value, setValue] = useState('')

  const incrimentNum = () => setTotal(prev => prev + 1)
  const decrimentNum = () => setTotal(prev => prev - 1)

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour >= 0 && currentHour <= 12) {
      setValue('Good Morning')
    } else if (currentHour > 12 && currentHour <= 17) {
      setValue('Good Afternoon')
    } else if (currentHour > 17 && currentHour <= 20) {
      setValue('Good Evening')
    } else {
      setValue('Good Night')
    }
  }, [])

  return (
    <div className={`${isActive ? 'body' : ''} d-flex justify-content-center`}>
      <div className="container position-absolute mt-5 d-flex flex-column justify-content-center align-items-center">
        <h3>Hello {value}</h3>
        <div className="mt-3">
          <button
            className={`btn btn-secondary me-2 btn-sm ${total === 0 ? 'disabled' : ''}`}
            onClick={decrimentNum}
            disabled={total === 0}
          >
            Decrement
          </button>
          <span className="fs-4">{total}</span>
          <button
            className="btn btn-secondary ms-2 btn-sm"
            onClick={incrimentNum}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  )
}
