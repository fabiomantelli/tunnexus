import styled from 'styled-components'

export const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 1rem 0 1rem;
  gap: 49px;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
`
