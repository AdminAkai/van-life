import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.primary};
`

export const AboutImageContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.gray};
`

export const AboutImage = styled.img`
  max-width: 100%;
  height: 240px;
  margin: 0 auto;
  object-fit: cover;
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 36px 24px;
`

export const AboutMessage = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  max-width: 480px;
`

export const AboutMission = styled.p`
  color: ${({ theme }) => theme.black};
  max-width: 480px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-top: 24px;
`

export const AboutCallToAction = styled.div`
  width: 100%;
  padding: 24px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.background.tan};
  border-radius: 5px;
`
export const AboutCallToActionText = styled.h3`
  color: #161616;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`

export const AboutCallToActionButton = styled.button`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.text.white};
  font-size: 15.946px;
  font-style: normal;
  font-weight: 700;
  line-height: 23.919px;
  margin-top: 24px;
  padding: 12px 22px;
  border-style: none;
`
