import { Routes, Route } from 'react-router-dom'

import './App.scss'
import Home from "./pages/Home"
import Login from './pages/Login'
const App = () => {
  return (
    <Routes>
      <Route path="/:name" element={<Home />}></Route>
      <Route path='/' element={<Login />}></Route>
    </Routes>
  )
}

export default App
