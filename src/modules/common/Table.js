import React from 'react'

const Table = () => {
  return (
    <>
      <div class="mt-5 pb-5" id="cenik">
        <div class="h3">Sbírky</div>
        <table class="table table-hover table-striped">
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
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
