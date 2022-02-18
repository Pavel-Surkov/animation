import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link, useHistory } from 'react-router-dom'
import { Form, Input, Spin } from 'antd'

import classes from './SignIn.module.scss'
import logo from '../../../assets/svg/logo_black_medium.svg'

import { useSelector, useDispatch } from 'react-redux'
import { userLoggedIn, userDataStatus } from '../../../CounterSlice'

const SignIn = () => {
  const history = useHistory()
  const user = useSelector((state) => state.counter.user)
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loader, setLoader] = useState(false)

  const handleSignIn = () => {
    setLoader(true)
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setLoader(false)
        dispatch(userLoggedIn())
        dispatch(userDataStatus(res.data.user))
        history.push('/')
        localStorage.setItem('token', res.data.tokens.access.token)
      })
      .catch((err) => {
        console.log(err)
        setLoader(false)
      })
  }

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
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="large"
                placeholder="Email address..."
              />
            </Form.Item>
            <Form.Item label="*Password">
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="large"
                placeholder="Password..."
              />
            </Form.Item>
          </Form>

          <div className={classes.footerContent}>
            <h3>
              *Passwords must contain a combination of letters, numbers and{' '}
              <br />
              special characters (ex. @). Please use at least (1) capital
              letter.
            </h3>
            <button
              onClick={() => handleSignIn()}
              className={classes.buttonLogin}
              to="/"
            >
              {loader ? (
                <Spin style={{ marginBottom: '24px' }} />
              ) : (
                <h6>Done</h6>
              )}
            </button>
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
export default SignIn
