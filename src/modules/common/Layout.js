import Button from './Button'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img src="/img/logo.svg" width="30" height="30" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Domů <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Všechny charity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Filtr charit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  O projektu
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {children}
    </>
  )
}

export default Layout
