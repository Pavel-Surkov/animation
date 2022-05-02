import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import { Row, Col, Space } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import classes from './Navigation.module.scss'
import ButtonElement from '../Button/ButtonElement'
import logo from '../../../assets/svg/logo_rectangle_black.svg'
import Search from '../Search/Search'

const Navigation = () => {
  const ref = useRef()
  const history = useHistory()
  let [check, setCheck] = useState(true)

  const [search, setSearch] = useState('')

  const sticky = useStickyHeader(50)

  const { clientHeight } = ref

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
              <Space size={64}>
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
                <Space size={16}>
                  <ButtonElement
                    function={() => history.push({ pathname: '/signup' })}
                    content="SIGN UP"
                  />
                  <Link to="/login">
                    <h3>SIGN IN</h3>
                  </Link>
                </Space>
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
