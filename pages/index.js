import Head from 'next/head'
import Image from 'next/image'
import Table from '../src/modules/common/Table'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Charita</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Table />
      </div>
    </>
  )
}
