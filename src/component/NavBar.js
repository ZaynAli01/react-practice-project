import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DarkModeContext from './DarkModeContext'

export default function NavBar(props) {
  const location = useLocation();
  const a = useContext(DarkModeContext)

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/movies", label: "Movies" },
    { path: "/signup", label: "SignUP" },
    { path: "/stopwatch", label: "StopWatch" },
  ];

  const toggleBtn = () => {
    a.setIsActive(!a.isActive)
  }

  return (
    <nav className={`navbar navbar-expand-lg ${!a.isActive ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`} style={{ height: '4rem' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.name}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex justify-content-between align-items-center w-100">
            <ul className="navbar-nav">
              {navLinks.map((link, key) => (
                <li className="nav-item" key={key}>
                  <Link
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    aria-current={location.pathname === link.path ? "page" : undefined}
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mb-0">
              <li>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    onClick={toggleBtn}
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                  />
                  <label
                    className={`form-check-label ${a.isActive ? 'text-light' : 'text-dark'}`}
                    htmlFor="flexSwitchCheckChecked"
                  >
                    {!a.isActive ? 'Dark Mode' : 'Light Mode'}
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
