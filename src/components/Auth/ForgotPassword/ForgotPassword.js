import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from 'antd'

import classes from './ForgotPassword.module.scss'
import logo from '../../../assets/svg/logo_black_medium.svg'

const ForgotPassword = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.mainContent}>
          <img src={logo} alt="uplio" />
          <h3>Welcome!</h3>
          <h5>Create your sign in credentials.</h5>
          <p>(*Required field)</p>

          <Form layout="vertical">
            <Form.Item label="*Email">
              <Input size="large" placeholder="Email address..." />
            </Form.Item>
            <Form.Item label="*Password">
              <Input size="large" placeholder="Password..." />
            </Form.Item>
            <Form.Item label="*Re-enter Password">
              <Input size="large" placeholder="Re-enter password..." />
            </Form.Item>
          </Form>

          <div className={classes.footerContent}>
            <h3>
              *Passwords must contain a combination of letters, numbers and{' '}
              <br />
              special characters (ex. @). Please use at least (1) capital
              letter.
            </h3>
            <Link className={classes.buttonLogin} to="/">
              <h6>Done</h6>
            </Link>
            <h5>
              You acknowledge that you have read and agree <br /> to our Terms
              of Service and Privacy Policy.
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}
export default ForgotPassword
