import React from 'react'
import { Link } from 'react-router-dom'
import classes from './SignUp.module.scss'
import logo from '../../../assets/svg/logo_black_medium.svg'
import AccountType from './AccountType/AccountType'

const SignUp = () => {
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
        <AccountType />
      </div>
    </>
  )
}
export default SignUp
