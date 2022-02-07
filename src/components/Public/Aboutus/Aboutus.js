import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Aboutus.module.scss'
const Aboutus = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>About Us Section</h1>

      <Link to="/">Back to Home Page</Link>
    </div>
  )
}

export default Aboutus
