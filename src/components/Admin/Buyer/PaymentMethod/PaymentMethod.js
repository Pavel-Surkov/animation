import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Form, Input, Avatar, Spin } from 'antd'
import classes from './PaymentMethod.module.scss'

import axios from 'axios'
import Navigation from '../Common/Navigation/Navigation'
import { UserOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
const PaymentMethod = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const token = localStorage.getItem('token')
  useEffect(() => {
    setLoading(true)
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/getUserProfile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res)

        setLoading(false)
        setName(res.data.data.name)
        setEmail(res.data.data.email)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <div className={classes.actionSection}>
              <Button
                onClick={() => {
                  history.push('/dashboard/buyer/profile')
                }}
                type="link"
                size="large"
                className={classes.completedButton}
              >
                My Profile
              </Button>
              <Button
                onClick={() => {
                  history.push('/dashboard/buyer/profile/payment-method')
                }}
                size="large"
                type="primary"
                defaultValue="Test"
                className={classes.actionButton}
              >
                Payment Method
              </Button>
              <Button
                onClick={() => {
                  history.push('/dashboard/buyer/profile/shipping-address')
                }}
                size="large"
                type="link"
                className={classes.completedButton}
              >
                Shipping Address
              </Button>
            </div>
          </Col>
          <Col span={4}>
            <div className={classes.mainSection}>
              <Button type="primary" size="large">
                + Add Card
              </Button>
            </div>
          </Col>
          <Col span={11}>
            <div className={classes.mainSection}>
              <div className={classes.mainForm}>
                <h4>Add Payment Method</h4>
                <Form layout="vertical">
                  <Row gutter={12}>
                    <Col span={24}>
                      <Form.Item label="Name on Card">
                        <Input size="large" value={name} />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label="Card Number">
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="MM/YY">
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="CVC">
                        <Input size="large" value={email} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="Zip Code">
                        <Input size="large" />
                      </Form.Item>
                    </Col>

                    <Col span={24} align="center">
                      <Button type="primary" size="large">
                        Add
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default PaymentMethod
