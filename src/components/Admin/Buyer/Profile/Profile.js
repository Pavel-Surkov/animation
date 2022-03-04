import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Form, Input, Avatar, Spin } from 'antd'
import classes from './Profile.module.scss'

import axios from 'axios'
import Navigation from '../Common/Navigation/Navigation'
import { UserOutlined } from '@ant-design/icons'
const Profile = () => {
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
        debugger
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
                type="primary"
                size="large"
                className={classes.actionButton}
              >
                My Profile
              </Button>
              {/* <Button
                size="large"
                type="link"
                defaultValue="Test"
                className={classes.completedButton}
              >
                Payment Method
              </Button>
              <Button
                size="large"
                type="link"
                className={classes.completedButton}
              >
                Shipping Address
              </Button> */}
            </div>
          </Col>
          <Col span={16}>
            <div className={classes.mainSection}>
              {loading ? (
                <div className={classes.spin}>
                  <Spin />
                </div>
              ) : (
                <Form layout="vertical">
                  <Row gutter={12}>
                    <Col span={24}>
                      <Form.Item>
                        <Avatar size={64} icon={<UserOutlined />} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="First Name">
                        <Input size="large" value={name} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Last Name">
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Phone Number">
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Work Email">
                        <Input size="large" value={email} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="New Password">
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Confirm Password">
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Profile
