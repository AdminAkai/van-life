import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 2rem 1.5rem;

  @media screen and (max-width: 350px) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  height: 1.625rem;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    margin-bottom: 1rem;
  }
`

export const NavbarOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
