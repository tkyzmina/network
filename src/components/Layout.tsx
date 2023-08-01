import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </header>
      <Outlet />
      <footer>This in footer 2023</footer>
    </>
  )
}
