import { useEffect, useState } from 'react'
import Head from 'next/head'
import TableRow from '../components/TableRow'

export default () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await fetch('/api')
      const newData = await res.json()
      setData(newData)
    }
    getData()
  }, [])
  return (
    <main>
      {/* <style jsx>`
      .container-scroll {
        display: grid;
        grid-column-template: auto auto auto;
      }`
      </style> */}
      <Head>
        <title>Next.js, FaunaDB and Node.js</title>
        <meta
          name="viewport"
          content="initial-scale=1.2, width=device-width"
          key="viewport"
        />
        <link rel="stylesheet" href="static/css/cssrad.css"></link>
        <link rel="stylesheet" href="static/css/style.css"></link>
      </Head>
      <h1>Next.js, FaunaDB and Node.js</h1>
      <hr />
      <div className="container">
        <div className="container-grid">
          <h2>Customer Data</h2>
          <div className="table">
            <h4 className="name">name</h4>
            <h4 className="telephone">telephone</h4>
            <h4 className="credit-card">credit card</h4>
          </div>
          {data.length > 0 ? (
            data.map(d => (
              <TableRow
                key={d.data.telephone}
                creditCard={d.data.creditCard.number}
                firstName={d.data.firstName}
                lastName={d.data.lastName}
                telephone={d.data.telephone}
              />
            ))
          ) : (
            <>
              <TableRow loading />
              <TableRow loading />
              <TableRow loading />
            </>
          )}
        </div>
      </div>
    </main>
  )
}
