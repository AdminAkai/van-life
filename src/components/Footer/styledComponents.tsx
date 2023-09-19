import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1.625rem;
  padding-bottom: 1.625rem;
  background-color: ${({ theme }) => theme.background.gray};
  color: ${({ theme }) => theme.text.footer};
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4375rem;
`
