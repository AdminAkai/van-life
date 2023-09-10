import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from 'src/containers/Landing'
import About from 'src/containers/About'

import './App.css'
import './assets/fonts/stylesheet.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
