import Button from './Button'
import React from 'react'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark pl-4">
          <a className="navbar-brand" href="#">
            <img
              className="mx-4"
              src="/img/logo.svg"
              width="30"
              height="30"
              alt="logo"
            />
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
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link" href="#">
                    Domů <span className="sr-only"></span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link" href="#">
                    Tabulka charit <span className="sr-only"></span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/map-charity">
                  <a className="nav-link" href="#">
                    Mapa charit
                  </a>
                </Link>
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
