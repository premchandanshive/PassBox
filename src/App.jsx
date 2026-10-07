import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Manneger from './components/Manneger.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
      <div className='min-h-[85vh]'>
      <Manneger/>
      </div>

      <Footer/>
    </>
  )
}

export default App
