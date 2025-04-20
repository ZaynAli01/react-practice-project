import React, { useState, useEffect, useContext } from 'react'
import DarkModeContext from './DarkModeContext'

export default function Stopwatch() {
  const { isActive } = useContext(DarkModeContext)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning])

  const handleStartStop = () => {
    setIsRunning(prev => !prev)
  }

  const handleReset = () => {
    setIsRunning(false)
    setSeconds(0)
  }

  const formatTime = (time) => {
    const mins = String(Math.floor(time / 60)).padStart(2, '0')
    const secs = String(time % 60).padStart(2, '0')
    return `${mins}:${secs}`
  }

  return (
    <div className={`${isActive ? 'body' : ''} d-flex justify-content-center`}>
      <div className='text-center mt-4 position-absolute'>
        <h1>{formatTime(seconds)}</h1>
        <button className={`btn ${!isRunning ? 'btn-success' : 'btn-danger'} me-2`} onClick={handleStartStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button className='btn btn-warning' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
