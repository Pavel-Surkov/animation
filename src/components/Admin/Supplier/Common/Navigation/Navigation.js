import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../../../assets/svg/logo_black_small.svg'
import { Row, Col, Space, Button } from 'antd'
import classes from './Navigation.module.scss'
function Navigation() {
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
                <Link to="/dashboard/supplier/lead">
                  <p>Leads</p>
                </Link>
                <Link to="/dashboard/supplier/message">
                  <p>Messages</p>
                </Link>
                <Link to="/dashboard/supplier/services">
                  <p>Services</p>
                </Link>
                <Link to="/dashboard/supplier/orders">
                  <p>Orders</p>
                </Link>
                <Link to="/dashboard/supplier/profile">
                  <p>Profile</p>
                </Link>
              </Space>
            </div>
          </Col>
          <Col span={12}>
            <div className={classes.navigationProfile}>
              <Space>
                <Button size="large" className={classes.dashboardButton}>
                  Dashboard
                </Button>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Navigation
