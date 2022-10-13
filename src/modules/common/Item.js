import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background-color: lightgray !important;
  margin: 0 auto;
`

const Item = ({ charity, setIsDisplayed, id }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Background className="col-md-4 rounded">
            <h2>{charity.properties.nazev}</h2>
            <p>{charity.properties.ucel}</p>
            <h6>IČO</h6>
            <p>{charity.properties.ico}</p>
            <h6>Číslo účtu</h6>
            <p>{charity.properties.cislo_bankovniho_uctu}</p>
            <h6>Webové stránky</h6>
            <p>{charity.properties.www}</p>

            <button
              onClick={() => setIsDisplayed(true)}
              type="button"
              className="btn btn-outline-dark"
            >
              Zavřít tabulku
            </button>
          </Background>
        </div>
      </div>
    </>
  )
}

export default Item
