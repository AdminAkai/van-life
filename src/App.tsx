import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from 'src/containers/Landing'

import './App.css'
import './assets/fonts/stylesheet.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
