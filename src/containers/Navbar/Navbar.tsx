import { FC } from 'react'

import VanLifeLogo from 'src/assets/images/logog.png'

import NavbarOption from 'src/components/NavbarOption'

import { NavbarContainer, Logo, NavbarOptions } from './styledComponents'
import { allNavbarOptions } from './lib'

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
