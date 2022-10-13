import Button from './Button'
import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 25;
`

const MainDiv = styled.div`
  z-index: 30;
  top: 0;
  position: absolute;
  background-color: white;
`
const TableStyle = styled.table`
  max-height: 60%;
`

const Table = ({ data }) => {
  return (
    <>
      <Background />
      <MainDiv className="mx-5 px-5 my-5 py-2" id="sbirky">
        <div className="h3 text-center">Sbírky</div>
        <TableStyle className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Název</th>
              <th>IČO</th>
              <th>Datum zahájení</th>
              <th>Datum ukončení</th>
              <th>Bankovní účet</th>
              <th>Stránky</th>
              <th>Okres</th>
              <th>Obec</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apropo Jičín</td>
              <td>01599682</td>
              <td>1.6.2014</td>
              <td>Na dobu neurčitou</td>
              <td>263060806/0300</td>
              <td>https://apropojicin.cz</td>
              <td>Jičín</td>
              <td>Jičín</td>
              <td>
                <a href="#">
                  <Button text="Zobrazit více" />
                </a>
              </td>
            </tr>
          </tbody>
        </TableStyle>
      </MainDiv>
    </>
  )
}

export default Table
