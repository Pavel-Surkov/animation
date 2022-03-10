import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Row,
  Col,
  Space,
  Button,
  Menu,
  Dropdown,
  Avatar,
  Divider,
  Drawer,
} from 'antd'
import classes from './Navigation.module.scss'
import logo from '../../../../assets/svg/logo_red_small.svg'
import logo_mobile from '../../../../assets/svg/logo_mobile.svg'
import { createBrowserHistory as history } from 'history'
import {
  RotateRightOutlined,
  UserOutlined,
  MenuOutlined,
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
  const [visible, setVisible] = useState(false)
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()
  const userLoggedInState = useSelector((state) => state.counter.userLoggedIn)

  // Auto SignOut session clear
  useEffect(() => {
    if (!userLoggedInState) {
      localStorage.clear()
    }
  }, [])

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
          dispatch(userDataStatus(res.data.data))
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
        dispatch(userLoggedOut())
        dispatch(userDataStatus(''))
        localStorage.clear()
        history.push('/')
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
          <Col md={0} xl={0} xs={3}>
            <Link to="/">
              <img className={classes.logo} src={logo_mobile} alt="Uplios" />
            </Link>
          </Col>
          <Col md={6} xl={6} xs={0}>
            <Link to="/">
              <img src={logo} alt="Uplios" />
            </Link>
          </Col>
          <Col md={6} xl={6} xs={18} align="center">
            <Search />
          </Col>
          <Col md={6} xl={6} xs={0} align="right">
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
                        <Link to="/dashboard/buyer/inquiries">
                          Quotes and Status
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/dashboard/buyer/profile">Account</Link>
                      </Menu.Item>
                      {/* <Menu.Item disabled>Invoices</Menu.Item>
                      <Menu.Item disabled>Orders</Menu.Item>
                      <Menu.Item disabled>Account</Menu.Item>
                      <Menu.Item disabled>Help</Menu.Item> */}
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
          <Col xs={3} md={0} xl={0} align="right">
            <Button
              className={classes.hamburgerMenu}
              onClick={() => setVisible(true)}
            >
              <MenuOutlined style={{ color: '#e14a48' }} />
            </Button>
          </Col>
        </Row>
      </header>
      <Drawer
        title={false}
        placement="right"
        closable={true}
        onClose={() => setVisible(false)}
        visible={visible}
        key="right"
      >
        {userLoggedInState ? (
          <Space direction="vertical">
            <Divider style={{ margin: '0' }} />
            <h4 style={{ letterSpacing: '2px' }}>
              <strong>Hi,</strong> {userName}
            </h4>
            <Divider style={{ margin: '0' }} />
            <Link to="/dashboard/buyer/inquiries">Quotes and Status</Link>
            <Link to="/dashboard/buyer/profile">Account</Link>
            {/* <Menu.Item disabled>Invoices</Menu.Item>
                  <Menu.Item disabled>Orders</Menu.Item>
                  <Menu.Item disabled>Account</Menu.Item>
                  <Menu.Item disabled>Help</Menu.Item> */}
            <Divider style={{ margin: '0' }} />
            <Button
              style={{ textAlign: 'left' }}
              type="link"
              onClick={() => handleSignOut()}
            >
              Sign Out
            </Button>
            <Divider style={{ margin: '0' }} />
          </Space>
        ) : (
          <>
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
          </>
        )}
      </Drawer>
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
