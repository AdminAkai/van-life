import { FC } from 'react'
import { Link } from 'react-router-dom'

import { NavbarContainer } from './styledComponents'

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </NavbarContainer>
  )
}

export default Navbar
