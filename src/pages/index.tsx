import Head from 'next/head'
import React from 'react'

import TunnexusMainLogo from '../assets/logo.svg'
import { Container } from '../styles/Pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>TunnexusMainLogo</title>
      </Head>

      <TunnexusMainLogo className="svgStyle" />
      <h1>Everything is code. Coming soon.</h1>
    </Container>
  )
}

export default Home
