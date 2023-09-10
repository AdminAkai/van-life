import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 36px 26px;
`

export const Logo = styled.img`
  height: 26px;
  cursor: pointer;
`

export const NavbarOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
