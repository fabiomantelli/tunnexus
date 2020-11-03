import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 30px 0 30px;

  h1 {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.text};
    font-weight: 300;
  }

  @media only screen and (max-width: 61.98em) {
    .title-mobile {
      width: 100%;
    }
  }
`
