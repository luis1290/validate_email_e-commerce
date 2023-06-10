import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import RegisterForm from './forms/RegisterForm'
import ValidateEmail from './ValidateEmail'
import Hola from './Componet'


function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes>
        {/* <Route path='/' element={<Hola />} /> */}
        <Route path='/' element={<ValidateEmail />} />
      </Routes>
    </HashRouter>
  )
}

export default App
