import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import classes from './Navigation.module.scss'
import ButtonElement from '../Button/ButtonElement'
import logo from '../../../assets/svg/logo_rectangle_black.svg'
import Search from '../Search/Search'
import bell from '../../../assets/svg/clarity_notification-line.svg'
import {
  RotateRightOutlined,
  UserOutlined,
  MenuOutlined,
} from '@ant-design/icons'
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
import { connect } from 'react-redux'
import {
  userLoggedOut,
  userDataStatus,
  userLoggedIn,
} from '../../../redux/actions/user.action'

const Navigation = () => {
  const ref = useRef()
  const history = useHistory()
  let [check, setCheck] = useState(true)

  const [search, setSearch] = useState('')

  const sticky = useStickyHeader(50)

  const { clientHeight } = ref

  const refreshToken = sessionStorage.getItem('refresh')
  const [visible, setVisible] = useState(false)
  const token = sessionStorage.getItem('token')
  const dispatch = useDispatch()
  const userLoggedInState = useSelector((state) => state.user.userLoggedIn)

  const user = useSelector((state) => state.user.user)

  const handleSignOut = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/logout`, {
        refreshToken: refreshToken,
      })
      .then((res) => {
        dispatch(userLoggedOut())
        dispatch(userDataStatus(''))
        sessionStorage.clear()
        history.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleSignIn = () => {
    history.push({ pathname: '/login' })
  }

  return (
    <header ref={ref} className={sticky && check ? classes.sticky : null}>
      <div className={classes.container}>
        <div className={classes.navigation}>
          <Row align="middle" justify="space-between">
            <Col span={4}>
              <Link to="/">
                <img src={logo} alt="uplio" />
              </Link>
            </Col>
            <Col span={20} align="right">
              <Space size={userLoggedInState ? 230 : 64}>
                <Space size={40}>
                  <Search width={'295px'} placeholder="Search" />

                  <Link to="/#category">
                    <h3>CATEGORIES</h3>
                  </Link>
                  <Link to="/#how-it-works">
                    <h3>HOW IT WORKS</h3>
                  </Link>
                  <Link to="/#faq">
                    <h3>FAQ</h3>
                  </Link>
                </Space>

                {userLoggedInState ? (
                  user.userType === 'supplier' &&
                  user.userType !== undefined ? (
                    <Space>
                      <button
                        onClick={() => {
                          history.push({ pathname: '/dashboard/supplier/lead' })
                        }}
                      >
                        <img src={bell} alt="Uplio" />
                      </button>
                      <Dropdown
                        overlayClassName={classes.dropDownStyle}
                        overlay={
                          <Menu>
                            <Menu.Item>
                              <h4>Hi, {user.name}</h4>
                            </Menu.Item>
                            <Divider style={{ margin: '0' }} />
                            <Menu.Item danger>
                              <Button
                                type="link"
                                onClick={() => handleSignOut()}
                              >
                                Sign Out
                              </Button>
                            </Menu.Item>
                          </Menu>
                        }
                      >
                        <Button className={classes.dropDownButton}>
                          {user.profileImage === '' ? (
                            <Avatar size={32} icon={<UserOutlined />} />
                          ) : (
                            <Avatar size={32} src={user.profileImage} />
                          )}
                        </Button>
                      </Dropdown>
                    </Space>
                  ) : (
                    <Space>
                      <Dropdown
                        overlay={
                          <Menu>
                            <Menu.Item>
                              <h4 style={{ letterSpacing: '2px' }}>
                                <strong>Hi,</strong> {user.name}
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
                              <Button
                                type="link"
                                onClick={() => handleSignOut()}
                              >
                                Sign Out
                              </Button>
                            </Menu.Item>
                          </Menu>
                        }
                      >
                        <Button className={classes.dropDownButton}>
                          {user.profileImage === '' ? (
                            <Avatar size={50} icon={<UserOutlined />} />
                          ) : (
                            <Avatar size={50} src={user.profileImage} />
                          )}
                        </Button>
                      </Dropdown>
                    </Space>
                  )
                ) : (
                  <Space>
                    <ButtonElement
                      function={() => history.push({ pathname: '/signup' })}
                      content="SIGN UP"
                    />
                    <Link to="/login">
                      <h3>SIGN IN</h3>
                    </Link>
                  </Space>
                )}
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </header>
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
