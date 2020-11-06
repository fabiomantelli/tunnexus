import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    font-weight: 400;
    text-align: center;
  }

  h2 {
    margin-top: 35px;
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
  }

  @media only screen and (max-width: 42.98em) {
    text-align: center;

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`
