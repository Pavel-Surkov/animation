import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Form, Input, Avatar, Spin } from 'antd'
import classes from './ShippingAddress.module.scss'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import Navigation from '../Common/Navigation/Navigation'
import { UserOutlined } from '@ant-design/icons'

const ShippingAddress = () => {
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
                type="link"
                defaultValue="Test"
                className={classes.completedButton}
              >
                Payment Method
              </Button>
              <Button
                onClick={() => {
                  history.push('/dashboard/buyer/profile/shipping-address')
                }}
                size="large"
                type="primary"
                className={classes.actionButton}
              >
                Shipping Address
              </Button>
            </div>
          </Col>
          <Col span={4}>
            <div className={classes.mainSection}>
              <Button type="primary" size="large">
                + Add New Address
              </Button>
            </div>
          </Col>
          <Col span={11}>
            <div className={classes.mainSection}>
              <div className={classes.mainForm}>
                <h4>Add new shipping address Street and Number</h4>
                <Form layout="vertical">
                  <Row gutter={12}>
                    <Col span={24}>
                      <Form.Item label="Name">
                        <Input size="large" value={name} />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label="Country">
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label="Street and Number">
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label="Apt, Suite (optional)">
                        <Input size="large" value={email} />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label="City">
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="State/Province">
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
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
export default ShippingAddress
