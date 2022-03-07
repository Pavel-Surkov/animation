import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Form, Input, Spin, Row, Col, InputNumber } from 'antd'

import classes from './SignUpTemp.module.scss'
import logo from '../../../../assets/svg/logo_black_medium.svg'

import { useSelector, useDispatch } from 'react-redux'
import { userLoggedIn, userDataStatus } from '../../../../CounterSlice'
import { quoteData } from '../../../../CounterSlice'
import axios from 'axios'

const SignUpTemp = () => {
  const history = useHistory()
  const quote = useSelector((state) => state.counter.quote)
  const dispatch = useDispatch()

  const [isQuoteCompleted, setIsQuoteCompleted] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [errorStatus, setErrorStatus] = useState(false)
  const [errorFeedback, setErrorFeedback] = useState('success')

  const [loader, setLoader] = useState(false)

  useEffect(() => {
    if (quote === null) {
      history.push({ pathname: '/quote' })
    }
    console.log(quote)
  }, [])

  const handleSignUp = () => {
    setLoader(true)
    if (password === confirmPassword) {
      setErrorMessage('')
      setErrorStatus(false)
      setErrorFeedback('success')

      console.log(quote)
      axios
        .post(`${process.env.REACT_APP_API_URL}/quotes/save_quote`, {
          projectName: quote.projectName,
          productCategory: quote.productCategory,
          color: 'null',
          name: name,
          phone: phone,
          description: quote.description,
          projectStartDate: quote.projectStartDate,
          projectLaunchDate: quote.projectLaunchDate,
          quantity: quote.quantity,
          budget: `$${quote.budget}`,
          email: email,
          password: password,
          inspirationImages: quote.inspirationImages,
          inspirationDocument: quote.inspirationDocument,
          referenceImages: quote.referenceImages,
        })
        .then((res) => {
          setLoader(false)
          setIsQuoteCompleted(false)
          dispatch(quoteData(null))
        })
        .catch((err) => {
          console.log(err)
          setLoader(false)
        })

      // axios
      //   .post(`${process.env.REACT_APP_API_URL}/auth/register`, {
      //     email: email,
      //     password: password,
      //   })
      //   .then((res) => {
      //     setLoader(false)
      //     dispatch(userLoggedIn())
      //     dispatch(userDataStatus(res.data.user))
      //     history.push('/user-type')
      //     localStorage.setItem('token', res.data.tokens.access.token)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //     setLoader(false)
      //   })
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
          <Link to="/">
            <img src={logo} alt="uplio" />
          </Link>

          {isQuoteCompleted ? (
            <>
              <h3>
                <span>Sign Up</span> to submit a quote request!
              </h3>
              {/* <h5>Create your sign in credentials.</h5>
          <p>(*Required field)</p> */}
              <Form layout="vertical">
                <Form.Item label="*Name">
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    size="large"
                    placeholder="Full Name..."
                  />
                </Form.Item>

                <Form.Item label="*Email">
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    size="large"
                    placeholder="Email address..."
                  />
                </Form.Item>
                <Form.Item label="Phone">
                  <InputNumber
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    style={{ width: '100%' }}
                    size="large"
                    placeholder="Phone..."
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
                    {/* *Passwords must contain a combination of letters, numbers and{' '} */}
                    <br />
                    {/* special characters (ex. @). Please use at least (1) capital
                letter. */}
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
                    You acknowledge that you have read and agree <br /> to our{' '}
                    <Link to="/terms-conditions">Terms of Service</Link> and{' '}
                    <Link to="/privacy-policy">Privacy Policy</Link>.
                  </h5>
                </div>
              </Form>
            </>
          ) : (
            <>
              <h3>
                <span>Thank you!</span>
              </h3>
              <h5>
                Thank you for being a part of the Uplio family. We will be in
                touch with you very soon. Keep an eye on your inbox for our
                “next steps” email.
              </h5>
              {/* <p>(*Required field)</p> */}
              <Row gutter={12}>
                <Col span={12} xs={24}>
                  <button
                    onClick={() => {
                      history.push({ pathname: '/' })
                    }}
                    className={classes.buttonLoginBack}
                  >
                    <h6>Back to Home page</h6>
                  </button>
                </Col>
                <Col span={12} xs={24}>
                  <button
                    onClick={() => {
                      history.push({ pathname: '/quote' })
                    }}
                    className={classes.buttonLogin}
                  >
                    <h6>Request a new quote</h6>
                  </button>
                </Col>
              </Row>
            </>
          )}
        </div>
      </div>
    </>
  )
}
export default SignUpTemp
