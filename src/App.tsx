import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Landing from 'src/containers/Landing'
import About from 'src/containers/About'
import Main from 'src/containers/Main'
import Vans from 'src/containers/Vans'

import 'src/assets/fonts/Inter/static/stylesheet.css'

import * as server from 'src/server'

import theme from 'src/theme'

import './App.css'

server

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/vans' element={<Vans />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
