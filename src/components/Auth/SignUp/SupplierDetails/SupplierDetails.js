import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Form, Input, Spin, Row, Col, InputNumber } from 'antd'

import classes from './SupplierDetails.module.scss'
import logo from '../../../../assets/svg/logo_black_medium.svg'

import { useSelector, useDispatch } from 'react-redux'
import { singleQuoteData } from '../../../../redux/actions/singleQuote.action'
import { connect } from 'react-redux'
import axios from 'axios'
import InputElement from '../../../../constant/public/Input/InputElement'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'

const SupplierDetails = (props) => {
  const history = useHistory()

  const quote = useSelector((state) => state.singleQuote.quote)
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
  const [disable, setDisable] = useState(true)
  useState(() => {
    if (password !== '' && confirmPassword !== '') {
      setDisable(false)
    }
  }, [password, confirmPassword])

  const handleSignUp = () => {
    setLoader(true)
    if (password === confirmPassword) {
      setErrorMessage('')
      setErrorStatus(false)
      setErrorFeedback('success')

      if (!quote.supplierIdExist) {
        axios
          .post(`${process.env.REACT_APP_API_URL}/quotes/save_quote`, {
            projectName: quote.projectName,
            supplier: '',
            productCategory: quote.productCategory,
            color: 'null',
            name: name,
            phone: String(phone),
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
            dispatch(singleQuoteData(null))
          })
          .catch((err) => {
            console.log(err)
            setLoader(false)
          })
      } else {
        axios
          .post(
            `${process.env.REACT_APP_API_URL}/quotes/save_quote_single_supplier`,
            {
              projectName: quote.projectName,
              supplier: quote.supplierId,
              productCategory: quote.productCategory,
              color: 'null',
              name: name,
              phone: String(phone),
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
            }
          )
          .then((res) => {
            setLoader(false)
            setIsQuoteCompleted(false)
            dispatch(singleQuoteData(null))
          })
          .catch((err) => {
            console.log(err)
            setLoader(false)
          })
      }
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
      <div className={classes.sideTitle}>
        <h2>SIGN IN</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.mainContent}>
          <h3>Business Name*</h3>
          <InputElement
            type="text"
            placeholder="Business Name"
            value={name}
            onChange={setName}
            width={'100%'}
          />
          <h3>Email*</h3>
          <InputElement
            type="text"
            placeholder="Email*"
            value={email}
            onChange={setEmail}
            width={'100%'}
          />
          <h3>Phone Number (Optional)</h3>
          <InputElement
            type="number"
            placeholder="+1 562-985-4111"
            value={phone}
            onChange={setPhone}
            width={'100%'}
          />
          <h3>Password*</h3>
          <InputElement
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            width={'100%'}
          />
          <h3>Confirm the Password*</h3>
          <InputElement
            type="password"
            placeholder="Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            width={'100%'}
          />
        </div>
        <Row>
          <Col span={12}></Col>
          <Col span={12} align="right">
            <div className={classes.actionButton}>
              <ButtonWithRightArrow
                disabled={!disable}
                function={() => props.setCurrentView('greetings')}
                content="SIGN UP"
                width={'325px'}
              />
              <h4>
                By submitting this form, you acknowledge that you have read and
                agree to our{' '}
                <Link to="/terms-conditions">Terms of Service </Link>
                and <Link to="/privacy-policy">Privacy Policy</Link>.
              </h4>
              <h4>
                Already have an account? <Link to="/login">Sign In</Link>
              </h4>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    singleQuote: state,
  }
}

export default connect(mapStateToProps)(SupplierDetails)
