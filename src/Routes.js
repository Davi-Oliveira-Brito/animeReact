import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Menu from './App'
import Front from './pages/Front'

export default function Paths() {
    return (
      <BrowserRouter>
          <Routes>
          <Route exact path="/" element={<Menu/>}></Route>
          <Route exact path="/Front" element={<Front/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }