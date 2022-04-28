import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import { Row, Col, Space } from 'antd'
import { Link } from 'react-router-dom'
import classes from './Navigation.module.scss'
import ButtonElement from '../Button/ButtonElement'
import logo from '../../../assets/svg/logo_rectangle_black.svg'
import InputElement from '../Input/InputElement'

const Navigation = () => {
  const ref = useRef()
  let [check, setCheck] = useState(true)
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
                  <InputElement width={'325px'} placeholder="Search" />
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
                  <ButtonElement content={'SIGN UP'} />
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
