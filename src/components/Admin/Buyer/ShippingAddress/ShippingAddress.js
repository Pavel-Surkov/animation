import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Form, Input, Space, Avatar, Spin, Modal } from 'antd'
import classes from './ShippingAddress.module.scss'

import axios from 'axios'
import Navigation from '../Common/Navigation/Navigation'
import { UserOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
const ShippingAddress = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
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
        setAddressData(res.data.data.shippingAddresses)
        setUser(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSavingAddress = () => {
    setLoading(true)
    addressData.push({
      address1: street,
      address2: apt,
      city: city,
      country: country,
      name: name,
      state: state,
      zip: zipCode,
      _id: (
        '0'.repeat(16) + Math.floor(Math.random() * 16 ** 16).toString(16)
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
                    onClick={() => handleSavingAddress()}
                    type="primary"
                    size="large"
                  >
                    Add
                  </Button>
                </Col>
              </Row>
            </Form>
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
