import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfoundpage() {
  return (
    <>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Go to Homepage</Link>
    </>
  )
}
