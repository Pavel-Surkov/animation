import React from 'react'
import classes from './Hompagetemp.module.scss'

import logo from '../../../assets/svg/logo_black_medium.svg'
import { Link, useHistory } from 'react-router-dom'
import { Row, Col, Button, Space } from 'antd'

const Hompagetemp = () => {
  const history = useHistory()
  return (
    <>
      <div className={classes.header}>
        <Row>
          <Col span={12}>
            <Link to="/">
              <img src={logo} alt="Uplio" />
            </Link>
          </Col>
        </Row>
      </div>
      <div className={classes.container}>
        <div className={classes.banner}>
          <Row>
            <Col span={12}>
              <h2>
                Get Best Product Deals In <span>Fashion</span>
              </h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum cursus quam aliquam molestie. Enim, sit et tempus at.
                Venenatis in in in lectus auctor{' '}
              </h3>
              <Space size={12}>
                <Button onClick={() => history.push({ pathname: '/quote' })}>
                  GEt a Quote
                </Button>
              </Space>
            </Col>
            <Col span={12}></Col>
          </Row>
        </div>
      </div>
    </>
  )
}
export default Hompagetemp
