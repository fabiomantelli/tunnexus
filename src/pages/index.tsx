import Head from 'next/head'
import React from 'react'

import { ReactComponent as TunnexusMainLogo } from '../assets/logo.svg'
import Column from '../styles/Column'
import Grid from '../styles/Grid'
import { Container } from '../styles/Pages/Home'
import Row from '../styles/Row'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>TunnexusMainLogo</title>
      </Head>
      <Grid>
        <main>
          <section>
            <Row>
              <Column size={1} marginLeft={2} marginRight={2}>
                <Container>
                  <TunnexusMainLogo className="title-mobile" />
                  <h1>Everything is code. Coming soon.</h1>
                </Container>
              </Column>
            </Row>
          </section>
        </main>
      </Grid>
    </>
  )
}

export default Home
