import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from 'src/containers/Landing'
import About from 'src/containers/About'
import Navbar from 'src/containers/Navbar'

import 'src/assets/fonts/Inter/static/stylesheet.css'

import './App.css'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
