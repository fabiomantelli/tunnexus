import React from 'react'

import Row from '../../styles/Row'
import Column from '../../styles/Column'

import { ReactComponent as BrandLogo } from '../../assets/menu-brand.svg'

import { Container } from './styles'

import NavBar from '../Navbar'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <Row style={{ position: 'fixed', top: '0%', width: '100%' }}>
      <Column size={1} maxWidth={200} marginLeft={2}>
        <Link href="/">
          <BrandLogo
            style={{
              height: '70px',
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          />
        </Link>
      </Column>
      <Column size={1} maxWidth={1152} marginRight={2}>
        <Container>
          <NavBar />
        </Container>
      </Column>
    </Row>
  )
}

export default Header
