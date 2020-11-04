import React from 'react'

import Row from '../../styles/Row'
import Column from '../../styles/Column'

import { ReactComponent as BrandLogo } from '../../assets/menu-brand.svg'

import { Container } from './styles'

import NavBar from '../Navbar'

const Header: React.FC = () => {
  return (
    <Row style={{ position: 'fixed', top: '0%', width: '100%' }}>
      <Column size={1} maxWidth={200} marginLeft={2}>
        <BrandLogo
          style={{
            height: '70px',
            display: 'flex',
            justifyContent: 'center'
          }}
        />
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
