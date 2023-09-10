import { FC } from 'react'

import VanLifeLogo from 'src/assets/images/van-life-logo.png'

import NavbarOption from 'src/components/NavbarOption'

import { allNavbarOptions } from './lib'
import { NavbarContainer, Logo, NavbarOptions } from './styledComponents'

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <Logo src={VanLifeLogo} />
      <NavbarOptions>
        {allNavbarOptions.map((option, i) => (
          <NavbarOption {...option} key={`${i}-${option.label}`} />
        ))}
      </NavbarOptions>
    </NavbarContainer>
  )
}

export default Navbar
