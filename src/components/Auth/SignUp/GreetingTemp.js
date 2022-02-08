import React from 'react'
import { Link } from 'react-router-dom'
import classes from './SignUp.module.scss'
import logo from '../../../assets/svg/logo_black_medium.svg'
import Greetings from './Greetings/Greetings'

const GreetingTemp = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <Link to="/">
            <img src={logo} alt="uplio" />{' '}
          </Link>
          <div className={classes.textOverlay}>
            <h1>BUYER</h1>
          </div>
        </div>
        <Greetings />
      </div>
    </>
  )
}
export default GreetingTemp
