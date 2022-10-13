import React from 'react'

const Button = ({ text, isDisplayed }) => {
  return (
    <button
      onClick={() => isDisplayed(true)}
      type="button"
      className="btn btn-outline-dark"
    >
      Zjistit více
    </button>
  )
}

export default Button
