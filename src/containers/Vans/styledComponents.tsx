import styled from 'styled-components'

export const VansContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.primary};

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`

export const AboutImageContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.gray};
`

export const AboutImage = styled.img`
  max-width: 100%;
  height: 15rem;
  margin: 0 auto;
  object-fit: cover;
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2.25rem 1.5rem;
`

export const AboutMessage = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.375rem;
  max-width: 30rem;
`

export const AboutMission = styled.p`
  color: ${({ theme }) => theme.black};
  max-width: 30rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  margin-top: 1.5rem;
`

export const AboutCallToAction = styled.div`
  width: 100%;
  padding: 1.5rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.background.tan};
  border-radius: 5px;
`
export const AboutCallToActionText = styled.h3`
  color: #161616;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.875rem;
`

export const AboutCallToActionButton = styled.button`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.text.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  padding: 0.75rem 1.375rem;
  border-style: none;
`
