import React, { useEffect, useState, useStateCallback } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
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
import ButtonElement from '../../../../constant/public/Button/ButtonElement'
import cam from '../../../../assets/svg/camera.svg'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'
import InputElement from '../../../../constant/public/Input/InputElement'
import classes from './Profile.module.scss'

import { useHistory } from 'react-router-dom'
import axios from 'axios'

import Navigation from '../../../../constant/public/Navigation/Navigation'
import Footer from '../../../../constant/public/Footer/Footer'
import {
  UserOutlined,
  PlusOutlined,
  DeliveredProcedureOutlined,
} from '@ant-design/icons'
import clsx from 'clsx'
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

  const token = sessionStorage.getItem('token')

  const Formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      profileImage: '',
      phone: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid email.').required('Email is Required'),
      password: yup.string().required('Password is required.'),
    }),
    onSubmit: (values) => {
      debugger
    },
  })
  const { setFieldValue } = Formik
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
        setFieldValue('name', data.name)
        setFieldValue('firstName', data.firstname)
        setFieldValue('lastName', data.lastname)
        setFieldValue('phone', data.phone)
        setFieldValue('email', data.email)
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
          name: Formik.values.name,
          firstname: Formik.values.firstName,
          lastname: Formik.values.lastName,
          phone: Formik.values.phone,
          workEmail: Formik.values.email,
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

      <div className={classes.container}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col lg={6} md={6} sm={0} xs={0}>
            <div className={classes.actionSection}>
              <button
                onClick={() => {
                  history.push('/dashboard/buyer/inquiries')
                }}
                type="primary"
                className={classes.actionButton}
              >
                Quotes
              </button>

              <button
                className={classes.actionButton}
                onClick={() => {
                  history.push('/coming-soon')
                }}
              >
                Message Center
              </button>
              <button className={classes.actionButton}>Orders</button>
              <button className={clsx([classes.actionButton, classes.active])}>
                Account Settings
              </button>
              <button
                className={classes.actionButton}
                onClick={() => {
                  history.push('/coming-soon')
                }}
              >
                Shipping and Payment Information
              </button>
              <button className={classes.actionButton}>Log Out</button>
            </div>
          </Col>
          <Col lg={18} md={18} sm={24} xs={24}>
            {loading ? (
              <div className={classes.spin}>
                <Spin
                  indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                />
              </div>
            ) : (
              <>
                <div className={classes.responsiveHeader}>
                  <h2>Account Settings</h2>
                </div>
                <div className={classes.mainSection}>
                  <Row>
                    <Col lg={5} md={5} sm={0} xs={0}>
                      <h2>Personal info</h2>
                      <h4>First Name</h4>
                      <h4>Last Name</h4>
                      <h4>Email</h4>
                      <h4>
                        Phone Number
                        <br />
                        (Optional)
                      </h4>
                      <h4>Password</h4>
                    </Col>
                    <Col lg={8} md={8} sm={0} xs={0}>
                      <div className={classes.inputSection}>
                        <div className={classes.inputSectionElements}>
                          <InputElement
                            name="firstName"
                            value={Formik.values.firstName}
                            onChange={Formik.handleChange}
                            placeholder="Jhon"
                            type="text"
                            width={'100%'}
                          />
                        </div>
                        <div className={classes.inputSectionElements}>
                          <InputElement
                            name="lastName"
                            value={Formik.values.lastName}
                            onChange={Formik.handleChange}
                            placeholder="Black"
                            width={'100%'}
                            placeholder="Black"
                            type="text"
                          />
                        </div>
                        <div className={classes.inputSectionElements}>
                          <InputElement
                            name="email"
                            value={Formik.values.email}
                            onChange={Formik.handleChange}
                            width={'100%'}
                            placeholder="info@gmail.com"
                            type="text"
                          />
                        </div>
                        <div className={classes.inputSectionElements}>
                          <InputElement
                            width="100%"
                            name="phone"
                            value={Formik.values.phone}
                            onChange={Formik.handleChange}
                            placeholder="+1 562-985-4111"
                            type="text"
                          />
                        </div>
                        <div className={classes.inputSectionElements}>
                          <h3>Change Password</h3>
                        </div>
                      </div>
                    </Col>
                    <Col lg={11} md={11} sm={0} xs={0} align="center">
                      {imageUploading ? (
                        <button
                          className={classes.uploadButton}
                          onClick={() => handleClick('inspiration')}
                        >
                          {imageIsUploading ? (
                            <Spin size="large" />
                          ) : (
                            <PlusOutlined width={20} />
                          )}
                        </button>
                      ) : userImage === '' ? (
                        <Avatar size={209} icon={<UserOutlined />} />
                      ) : (
                        <Avatar size={209} src={userImage} />
                      )}
                      <Space>
                        <input
                          type="file"
                          ref={hiddenFileInput}
                          onChange={handleChange}
                          style={{ display: 'none' }}
                        />
                        <button
                          className={classes.editButton}
                          onClick={() => setImageUploading(true)}
                        >
                          <img src={cam} alt="Uplio" />
                        </button>
                      </Space>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={0} md={0} sm={12} xs={12} align="center">
                      {imageUploading ? (
                        <button
                          className={classes.uploadButton}
                          onClick={() => handleClick('inspiration')}
                        >
                          {imageIsUploading ? (
                            <Spin size="large" />
                          ) : (
                            <PlusOutlined width={20} />
                          )}
                        </button>
                      ) : userImage === '' ? (
                        <Avatar size={209} icon={<UserOutlined />} />
                      ) : (
                        <Avatar size={209} src={userImage} />
                      )}
                      <Space>
                        <input
                          type="file"
                          ref={hiddenFileInput}
                          onChange={handleChange}
                          style={{ display: 'none' }}
                        />
                        <button
                          className={classes.editButton}
                          onClick={() => setImageUploading(true)}
                        >
                          <img src={cam} alt="Uplio" />
                        </button>
                      </Space>
                    </Col>
                    <Col lg={0} md={0} sm={24} xs={24}>
                      <div className={classes.inputSection}>
                        <h4>First Name</h4>

                        <div className={classes.inputSectionElements}>
                          <InputElement
                            name="firstName"
                            value={Formik.values.firstName}
                            onChange={Formik.handleChange}
                            placeholder="Jhon"
                            type="text"
                            width={'100%'}
                          />
                        </div>
                        <h4>Last Name</h4>

                        <div className={classes.inputSectionElements}>
                          <InputElement
                            name="lastName"
                            value={Formik.values.lastName}
                            onChange={Formik.handleChange}
                            placeholder="Black"
                            width={'100%'}
                            placeholder="Black"
                            type="text"
                          />
                        </div>
                        <h4>Email</h4>

                        <div className={classes.inputSectionElements}>
                          <InputElement
                            name="email"
                            value={Formik.values.email}
                            onChange={Formik.handleChange}
                            width={'100%'}
                            placeholder="info@gmail.com"
                            type="text"
                          />
                        </div>
                        <h4>
                          Phone Number
                          <br />
                          (Optional)
                        </h4>

                        <div className={classes.inputSectionElements}>
                          <InputElement
                            width="100%"
                            name="phone"
                            value={Formik.values.phone}
                            onChange={Formik.handleChange}
                            placeholder="+1 562-985-4111"
                            type="text"
                          />
                        </div>
                        <h4>Password</h4>
                        <div className={classes.inputSectionElements}>
                          <h3>Change Password</h3>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className={classes.mainSection}>
                  <Row>
                    <Col lg={5} md={5} sm={0} xs={0}>
                      <h2>Business info</h2>
                      <h4>Brand Name</h4>
                      <h4>Brand Type</h4>
                      <h4>Brand Size</h4>
                      <h4>Website URL</h4>
                      <h4>Instagram (optional)</h4>
                    </Col>
                    <Col lg={8} md={8} sm={0} xs={0}>
                      <div className={classes.inputSection}>
                        <div className={classes.inputSectionElements}>
                          <InputElement
                            placeholder="Brand Name"
                            type="text"
                            width="100%"
                          />
                        </div>
                        <div className={classes.inputSectionElements}>
                          <InputElement
                            width="100%"
                            placeholder="Brand Type"
                            type="text"
                          />
                        </div>
                        <div className={classes.inputSectionElements}>
                          <InputElement
                            width="100%"
                            placeholder="Brand Type"
                            type="text"
                          />
                        </div>
                        <div className={classes.inputSectionElements}>
                          <InputElement
                            width="100%"
                            placeholder="uplio.com"
                            type="text"
                          />
                        </div>
                        <div className={classes.inputSectionElements}>
                          <InputElement
                            width="100%"
                            placeholder="@uplio_marketplace"
                            type="text"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col lg={11} md={8} sm={0} xs={0}></Col>
                    <Col lg={5} md={5} sm={0} xs={0}>
                      <div className={classes.actionButtonEdit}>
                        <ButtonElement
                          content="SAVE"
                          width={'325px'}
                          function={() => handleEditing(false, '')}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={24} xs={24} lg={0} md={0}>
                      <div className={classes.inputSection}>
                        <h2>Business info</h2>
                        <h4>Brand Name</h4>
                        <div className={classes.inputSectionElements}>
                          <InputElement
                            placeholder="Brand Name"
                            type="text"
                            width="100%"
                          />
                        </div>
                        <h4>Brand Type</h4>

                        <div className={classes.inputSectionElements}>
                          <InputElement
                            width="100%"
                            placeholder="Brand Type"
                            type="text"
                          />
                        </div>
                        <h4>Brand Size</h4>

                        <div className={classes.inputSectionElements}>
                          <InputElement
                            width="100%"
                            placeholder="Brand Type"
                            type="text"
                          />
                        </div>
                        <h4>Website URL</h4>

                        <div className={classes.inputSectionElements}>
                          <InputElement
                            width="100%"
                            placeholder="uplio.com"
                            type="text"
                          />
                        </div>
                        <h4>Instagram (optional)</h4>
                        <div className={classes.inputSectionElements}>
                          <InputElement
                            width="100%"
                            placeholder="@uplio_marketplace"
                            type="text"
                          />
                        </div>
                      </div>
                    </Col>

                    <Col sm={24} xs={24} lg={0} md={0}>
                      <div className={classes.actionButtonEdit}>
                        <ButtonElement
                          content="SAVE"
                          width={'100%'}
                          function={() => handleEditing(false, '')}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </>
            )}
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}
export default Profile
