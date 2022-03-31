import React, { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Space,
  Divider,
  Avatar,
  Spin,
  Modal,
} from 'antd'
import classes from './PaymentMethod.module.scss'

import axios from 'axios'
import Navigation from '../Common/Navigation/Navigation'
import { UserOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
const PaymentMethod = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)
  const [paymentData, setPaymentData] = useState([])
  const [paymentMeta, setPaymentMeta] = useState([])
  const [modal, setModal] = useState(false)
  const [currentTab, setCurrentTab] = useState('')
  const [user, setUser] = useState()
  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [date, setDate] = useState('')
  const [cvc, setCvc] = useState('')
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
        setPaymentData(res.data.data.paymentCards)
        setPaymentMeta(res.data.data.paymentCards)
        setUser(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSavingPaymentMethod = () => {
    // CVV: cvc,
    // cardExpiry: date,
    // cardNumber: cardNumber,
    // name: name,
    // zip: zipCode,
    if (cvc !== '') {
      if (date !== '') {
        if (cardNumber !== '') {
          if (name !== '') {
            if (zipCode !== '') {
              setLoading(true)
              paymentData.push({
                CVV: cvc,
                cardExpiry: date,
                cardNumber: cardNumber,
                name: name,
                zip: zipCode,
                _id: (
                  '0'.repeat(16) +
                  Math.floor(Math.random() * 16 ** 16).toString(16)
                ).slice(-16),
              })
              axios
                .post(
                  `${process.env.REACT_APP_API_URL}/users/${user.id}/add_card`,
                  {
                    paymentCards: {
                      name: name,
                      cardNumber: cardNumber,
                      cardExpiry: date,
                      CVV: cvc,
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
                  setCvc('')
                  setDate('')
                  setCardNumber('')
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

  const handleUpdateAddress = (data) => {
    setName(data.name)
    setCvc(data.CVV)
    setDate(data.cardExpiry)
    setCardNumber(data.cardNumber)
    setZipCode(data.zip)
    setUpdateModal(true)
    setCurrentTab(data)
  }
  const handleUpdatingPayment = () => {
    let data = currentTab
    let updatedArry = []
    paymentData.map((item) => {
      if (item._id === data._id) {
        updatedArry.push({
          CVV: cvc,
          cardExpiry: date,
          cardNumber: cardNumber,
          name: name,
          zip: zipCode,
        })
      } else {
        updatedArry.push(item)
      }
    })
    setPaymentData(updatedArry)
    //
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/${user.id}/update_card_by_id`,
        {
          paymentCards: {
            name: name,
            cardNumber: cardNumber,
            cardExpiry: date,
            CVV: cvc,
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
        setCvc('')
        setDate('')
        setCardNumber('')
        setZipCode('')
      })
      .catch((err) => {
        console.log(err)
      })

    setUpdateModal(false)
    setName('')
    setCvc('')
    setDate('')
    setCardNumber('')
    setZipCode('')
  }

  const handleRemoveAddress = (data) => {
    let arr = []
    paymentData.map((item) => {
      if (item._id !== data) {
        arr.push(item)
      }
    })
    setPaymentData(arr)

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/${user.id}/remove_card`,
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
              <Button
                onClick={() => setModal(true)}
                type="primary"
                className={classes.addCard}
                size="large"
              >
                + Add Card
              </Button>
            </div>
          </Col>
          <Col span={11}>
            <div className={classes.listPayments}>
              {paymentData.map((item) => (
                <div key={item._id} className={classes.paymentCard}>
                  <Row>
                    <Col span={12}>
                      <h3>
                        <strong>Name : </strong>
                        {item.name}
                      </h3>
                    </Col>
                    <Col span={12}>
                      <h3>
                        <strong>Card : </strong>
                        {item.cardNumber}
                      </h3>
                    </Col>
                    <Col span={12}>
                      <h3>
                        <strong>CVV : </strong>
                        {item.CVV}
                      </h3>
                    </Col>
                    <Col span={12}>
                      <h3>
                        <strong>Valid Till : </strong>
                        {item.cardExpiry}
                      </h3>
                    </Col>
                    <Col span={12}>
                      <h3>
                        <strong>Zip : </strong>
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
            <h4>Add Payment Method</h4>
            <Form layout="vertical">
              <Row gutter={12}>
                <Col span={24}>
                  <Form.Item label="Name on Card">
                    <Input
                      size="large"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Card Number">
                    <Input
                      size="large"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="MM/YY">
                    <Input
                      size="large"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="CVC">
                    <Input
                      size="large"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
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
                    onClick={() => handleSavingPaymentMethod()}
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
            <h4>Update Payment Method</h4>
            <Form layout="vertical">
              <Row gutter={12}>
                <Col span={24}>
                  <Form.Item label="Name on Card">
                    <Input
                      size="large"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Card Number">
                    <Input
                      size="large"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="MM/YY">
                    <Input
                      size="large"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="CVC">
                    <Input
                      size="large"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
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
                    onClick={() => handleUpdatingPayment(currentTab)}
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
export default PaymentMethod
