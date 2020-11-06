import React from 'react'

import Column from '../styles/Column'
import Grid from '../styles/Grid'
import Row from '../styles/Row'

import Header from '../components/Header'
import { Container } from '../styles/Pages/Main'

const Main: React.FC = () => {
  return (
    <Grid>
      <Header />

      <section>
        <Row style={{ marginTop: '70px' }}>
          <Column size={1} marginLeft={2} marginRight={2}>
            <Container>
              <h1>
                A modern web programming <br />
                company
              </h1>
              <h2>Your competitive advantage in the age of globalization</h2>
            </Container>
          </Column>
        </Row>
      </section>
    </Grid>
  )
}

export default Main
