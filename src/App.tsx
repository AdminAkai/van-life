import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Landing from 'src/containers/Landing'
import About from 'src/containers/About'
import Main from 'src/containers/Main'

import 'src/assets/fonts/Inter/static/stylesheet.css'

import theme from 'src/theme'

import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/vans' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
