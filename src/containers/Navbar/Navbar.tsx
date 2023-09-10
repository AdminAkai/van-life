import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import VanLifeLogo from 'src/assets/images/van-life-logo.png'

import NavbarOption from 'src/components/NavbarOption'

import { allNavbarOptions } from './lib'
import { NavbarContainer, Logo, NavbarOptions } from './styledComponents'

const Navbar: FC = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }
  return (
    <NavbarContainer>
      <Logo src={VanLifeLogo} onClick={handleNavigate} />
      <NavbarOptions>
        {allNavbarOptions.map((option, i) => (
          <NavbarOption {...option} key={`${i}-${option.label}`} />
        ))}
      </NavbarOptions>
    </NavbarContainer>
  )
}

export default Navbar
