import React from 'react'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Chat from './pages/Chat'
import Register from './pages/Register'
import Login from './pages/Login'
import Notfoundpage from './pages/Notfoundpage'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
