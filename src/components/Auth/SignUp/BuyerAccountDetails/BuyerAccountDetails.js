import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Form, Input, Button, Radio, Select, notification } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import axios from 'axios'
import classes from './BuyersAccountDetails.module.scss'

const { Option } = Select
const BuyerAccountDetails = () => {
  const history = useHistory()

  const user = useSelector((state) => state.counter.user)
  const userType = useSelector((state) => state.counter.userType)
  const token = sessionStorage.getItem('token')
  const [fullName, setFullName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [phone, setPhone] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState(undefined)

  const handleCountry = (e) => {
    setCountry(e)
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/countries/`)
      .then((res) => {
        setCountries(res.data.countries)
      })
      .then((err) => {
        console.log(err)
      })
  }, [])

  const handleNotification = () => {
    notification.open({
      message: 'Thank You, Will connect with soon',
      description:
        'We will be processing your data and reach out to you sonner.',
    })
  }

  const handleSubmit = () => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/users/${user.id}`,
        {
          name: fullName,
          companyName: companyName,
          phone: phone,
          workEmail: user.workEmail,
          userType: userType,
          country: country,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        history.push({
          pathname: '/',
        })
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div className={classes.mainSection}>
        <h3>Start your Uplio account.</h3>
        <h4>
          Already have an account? <Link to="/login">Sign In</Link>
        </h4>
        <p>(*Required field)</p>
        <hr />
        <Form layout="vertical">
          <Form.Item label="*Full name">
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              size="large"
              placeholder="Full name..."
            />
          </Form.Item>
          <Form.Item label="*Company name">
            <Input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              size="large"
              placeholder="Company name..."
            />
          </Form.Item>
          <Form.Item label="*Phone number">
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              size="large"
              placeholder="+1 (XXX) XXX-XXXX"
            />
          </Form.Item>
          <Form.Item label="Work email (optional)">
            <Input
              value={workEmail}
              onChange={(e) => setWorkEmail(e.target.value)}
              size="large"
              placeholder="Email address..."
            />
          </Form.Item>
          <Form.Item label="Website URL (optional)">
            <Input
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              size="large"
              placeholder="ex: https://www.yourwebsite.com"
            />
          </Form.Item>
          <Form.Item label="*Country">
            <Select
              style={{ width: '100%' }}
              defaultValue="Country"
              allowClear
              onChange={(e) => handleCountry(e)}
              size="large"
            >
              {countries === undefined ? (
                <Option value="null">Select</Option>
              ) : (
                countries.map((item) => (
                  <Option value={item.name}>{item.name}</Option>
                ))
              )}
            </Select>
          </Form.Item>
          <Form.Item>
            {/* <Link className={classes.buttonHome} to="/signup/completed">
              <h6>
                Get started
                <ArrowRightOutlined />
              </h6>
            </Link> */}
            <Button
              onClick={() => {
                handleSubmit()
              }}
              size="large"
              style={{
                backgroundColor: '#000',
                width: '100%',
                border: '1px solid #000',
              }}
              type="primary"
              htmlType="submit"
            >
              Get started
              <ArrowRightOutlined />
            </Button>
          </Form.Item>
        </Form>
        <h5>
          You acknowledge that you have read and agree <br /> to our Terms of
          Service and Privacy Policy.
        </h5>
      </div>
    </>
  )
}
export default BuyerAccountDetails
