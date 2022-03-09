import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Form, Input, Avatar, Spin, Space } from 'antd'
import classes from './Profile.module.scss'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Navigation from '../Common/Navigation/Navigation'
import { UserOutlined } from '@ant-design/icons'
const Profile = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [editing, setEditing] = useState(true)
  const [user, setUser] = useState('')

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
        const data = res.data.data
        setUser(data)
        setName(data.name)
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setNumber(data.phone)
        setEmail(data.email)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleEditing = () => {
    debugger
    console.log(user)
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/users/${user.id}`,
        {
          name: name,
          firstname: firstName,
          lastname: lastName,
          phone: number,
          workEmail: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res)
        setLoading(false)
        setEditing(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
                type="primary"
                size="large"
                className={classes.actionButton}
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
                type="link"
                className={classes.completedButton}
              >
                Shipping Address
              </Button>
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
                        <Input
                          size="large"
                          disabled={editing}
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Last Name">
                        <Input
                          size="large"
                          disabled={editing}
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Phone Number">
                        <Input
                          size="large"
                          disabled={editing}
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Work Email">
                        <Input
                          size="large"
                          disabled={editing}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="New Password">
                        <Input
                          size="large"
                          disabled={editing}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Confirm Password">
                        <Input
                          value={confirmPassword}
                          disabled={editing}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          size="large"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24} align="right">
                      {!editing ? (
                        <Space size={12}>
                          <Button
                            type="link"
                            size="large"
                            onClick={() => setEditing(true)}
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={() => handleEditing()}
                            type="primary"
                            size="large"
                          >
                            Save
                          </Button>
                        </Space>
                      ) : (
                        <Button
                          onClick={() => setEditing(false)}
                          type="primary"
                          size="large"
                        >
                          Edit
                        </Button>
                      )}
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
