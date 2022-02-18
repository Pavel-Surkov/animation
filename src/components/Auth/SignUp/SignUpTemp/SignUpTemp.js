import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Spin } from 'antd'

import classes from './SignUpTemp.module.scss'
import logo from '../../../../assets/svg/logo_black_medium.svg'

import { useSelector, useDispatch } from 'react-redux'
import { userLoggedIn, userDataStatus } from '../../../../CounterSlice'

import axios from 'axios'

const SignUpTemp = () => {
  const history = useHistory()
  const user = useSelector((state) => state.counter.user)
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')
  const [errorStatus, setErrorStatus] = useState(false)
  const [errorFeedback, setErrorFeedback] = useState('success')

  const [loader, setLoader] = useState(false)

  const handleSignUp = () => {
    setLoader(true)
    if (password === confirmPassword) {
      setErrorMessage('')
      setErrorStatus(false)
      setErrorFeedback('success')

      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/register`, {
          email: email,
          password: password,
        })
        .then((res) => {
          setLoader(false)
          dispatch(userLoggedIn())
          dispatch(userDataStatus(res.data.user))
          history.push('/user-type')
          localStorage.setItem('token', res.data.tokens.access.token)
        })
        .catch((err) => {
          console.log(err)
          setLoader(false)
        })
    } else {
      setErrorMessage("Password Don't match")
      setErrorStatus(true)
      setErrorFeedback('error')
      setLoader(false)
    }
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                size="large"
                placeholder="Email address..."
              />
            </Form.Item>
            <Form.Item
              label="*Password"
              validateStatus={errorFeedback}
              hasFeedback={errorStatus}
              help={errorMessage}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                size="large"
                placeholder="Password..."
              />
            </Form.Item>
            <Form.Item
              validateStatus={errorFeedback}
              hasFeedback={errorStatus}
              help={errorMessage}
              label="*Re-enter Password"
            >
              <Input.Password
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                size="large"
                placeholder="Re-enter password..."
              />
            </Form.Item>
            <div className={classes.footerContent}>
              <h3>
                *Passwords must contain a combination of letters, numbers and{' '}
                <br />
                special characters (ex. @). Please use at least (1) capital
                letter.
              </h3>
              <button
                onClick={() => handleSignUp()}
                className={classes.buttonLogin}
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
          </Form>
        </div>
      </div>
    </>
  )
}
export default SignUpTemp
