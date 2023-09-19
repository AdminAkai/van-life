import styled from 'styled-components'

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const ClearFilterButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  user-select: none;
  color: ${({ theme }) => theme.text.gray};
  border-bottom: 1px solid ${({ theme }) => theme.text.gray};

  @media screen and (max-width: 700px) {
    font-size: 0.75rem;
  }
`
