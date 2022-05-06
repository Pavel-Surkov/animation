import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Form, Input, Spin, Row, Col, InputNumber } from 'antd'

import classes from './BuyerDetails.module.scss'
import logo from '../../../../assets/svg/logo_black_medium.svg'

import { useSelector, useDispatch } from 'react-redux'
import { singleQuoteData } from '../../../../redux/actions/singleQuote.action'
import { connect } from 'react-redux'
import axios from 'axios'
import InputElement from '../../../../constant/public/Input/InputElement'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'

const BuyerDetails = (props) => {
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
          <h3>Name*</h3>
          <InputElement
            type="text"
            name="name"
            placeholder="Name*"
            value={props.Formik.values.name}
            onChange={props.Formik.handleChange}
            onBlur={props.Formik.handleBlur}
            helperText={
              props.Formik.errors.name && props.Formik.touched.name
                ? props.Formik?.errors.name
                : null
            }
            width={'100%'}
          />
          <h3>Email*</h3>
          <InputElement
            type="text"
            name="email"
            placeholder="Email*"
            value={props.Formik.values.email}
            onChange={props.Formik.handleChange}
            onBlur={props.Formik.handleBlur}
            helperText={
              props.Formik.errors.email && props.Formik.touched.email
                ? props.Formik?.errors.email
                : null
            }
            width={'100%'}
          />
          <h3>Phone Number (Optional)</h3>
          <InputElement
            type="number"
            name="phone"
            placeholder="+1 562-985-4111"
            value={props.Formik.values.phone}
            onChange={props.Formik.handleChange}
            onBlur={props.Formik.handleBlur}
            helperText={
              props.Formik.errors.phone && props.Formik.touched.phone
                ? props.Formik?.errors.phone
                : null
            }
            width={'100%'}
          />
          <h3>Password*</h3>
          <InputElement
            type="password"
            name="name"
            value={props.Formik.values.password}
            placeholder="Password"
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

export default connect(mapStateToProps)(BuyerDetails)

// {isQuoteCompleted ? (
//   <>
//     <h3>
//       <span>Sign Up</span> to submit a quote request!
//     </h3>
//     {/* <h5>Create your sign in credentials.</h5>
// <p>(*Required field)</p> */}
//     <Form layout="vertical">
//       <Form.Item label="*Name">
//         <Input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           size="large"
//           placeholder="Full Name..."
//         />
//       </Form.Item>

//       <Form.Item label="*Email">
//         <Input
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           size="large"
//           placeholder="Email address..."
//         />
//       </Form.Item>
//       <Form.Item label="Phone">
//         <InputNumber
//           onChange={(e) => setPhone(e)}
//           value={phone}
//           style={{ width: '100%' }}
//           size="large"
//           placeholder="Phone..."
//         />
//       </Form.Item>
//       <Form.Item
//         label="*Password"
//         validateStatus={errorFeedback}
//         hasFeedback={errorStatus}
//         help={errorMessage}
//       >
//         <Input.Password
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           size="large"
//           placeholder="Password..."
//         />
//       </Form.Item>
//       <Form.Item
//         validateStatus={errorFeedback}
//         hasFeedback={errorStatus}
//         help={errorMessage}
//         label="*Re-enter Password"
//       >
//         <Input.Password
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           size="large"
//           placeholder="Re-enter password..."
//         />
//       </Form.Item>
//       <div className={classes.footerContent}>
//         <h3>
//           {/* *Passwords must contain a combination of letters, numbers and{' '} */}
//           <br />
//           {/* special characters (ex. @). Please use at least (1) capital
//       letter. */}
//         </h3>
//         <button
//           onClick={() => handleSignUp()}
//           className={classes.buttonLogin}
//         >
//           {loader ? (
//             <Spin style={{ marginBottom: '24px' }} />
//           ) : (
//             <h6>Done</h6>
//           )}
//         </button>
//         <h5>
//           You acknowledge that you have read and agree <br /> to our{' '}
//           <Link to="/terms-conditions">Terms of Service</Link> and{' '}
//           <Link to="/privacy-policy">Privacy Policy</Link>.
//         </h5>
//       </div>
//     </Form>
//   </>
// ) : (
//   <>
//     <h3>
//       <span>Thank you!</span>
//     </h3>
//     <h5>
//       Thank you for being a part of the Uplio family. We will be in
//       touch with you very soon. Keep an eye on your inbox for our
//       “next steps” email.
//     </h5>
//     {/* <p>(*Required field)</p> */}
//     <Row gutter={12}>
//       <Col span={12} xs={24}>
//         <button
//           onClick={() => {
//             history.push({ pathname: '/' })
//           }}
//           className={classes.buttonLoginBack}
//         >
//           <h6>Back to Home page</h6>
//         </button>
//       </Col>
//       <Col span={12} xs={24}>
//         <button
//           onClick={() => {
//             history.push({ pathname: '/quote' })
//           }}
//           className={classes.buttonLogin}
//         >
//           <h6>Request a new quote</h6>
//         </button>
//       </Col>
//     </Row>
//   </>
// )}
