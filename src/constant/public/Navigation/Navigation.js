import React from 'react'
import { Row, Col, Space } from 'antd'
import { Link } from 'react-router-dom'
import classes from './Navigation.module.scss'
import ButtonElement from '../Button/ButtonElement'
import logo from '../../../assets/svg/logo_rectangle_black.svg'
import InputElement from '../Input/InputElement'

const Navigation = () => {
  return (
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
                <InputElement placeholder="Search" />
                <Link to="/products/all">
                  <h3>CATEGORIES</h3>
                </Link>
                <Link to="/">
                  <h3>HOW IT WORKS</h3>
                </Link>
                <Link to="/faq">
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
  )
}
export default Navigation
