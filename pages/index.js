import Head from 'next/head'
import Image from 'next/image'
import Item from '../src/modules/common/Item'
import Table from '../src/modules/common/Table'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Head>
        <title>VSÚKHK</title>
        <link rel="icon" href="img/logo_icon_prevest.svg" />
      </Head>
      <div>
        <div className="p-4 p-my-5 mx-4 my-0 rounded bg-light ">
          <div className="col-md-6 px-0">
            <h1 className="display-4">O projektu</h1>
            <p className="lead my-3">
              Pokud si lámete hlavu nad tím, do jaké sbírky vložit své peníze,
              jste na správné stránce! Náš nástroj Vám pomůže vyfiltrovat
              veřejné sbírky, můžete díky němu podpořit přesně to, co Vás
              zajímá. Můžete si tedy určit, zda chcete investovat do renovace
              památek, výstavbu nového kina nebo pomoct lidem se zdravotním
              postížením.
            </p>
            <p className="lead mb-0"></p>
          </div>
        </div>
        <div className="row mx-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary"></strong>
                <h3 className="mb-0">Chcete rozvíjet kraj ve kterém žijete?</h3>
                <div className="mb-1 text-muted">
                  Kdo by nechtěl rozvíjet Královehradecký kraj?!
                </div>
                <p className="card-text mb-auto">
                  Veřejných sbírek je po České Republice opravdu dost, proč ale
                  nepodpořit renovaci památek v místě, ve kterém žijete?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success"></strong>
                <h3 className="mb-0">Můžu podpořit víc sbírek?</h3>
                <div className="mb-1 text-muted">
                  Chci podpořit více sbírek jednou částkou, pomůžete mi to
                  spočítat?
                </div>
                <p className="mb-auto">
                  Určitě, stačí označit sbírky, které chcete podpořit, poté
                  vyplnit částku a zda chcete rozdělit částku rovným dílem, naše
                  webová aplikace vám ukáže, kolik peněz vložit na jaké číslo
                  účtu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
