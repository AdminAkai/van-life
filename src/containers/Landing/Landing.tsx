import { FC } from 'react'

import {
  LandingButton,
  LandingPageCenter,
  LandingPageContainer,
  LandingSubtitle,
  LandingTitle,
} from './styledComponents'

const Landing: FC = () => {
  return (
    <LandingPageContainer>
      <LandingPageCenter>
        <LandingTitle>
          You got the travel plans, we got the travel vans.
        </LandingTitle>
        <LandingSubtitle>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </LandingSubtitle>
        <LandingButton>Find your van</LandingButton>
      </LandingPageCenter>
    </LandingPageContainer>
  )
}

export default Landing
