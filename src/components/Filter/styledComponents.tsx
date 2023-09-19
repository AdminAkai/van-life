import styled from 'styled-components'

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const ClearFilterButton = styled.p`
  color: ${({ theme }) => theme.text.gray};
  border-bottom: 1px solid ${({ theme }) => theme.text.gray};
`
