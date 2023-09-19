import styled from 'styled-components'

import { grabColor } from './lib'

export const FilterButtonContainer = styled.button<{
  type: string
  filter?: boolean
}>`
  border-radius: 4px;
  color: ${({ theme, filter }) => (filter ? theme.text.gray : theme.text.tan)};
  background-color: ${({ theme, type, filter }) =>
    filter ? theme.button.tan : theme.button[grabColor(type)]};
  border: none;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  margin-right: 2rem;

  &:hover {
    background-color: ${({ theme, type, filter }) =>
      filter ? theme.button[grabColor(type)] : 'none'};
    color: ${({ theme, filter }) => (filter ? theme.text.tan : 'none')};
  }

  @media screen and (max-width: 700px) {
    padding: 0.25rem rem;
  }
`
