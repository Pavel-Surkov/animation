import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import { Row, Col, Space, Button } from 'antd'
import classes from './Navigation.module.scss'
import logo from '../../../../assets/svg/logo_black_small.svg'
import { createBrowserHistory as history } from 'history'
import { RotateRightOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navigation = (params) => {
  const history = useHistory()

  const userLoggedIn = useSelector((state) => state.counter.userLoggedIn)
  const userName = useSelector((state) => state.counter.user.name)
  const handleSignIn = () => {
    history.push({ pathname: '/login' })
  }
  const ref = useRef()
  let [check, setCheck] = useState(true)
  const sticky = useStickyHeader(50)

  const { clientHeight } = ref

  return (
    <div className={classes.header}>
      <header ref={ref} className={sticky && check ? classes.sticky : null}>
        <Row align="middle" justify="space-around">
          <Col span={12}>
            <Link to="/">
              <img src={logo} alt="Uplios" />
            </Link>
          </Col>
          <Col span={12} align="right">
            {userLoggedIn ? (
              <h4 style={{ letterSpacing: '2px' }}>
                <strong>Hi,</strong> {userName}
              </h4>
            ) : (
              <Space>
                <Button
                  className={classes.signIn}
                  type="link"
                  onClick={() => handleSignIn()}
                >
                  Sign In
                </Button>
                <Link to="/signup" className={classes.signUp} type="secondary">
                  Sign Up
                </Link>
              </Space>
            )}
          </Col>
        </Row>
      </header>
    </div>
  )
}

const Switch = ({ children, defaultValue, onCheck }) => {
  const [check, setCheck] = useState(defaultValue)

  useEffect(() => {
    onCheck(check)
  })

  return (
    <div className={classes.switch}>
      <label>
        <input
          type="checkbox"
          onClick={() => setCheck(!check)}
          checked={check}
        />{' '}
        - {children}
      </label>
    </div>
  )
}

function useStickyHeader(offset = 0) {
  const [stick, setStick] = useState(false)

  const handleScroll = () => {
    setStick(window.scrollY > offset)
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return stick
}

export default Navigation
