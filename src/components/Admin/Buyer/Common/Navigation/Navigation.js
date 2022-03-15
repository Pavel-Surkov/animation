import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import logo from '../../../../../assets/svg/logo_red_small.svg'
import { Row, Col, Space, Button, Menu, Dropdown, Avatar, Divider } from 'antd'
import classes from './Navigation.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { createBrowserHistory as history } from 'history'
import {
  RotateRightOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import Search from '../../../../common/Search/Search'
import axios from 'axios'
import {
  userLoggedOut,
  userDataStatus,
  userLoggedIn,
} from '../../../../../CounterSlice.js'

const Navigation = () => {
  const history = useHistory()
  const refreshToken = localStorage.getItem('refresh')
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()
  const userLoggedInState = useSelector((state) => state.counter.userLoggedIn)
  const userProfile = useSelector((state) => state.counter.user.profileImage)
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
        console.log(res)
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
  return (
    <>
      <div className={classes.header}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align="middle">
          <Col span={2}>
            <Link to="/dashboard/supplier">
              <img src={logo} alt="Uplio" />
            </Link>
          </Col>
          <Col span={8}>
            <div className={classes.navigationLinks}>
              <Space size={40}>
                <Link to="/dashboard/buyer/inquiries">
                  <p>My Inquiries </p>
                </Link>
                {/* <Link to="/dashboard/buyer/quote">
                  <p>My quotes</p>
                </Link> */}
              </Space>
            </div>
          </Col>
          <Col span={12}>
            <div className={classes.navigationProfile}>
              <Space>
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

                          {/* <Menu.Item disabled>Messages</Menu.Item>
                          <Menu.Item disabled>Invoices</Menu.Item>
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
                        {userProfile === '' ? (
                          <Avatar size={50} icon={<UserOutlined />} />
                        ) : (
                          <Avatar size={50} src={userProfile} />
                        )}
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
                    <Link
                      to="/signup"
                      className={classes.signUp}
                      type="secondary"
                    >
                      Sign Up
                    </Link>
                  </Space>
                )}
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Navigation
