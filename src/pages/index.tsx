import Head from 'next/head'
import React from 'react'

import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as Arrow } from '../assets/arrow.svg'
import Column from '../styles/Column'
import Grid from '../styles/Grid'
import { Container } from '../styles/Pages/Home'
import Row from '../styles/Row'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <Grid>
      <main>
        <section>
          <Row>
            <Column size={1} marginLeft={2} marginRight={2}>
              <Container>
                <Logo className="title-mobile" />
                <h1>
                  Everything is code. <br />
                  Coming soon.
                </h1>
                <Link href="/main">
                  <Arrow style={{ marginTop: '25px', cursor: 'pointer' }} />
                </Link>
              </Container>
            </Column>
          </Row>
        </section>
      </main>
    </Grid>
  )
}

export default Home
