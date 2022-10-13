import { Button } from 'bootstrap'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <h1>Charita</h1>
        <Button />
      </div>
      {children}
    </>
  )
}

export default Layout
