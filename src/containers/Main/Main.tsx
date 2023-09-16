import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from 'src/components/Navbar'

import { MainContainer } from './styledComponents'
import Footer from 'src/components/Footer'

const Main: FC = () => {
  return (
    <MainContainer>
      <Navbar />
      <Outlet />
      <Footer />
    </MainContainer>
  )
}

export default Main
