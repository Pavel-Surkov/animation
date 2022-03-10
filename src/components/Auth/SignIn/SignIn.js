import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link, useHistory } from 'react-router-dom'
import { Form, Input, Spin, notification } from 'antd'

import classes from './SignIn.module.scss'
import logo from '../../../assets/svg/logo_red_medium.svg'

import { ArrowRightOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { userLoggedIn, userDataStatus } from '../../../CounterSlice'

const SignIn = () => {
  const history = useHistory()
  const user = useSelector((state) => state.counter.user)
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loader, setLoader] = useState(false)

  const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
    })
  }

  const handleSignIn = () => {
    setLoader(true)
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setLoader(false)
        if (!res.data.error) {
          dispatch(userLoggedIn())
          dispatch(userDataStatus(res.data.user))
          history.goBack()
          localStorage.setItem('token', res.data.tokens.access.token)
          localStorage.setItem('refresh', res.data.tokens.refresh.token)
        } else {
          openNotificationWithIcon('warning', 'Oops', res.data.message)
        }
      })
      .catch((err) => {
        console.log(err)
        setLoader(false)

        openNotificationWithIcon('error', 'Something Went Wrong!', '')
      })
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.mainContent}>
          <Link to="/">
            <img src={logo} alt="uplio" />
          </Link>
          <h3>Welcome back!</h3>
          <h5>Sign in to access your account.</h5>
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
                onPressEnter={() => handleSignIn()}
                placeholder="Password..."
              />
            </Form.Item>
          </Form>

          <div className={classes.footerContent}>
            {/* <h3>
              *Passwords must contain a combination of letters, numbers and{' '}
              <br />
              special characters (ex. @). Please use at least (1) capital
              letter.
            </h3> */}
            <button
              onClick={() => handleSignIn()}
              className={classes.buttonLogin}
              to="/"
            >
              {loader ? (
                <Spin style={{ marginBottom: '24px' }} />
              ) : (
                <h6>
                  Sign in <ArrowRightOutlined />
                </h6>
              )}
            </button>
            <h5>
              You acknowledge that you have read and agree <br /> to our
              <Link to="/terms-conditions"> Terms of Service</Link> and{' '}
              <Link to="/privacy-policy">Privacy Policy</Link>.
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}
export default SignIn
