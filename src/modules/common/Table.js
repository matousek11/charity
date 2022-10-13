import Button from './Button'
import ButtonClose from './ButtonClose'
import React, { useState } from 'react'
import styled from 'styled-components'
import Item from './Item'

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 25;
`
const ButtonCloseStyle = styled(ButtonClose)`
  top: 10px;
  right: 10px;
`
const MainDiv = styled.div`
  z-index: 30;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  background-color: white;
`
const TableScroll = styled.div`
  overflow-y: scroll !important;
  height: 70vh;
  margin-bottom: 10px;
`

const ItemStyle = styled(Item)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
`

const Table = ({ data, setIsVisible }) => {
  const [isDisplayed, setIsDisplayed] = useState(false)
  return (
    <>
      <Background />

      <MainDiv className="mx-5 px-5 my-5 py-2 rounded" id="sbirky">
        {!isDisplayed && (
          <>
            <div className="h3 text-center">Sbírky</div>
            <TableScroll>
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>Název</th>
                    <th>IČO</th>
                    <th>Bankovní účet</th>
                    <th>Okres</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((charity, i) => {
                    return (
                      <tr key={i}>
                        <td>{charity.properties.nazev}</td>
                        <td>{charity.properties.ico}</td>
                        <td>{charity.properties.cislo_bankovniho_uctu}</td>
                        <td>{charity.properties.nazev_okresu}</td>
                        <td></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </TableScroll>
            <ButtonCloseStyle
              text="Zavřít tabulku"
              setIsVisible={setIsVisible}
            />
          </>
        )}
        {isDisplayed && <ItemStyle setIsDisplayed={setIsDisplayed} />}
      </MainDiv>
    </>
  )
}

export default Table
