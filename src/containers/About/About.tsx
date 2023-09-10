import { FC } from 'react'

import VanBackdrop from 'src/assets/images/backdrops/van-backdrop.png'

import {
  AboutCallToAction,
  AboutCallToActionButton,
  AboutCallToActionText,
  AboutContainer,
  AboutImage,
  AboutImageContainer,
  AboutMessage,
  AboutMission,
  AboutText,
} from './styledComponents'

const About: FC = () => (
  <AboutContainer>
    <AboutImageContainer>
      <AboutImage src={VanBackdrop} alt='Van backdrop at Night' />
    </AboutImageContainer>
    <AboutText>
      <AboutMessage>
        Don’t squeeze in a sedan when you could relax in a van.
      </AboutMessage>
      <AboutMission>
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉)
        <br />
        <br />
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </AboutMission>
      <AboutCallToAction>
        <AboutCallToActionText>
          Your destination is waiting. <br />
          Your van is ready.
        </AboutCallToActionText>
        <AboutCallToActionButton>Explore Our Vans</AboutCallToActionButton>
      </AboutCallToAction>
    </AboutText>
  </AboutContainer>
)

export default About
