import React, { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Divider,
  Button,
  Form,
  Select,
  Input,
  Space,
  Avatar,
  Spin,
  Modal,
} from 'antd'
import classes from './ShippingAddress.module.scss'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Navigation from '../Common/Navigation/Navigation'
import { useHistory } from 'react-router-dom'
const ShippingAddress = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [countriesListingData, setCountriesListingData] = useState(null)
  const [stateListingData, setStateListingData] = useState(null)
  const [updateModal, setUpdateModal] = useState(false)
  const [addressData, setAddressData] = useState([])

  const [modal, setModal] = useState(false)
  const [currentTab, setCurrentTab] = useState('')
  const [user, setUser] = useState()
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [apt, setApt] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')

  const Option = Select
  const token = localStorage.getItem('token')

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${process.env.REACT_APP_API_URL}/countries/`)
      .then((res) => {
        setCountriesListingData(res.data.countries)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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
        setAddressData(res.data.data.shippingAddresses)
        setUser(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    setState(null)
    if (countriesListingData !== null) {
      countriesListingData.map((item) => {
        if (item.country === country) {
          return setStateListingData(item.states)
        }
      })
    }
  }, [country, countriesListingData])

  const handleSavingAddress = () => {
    setLoading(true)
    if (street !== '') {
      if (apt !== '') {
        if (city !== '') {
          if (country !== '') {
            if (name !== '') {
              if (state !== '') {
                if (zipCode !== '') {
                  addressData.push({
                    address1: street,
                    address2: apt,
                    city: city,
                    country: country,
                    name: name,
                    state: state,
                    zip: zipCode,
                    _id: (
                      '0'.repeat(16) +
                      Math.floor(Math.random() * 16 ** 16).toString(16)
                    ).slice(-16),
                  })
                  axios
                    .post(
                      `${process.env.REACT_APP_API_URL}/users/${user.id}/add_shipping_address`,
                      {
                        shippingAddress: {
                          address1: street,
                          address2: apt,
                          city: city,
                          country: country,
                          name: name,
                          state: state,
                          zip: zipCode,
                        },
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
                      setModal(false)
                      setName('')
                      setStreet('')
                      setApt('')
                      setCity('')
                      setCountry('')
                      setState('')
                      setZipCode('')
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                }
              }
            }
          }
        }
      }
    }
  }

  const handleCountryChange = (e) => {
    setCountry(e)
  }
  const handleUpdateAddress = (data) => {
    setName(data.name)
    setStreet(data.address1)
    setApt(data.address2)
    setCity(data.city)
    setCountry(data.country)
    setState(data.state)
    setZipCode(data.zip)
    setUpdateModal(true)
    setCurrentTab(data)
  }
  const handleUpdatingAddress = () => {
    let data = currentTab
    let updatedArry = []
    addressData.map((item) => {
      if (item._id === data._id) {
        updatedArry.push({
          address1: street,
          address2: apt,
          city: city,
          country: country,
          name: name,
          state: state,
          zip: zipCode,
        })
      } else {
        updatedArry.push(item)
      }
    })
    setAddressData(updatedArry)
    setUpdateModal(false)
    setName('')
    setZipCode('')

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/${user.id}/update_shipping_address_by_id`,
        {
          shippingAddress: {
            name: name,
            country: country,
            address1: street,
            address2: apt,
            city: city,
            state: state,
            zip: zipCode,
            _id: currentTab._id,
          },
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
        setModal(false)
        setName('')
        setCountry('')
        setStreet('')
        setApt('')
        setCity('')
        setState('')
        setZipCode('')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleRemoveAddress = (data) => {
    let arr = []
    addressData.map((item) => {
      if (item._id !== data) {
        arr.push(item)
      }
    })
    setAddressData(arr)

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/${user.id}/remove_shipping_address`,
        {
          _id: data,
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
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleAddingAddress = () => {
    setModal(true)
  }

  //Formik validation schema
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  })

  const initialValues = {
    username: '',
    email: '',
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
                className={classes.completedButton}
                defaultValue="Test"
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
              <Button
                onClick={() => setModal(true)}
                type="primary"
                className={classes.addAddress}
                size="large"
              >
                + Add New Address
              </Button>
            </div>
          </Col>
          <Col span={11}>
            <div className={classes.listPayments}>
              {addressData.map((item) => (
                <div key={item._id} className={classes.paymentCard}>
                  <Row>
                    <Col span={24}>
                      <h3>
                        <strong>Name : </strong>
                        {item.name}
                      </h3>
                    </Col>
                    <Col span={24}>
                      <h3>
                        <strong>Country : </strong>
                        {item.country}
                      </h3>
                    </Col>
                    <Col span={24}>
                      <h3>
                        <strong>Street and Number : </strong>
                        {item.address1}
                      </h3>
                    </Col>
                    <Col span={24}>
                      <h3>
                        <strong>Apt, Suite (optional) : </strong>
                        {item.address2}
                      </h3>
                    </Col>
                    <Col span={24}>
                      <h3>
                        <strong>City : </strong>
                        {item.city}
                      </h3>
                    </Col>
                    <Col span={12}>
                      <h3>
                        <strong>State/Province </strong>
                        {item.state}
                      </h3>
                    </Col>
                    <Col span={12}>
                      <h3>
                        <strong>Zip Code : </strong>
                        {item.zip}
                      </h3>
                    </Col>
                    <Col span={24} align="center">
                      <Space size={12}>
                        <Button
                          type="secondary"
                          size="large"
                          onClick={() => handleUpdateAddress(item)}
                        >
                          Update
                        </Button>
                        <Button
                          type="primary"
                          size="large"
                          onClick={() => handleRemoveAddress(item._id)}
                        >
                          Remove
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
      <Modal
        visible={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
        footer={false}
      >
        <div className={classes.mainSection}>
          <div className={classes.mainForm}>
            <h4>Add new shipping address </h4>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                // same shape as initial values

                console.log(values)
              }}
            >
              <Form layout="vertical">
                <Row gutter={12}>
                  <Col span={24}>
                    <Form.Item label="Name">
                      <Input
                        size="large"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item label="Country">
                      <Select
                        placeholder="Select a country..."
                        style={{ width: '100%' }}
                        onChange={(e) => handleCountryChange(e)}
                        allowClear
                        size="large"
                      >
                        {countriesListingData === null ? (
                          <Option value="null">Select</Option>
                        ) : (
                          countriesListingData.map((item) => (
                            <Option value={item.country}>{item.country}</Option>
                          ))
                        )}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item label="Street and Number">
                      <Input
                        size="large"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item label="Apt, Suite (optional)">
                      <Input
                        size="large"
                        value={apt}
                        onChange={(e) => setApt(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item label="City">
                      <Input
                        size="large"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="State">
                      <Select
                        placeholder="Select a country..."
                        style={{ width: '100%' }}
                        onChange={(e) => setState(e)}
                        allowClear
                        value={state}
                        size="large"
                      >
                        {stateListingData === null ? (
                          <Option value="null">Select</Option>
                        ) : (
                          stateListingData.map((item) => (
                            <Option value={item}>{item}</Option>
                          ))
                        )}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Zip Code">
                      <Input
                        size="large"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24} align="center">
                    <Button
                      onClick={() => handleSavingAddress()}
                      type="primary"
                      size="large"
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Formik>
          </div>
        </div>
      </Modal>
      <Modal
        visible={updateModal}
        onOk={() => setUpdateModal(false)}
        onCancel={() => setUpdateModal(false)}
        footer={false}
      >
        <div className={classes.mainSection}>
          <div className={classes.mainForm}>
            <h4>Updating shipping address </h4>
            <Form layout="vertical">
              <Row gutter={12}>
                <Col span={24}>
                  <Form.Item label="Name">
                    <Input
                      size="large"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Country">
                    <Input
                      size="large"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Street and Number">
                    <Input
                      size="large"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Apt, Suite (optional)">
                    <Input
                      size="large"
                      value={apt}
                      onChange={(e) => setApt(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="City">
                    <Input
                      size="large"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="State">
                    <Input
                      size="large"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Zip Code">
                    <Input
                      size="large"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </Form.Item>
                </Col>

                <Col span={24} align="center">
                  <Button
                    onClick={() => handleUpdatingAddress()}
                    type="primary"
                    size="large"
                  >
                    Update
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  )
}
export default ShippingAddress
