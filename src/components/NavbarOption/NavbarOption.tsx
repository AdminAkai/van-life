import { FC } from 'react'

import { CustomLink } from './styledComponents'

const NavbarOption: FC = ({ label, route }) => (
  <CustomLink to={route}>{label}</CustomLink>
)

export default NavbarOption
