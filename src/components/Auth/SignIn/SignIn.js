import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link, useHistory } from 'react-router-dom'
import { Col, Row, notification } from 'antd'

import classes from './SignIn.module.scss'
import logo from '../../../assets/svg/logo_red_medium.svg'

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
  const user = useSelector((state) => state.user.user)
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
    debugger
    setLoader(true)
    const user = {
      email: email,
      password: password,
    }
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
            placeholder="Email"
            value={email}
            onChange={setEmail}
          />
          <h3>Password</h3>
          <InputElement
            width="100%"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Password"
          />
          <Link>
            <h4> Forgot Password?</h4>
          </Link>

          <Row>
            <Col span={12}></Col>
            <Col span={12} align="right">
              <div className={classes.actionButton}>
                <ButtonWithRightArrow
                  content="SIGN IN"
                  function={() => handleSignIn()}
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
