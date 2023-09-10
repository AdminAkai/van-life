import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Landing from 'src/containers/Landing'
import About from 'src/containers/About'
import Navbar from 'src/containers/Navbar'
import Footer from 'src/containers/Footer'

import 'src/assets/fonts/Inter/static/stylesheet.css'

import theme from 'src/theme'

import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
