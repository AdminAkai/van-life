import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CustomLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  margin-left: 16px;
  color: ${({ theme }) => theme.text.gray};
`
