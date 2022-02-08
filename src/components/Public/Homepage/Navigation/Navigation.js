import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import { Row, Col, Space, Button } from 'antd'
import classes from './Navigation.module.scss'
import logo from '../../../../assets/svg/logo_black_small.svg'
import { createBrowserHistory as history } from 'history'
import { RotateRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function Navigation(params) {
  const ref = useRef()
  let [check, setCheck] = useState(true)
  const sticky = useStickyHeader(50)

  const { clientHeight } = ref

  const checkChange = (value) => {
    setCheck(value)
  }
  const toNewPage = () => {
    debugger
    history.push('/signup')
  }
  return (
    <div className={classes.header}>
      <header ref={ref} className={sticky && check ? classes.sticky : null}>
        <Row align="middle" justify="space-around">
          <Col span={12}>
            <img src={logo} alt="Uplios" />
          </Col>
          <Col span={12} align="right">
            <Space>
              <Button className={classes.signIn} type="link">
                Sign In
              </Button>
              <Link to="/signup" className={classes.signUp} type="secondary">
                Sign Up
              </Link>
            </Space>
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
