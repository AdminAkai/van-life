import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 26px;
  padding-bottom: 26px;
  background-color: ${({ theme }) => theme.background.gray};
  color: ${({ theme }) => theme.text.footer};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.923px; /* 163.733% */
`
