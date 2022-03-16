import React, { useEffect, useState, useStateCallback } from 'react'

import {
  Row,
  Col,
  Button,
  Form,
  Divider,
  Input,
  Avatar,
  Spin,
  Space,
  Upload,
} from 'antd'
import classes from './Profile.module.scss'
import plusIcon from '../../../../assets/svg/uploadIcon.svg'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Navigation from '../Common/Navigation/Navigation'
import {
  UserOutlined,
  PlusOutlined,
  DeliveredProcedureOutlined,
} from '@ant-design/icons'
const Profile = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [userImage, setUserImage] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [editing, setEditing] = useState(true)
  const [user, setUser] = useState('')
  const [imageIsUploading, setImageIsUploading] = useState('')
  const hiddenFileInput = React.useRef(null)

  const [imageUploading, setImageUploading] = useState(false)

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
        setFirstName(data.firstname)
        setLastName(data.lastname)
        setNumber(data.phone)
        setEmail(data.email)
        setUserImage(data.profileImage)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleClick = () => {
    hiddenFileInput.current.click()
  }
  const handleChange = (event) => {
    setImageIsUploading(true)
    const fileUploaded = event.target.files[0]
    const data = new FormData()
    data.append('file', fileUploaded)
    // console.warn(this.state.selectedFile)
    let url = `${process.env.REACT_APP_API_URL}/quotes/uploadFile`
    axios
      .post(url, data, {})
      .then((res) => {
        setUserImage(res.data.data)
        setImageIsUploading(false)
        setImageUploading(false)
        handleEditing(true, res.data.data)
      })
      .catch((err) => {
        console.log(err)
        setImageIsUploading(false)
      })
  }

  const handleEditing = (imageUpdate, userImageUploaded) => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/users/${user.id}`,
        {
          name: name,
          firstname: firstName,
          lastname: lastName,
          phone: number,
          workEmail: email,
          profileImage: imageUpdate ? userImageUploaded : userImage,
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
        <div className={classes.mainSectionHeading}>
          <h3>Account Settings</h3>
        </div>
      </div>
      <Divider />
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
                        <Space>
                          <input
                            type="file"
                            ref={hiddenFileInput}
                            onChange={handleChange}
                            style={{ display: 'none' }}
                          />

                          {imageUploading ? (
                            <>
                              <button
                                className={classes.uploadButton}
                                onClick={() => handleClick('inspiration')}
                              >
                                {imageIsUploading ? (
                                  <Spin size="large" />
                                ) : (
                                  <img width={20} src={plusIcon} alt="uplio" />
                                )}
                              </button>
                            </>
                          ) : (
                            <>
                              {userImage === '' ? (
                                <Avatar size={64} icon={<UserOutlined />} />
                              ) : (
                                <Avatar size={64} src={userImage} />
                              )}
                              <Button
                                type="link"
                                size="large"
                                onClick={() => setImageUploading(true)}
                              >
                                Edit
                              </Button>{' '}
                            </>
                          )}
                        </Space>
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
                            onClick={() => handleEditing(false, '')}
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
