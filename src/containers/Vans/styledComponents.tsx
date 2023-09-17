import styled from 'styled-components'

export const VansContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.background.primary};

  @media screen and (max-width: 700px) {
    width: 100%;
    min-height: 100%;
  }
`

export const VansHeader = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: 2rem;

  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
    width: 100%;
    min-height: 100%;
  }
`
