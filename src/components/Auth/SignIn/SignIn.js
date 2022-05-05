import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Formik, useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import { Col, Row, notification } from 'antd'

import classes from './SignIn.module.scss'
import logo from '../../../assets/svg/logo_red_medium.svg'
import * as yup from 'yup'
import { ArrowRightOutlined } from '@ant-design/icons'
import { connect, useSelector, useDispatch } from 'react-redux'

import {
  userLoggedIn,
  userDataStatus,
  postUserLogin,
} from '../../../redux/actions/user.action.js'

import Navigation from '../../../constant/public/Navigation/Navigation'
import Footer from '../../../constant/public/Footer/Footer'
import InputElement from '../../../constant/public/Input/InputElement'
import ButtonWithRightArrow from '../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'

const SignIn = (props) => {
  const history = useHistory()

  const Formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid email.').required('Email is Required'),
      password: yup.string().required('Password is required.'),
    }),
    onSubmit: (values) => {
      debugger
    },
  })

  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  const [loader, setLoader] = useState(false)

  const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
    })
  }

  const handleSignIn = (email, password) => {
    setLoader(true)
    debugger
    // dispatch(postUserLogin(user))

    console.log(process.env.REACT_APP_API_URL)
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setLoader(false)
        if (!res.data.error) {
          debugger
          dispatch(userDataStatus(res.data.user))
          dispatch(userLoggedIn())
          // props.userDataStatus(userData)
          history.goBack()
          sessionStorage.setItem('token', res.data.tokens.access.token)
          sessionStorage.setItem('refresh', res.data.tokens.refresh.token)
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
      <Navigation />
      <div className={classes.sideTitle}>
        <h2>SIGN IN</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.mainContent}>
          <h3>Email</h3>
          <InputElement
            width="100%"
            type="text"
            name="email"
            placeholder="Email"
            value={Formik.values.email}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            helperText={
              Formik.errors.email && Formik.touched.email
                ? Formik?.errors.email
                : null
            }
          />
          <h3>Password</h3>
          <InputElement
            width="100%"
            name="password"
            type="password"
            value={Formik.values.password}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            placeholder="Password"
            helperText={
              Formik.errors.password && Formik.touched.password
                ? Formik?.errors.password
                : null
            }
          />
          <Link to="/">
            <h4> Forgot Password?</h4>
          </Link>

          <Row>
            <Col span={12}></Col>
            <Col span={12} align="right">
              <div className={classes.actionButton}>
                <ButtonWithRightArrow
                  type="button"
                  content="SIGN IN"
                  function={() =>
                    handleSignIn(Formik.values.email, Formik.values.password)
                  }
                />
                <h4>
                  Don’t have an account? <Link to="/signup">Sign Up</Link>
                </h4>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLoggedIn: () => dispatch(userLoggedIn()),

    userDataStatus: () => dispatch(userDataStatus()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
