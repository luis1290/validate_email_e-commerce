import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterForm from './forms/RegisterForm'
import ValidateEmail from './ValidateEmail'
import Hola from './Componet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/hola' element={<Hola />} />
        {/* <Route path='/email-validate' element={<ValidateEmail />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
