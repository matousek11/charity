import Head from 'next/head'
import Image from 'next/image'
import Table from '../src/modules/common/Table'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Charita</title>
        <link rel="icon" href="img/logo_icon_prevest.svg" />
      </Head>
      <div>
        <Table />
      </div>
    </>
  )
}
