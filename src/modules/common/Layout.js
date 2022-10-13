import Button from './Button'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            <img src="/img/logo.svg" width="30" height="30" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Domů <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Všechny charity
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Filtr charit
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  O projektu
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Button text="Jméno komponenty" />
      </div>
      {children}
    </>
  )
}

export default Layout
