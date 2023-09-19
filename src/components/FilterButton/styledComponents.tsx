import styled from 'styled-components'

import { grabColor } from './lib'

export const FilterButtonContainer = styled.button<{ type: string }>`
  border-radius: 4px;
  color: ${({ theme }) => theme.text.tan};
  background-color: ${({ theme, type }) => theme.button[grabColor(type)]};
  border: none;
  padding: 0.25rem 1rem;
`
