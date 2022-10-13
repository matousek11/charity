import React from 'react'

const ButtonClose = ({ text, setIsVisible }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-danger"
      onClick={() => setIsVisible(false)}
    >
      Zavřít
    </button>
  )
}

export default ButtonClose
