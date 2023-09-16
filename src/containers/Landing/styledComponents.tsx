import styled from 'styled-components'

import MountainBackdrop from 'src/assets/images/backdrops/mountain-backdrop.png'

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: ${`url(${MountainBackdrop})`};
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0.46) 100%),
    url(${MountainBackdrop}),
    lightgray 0px -65.191px / 100% 178.109% no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export const LandingPageCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
`

export const LandingTitle = styled.h1`
  color: ${({ theme }) => theme.text.white};
  font-size: 2.25rem;
  font-style: normal;
  margin-bottom: 1.5rem;
  text-align: left;
  line-height: 2.625rem;
  font-weight: 800;
`

export const LandingSubtitle = styled.h3`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 3.25rem;
  text-align: left;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;
`

export const LandingButton = styled.button`
  background-color: ${({ theme }) => theme.button.primary};
  border-radius: 5px;
  width: 100%;
  height: 3rem;
  border-style: none;
  color: ${({ theme }) => theme.text.white};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem;
`
