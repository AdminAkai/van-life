import { FC } from 'react'

import { CustomLink } from './styledComponents'

interface INavbarOptionProps {
  label: string
  route: string
}

const NavbarOption: FC<INavbarOptionProps> = ({ label, route }) => (
  <CustomLink to={route}>{label}</CustomLink>
)

export default NavbarOption
