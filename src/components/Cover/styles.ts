import styled from 'styled-components'
import cover from '../../assets/cover.png'

export const CoverContainer = styled.header`
  height: 18.5rem;
  padding: 4rem auto 0;

  background: url(${cover}) center center;
  background-repeat: repeat-x;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`
