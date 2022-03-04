import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Space, Button, Menu, Dropdown, Avatar, Divider } from 'antd'
import classes from './Navigation.module.scss'
import logo from '../../../../assets/svg/logo_red_small.svg'
import { createBrowserHistory as history } from 'history'
import {
  RotateRightOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import Search from '../../Search/Search'
import axios from 'axios'
import {
  userLoggedOut,
  userDataStatus,
  userLoggedIn,
} from '../../../../CounterSlice'

const Navigation = (params) => {
  const history = useHistory()
  const refreshToken = localStorage.getItem('refresh')
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()
  const userLoggedInState = useSelector((state) => state.counter.userLoggedIn)

  useEffect(() => {
    if (token !== null) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/getUserProfile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(userLoggedIn())
          dispatch(userDataStatus(''))
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])

  const handleSignOut = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/logout`, {
        refreshToken: refreshToken,
      })
      .then((res) => {
        console.log(res)
        dispatch(userLoggedOut())
        dispatch(userDataStatus(''))
        localStorage.clear()
      })
      .catch((err) => {
        console.log(err)
      })
  }
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
          <Col span={6}>
            <Link to="/">
              <img src={logo} alt="Uplios" />
            </Link>
          </Col>
          <Col span={12} align="center">
            <Search />
          </Col>
          <Col span={6} align="right">
            {userLoggedInState ? (
              <Space>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item>
                        <h4 style={{ letterSpacing: '2px' }}>
                          <strong>Hi,</strong> {userName}
                        </h4>
                      </Menu.Item>
                      <Divider style={{ margin: '0' }} />
                      <Menu.Item>
                        <Link>Quotes and Status</Link>
                      </Menu.Item>
                      <Menu.Item disabled>Messages</Menu.Item>
                      <Menu.Item disabled>Invoices</Menu.Item>
                      <Menu.Item disabled>Orders</Menu.Item>
                      <Menu.Item disabled>Account</Menu.Item>
                      <Menu.Item disabled>Help</Menu.Item>
                      <Divider style={{ margin: '0' }} />
                      <Menu.Item danger>
                        <Button type="link" onClick={() => handleSignOut()}>
                          Sign Out
                        </Button>
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Avatar size={50} icon={<UserOutlined />} />
                  </a>
                </Dropdown>
              </Space>
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
