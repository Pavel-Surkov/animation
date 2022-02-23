import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import {
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Select,
  Modal,
  Space,
  Button,
  notification,
} from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import UploadImage from './UploadImage'
import logo from '../../../assets/svg/logo_black_medium.svg'
import Navigation from '../../../components/Public/Homepage/Navigation/Navigation'
import classes from './Quote.module.scss'
import { quoteData } from '../../../CounterSlice'

const { TextArea } = Input
const Option = Select

const Quote = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.counter.user)
  const userType = useSelector((state) => state.counter.userType)
  const token = localStorage.getItem('token')
  const [projectDetail, setProjectDetail] = useState('')
  const [projectStartDate, setProjectStartDate] = useState('')
  const [projectEndDate, setProjectEndDate] = useState('')
  const [quantity, setQuantity] = useState('')
  const [budget, setBudget] = useState('')
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState(undefined)
  const [color, setColor] = useState('')
  const [messageData, setMessageData] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/categories`)
      .then((res) => {
        setCategories(res.data.categories)
      })
      .then((err) => {
        console.log(err)
      })
  }, [])

  // useEffect(() => {
  //   if (user === undefined || user === '') {
  //     setIsModalVisible(true)
  //   }
  // }, [])

  const handleNotification = () => {
    notification.open({
      message: 'Thank You, Will connect with soon',
      description:
        'We will be processing your data and reach out to you sooner for all the matching suppliers we have for you.',
    })
  }

  const handleDateStartDate = (date, dateString) => {
    setProjectStartDate(dateString)
  }

  const handleDateEndDate = (date, dateString) => {
    setProjectEndDate(dateString)
  }

  const handleSubmit = () => {
    dispatch(
      quoteData({
        projectName: projectDetail,
        productCategory: category,
        color: color,
        description: messageData,
        projectStartDate: projectStartDate,
        projectLaunchDate: projectEndDate,
        quantity: quantity,
        budget: budget,
      })
    )
    history.push({ pathname: '/signup' })
    // axios
    //   .post(
    //     `${process.env.REACT_APP_API_URL}/quotes/save_quote`,
    //     {
    //       projectName: projectDetail,
    //       productCategory: category,
    //       color: color,
    //       description: messageData,
    //       projectStartDate: projectStartDate,
    //       projectLaunchDate: projectEndDate,
    //       quantity: quantity,
    //       budget: budget,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     handleNotification()
    //     setTimeout(() => {
    //       history.push({
    //         pathname: '/',
    //       })
    //     }, 5000)

    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }

  const handleCategory = (e) => {
    setCategory(e)
  }

  const handleColor = (e) => {
    setColor(e)
  }

  const handleSignUp = () => {
    history.push({
      pathname: '/signup',
    })
  }

  const handleSignIn = () => {
    history.push({
      pathname: '/login',
    })
  }
  const handleOk = () => {
    setIsModalVisible(false)
    history.push({ pathname: '/' })
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    history.push({ pathname: '/' })
  }
  return (
    <>
      {/* <Navigation /> */}
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <Link to="/">
            <img src={logo} alt="uplio" />
          </Link>
          <div className={classes.textOverlaySupplier}>
            <h1>SPECS</h1>
          </div>
        </div>
        <div className={classes.mainSection}>
          <h3>Get your Free Quote</h3>
          <h4>Create a request and get your quote in 30 minutes. </h4>

          <hr />
          <h6>Category:</h6>

          <Form layout="vertical">
            {/* <Form.Item label="Product category">
              <Select
                style={{ width: '100%' }}
                defaultValue="Select"
                allowClear
                size="large"
              >
                <Option value="Option 1">Option 1</Option>
                <Option value="Option 2">Option 2</Option>
                <Option value="Option 3">Option 3</Option>
                <Option value="Option 4">Option 4</Option>
                <Option value="Option 5">Option 5</Option>
                <Option value="Option 6">Option 6</Option>
                <Option value="Option 7">Option 7</Option>
                <Option value="Option 8">Option 8</Option>
              </Select>
            </Form.Item> */}

            <Form.Item>
              <Row gutter={12}>
                <Col span={24}>
                  <Form.Item label="Product category">
                    <Select
                      placeholder="Select a category..."
                      style={{ width: '100%' }}
                      onChange={(e) => handleCategory(e)}
                      allowClear
                      size="large"
                    >
                      {categories === undefined ? (
                        <Option value="null">Select</Option>
                      ) : (
                        categories.map((item) => (
                          <Option value={item.name}>{item.name}</Option>
                        ))
                      )}
                    </Select>
                  </Form.Item>
                </Col>

                {/* <Col span={4}>
                  <Form.Item label="Color">
                    <Select
                      style={{ width: '100%' }}
                      onChange={(e) => handleColor(e)}
                      allowClear
                      size="large"
                    >
                      <Option value="black">Black</Option>
                      <Option value="white">White</Option>
                      <Option value="red">Red</Option>
                      <Option value="green">Green</Option>
                      <Option value="yellow">Yellow</Option>
                    </Select>
                  </Form.Item>
                </Col> */}
              </Row>
            </Form.Item>
            <div className={classes.headingQuote}>
              <h6>Project details:</h6>
            </div>

            <Form.Item label="Project Name">
              <Input
                value={projectDetail}
                placeholder="Project name..."
                onChange={(e) => {
                  setProjectDetail(e.target.value)
                }}
                size="large"
                allowClear
              />
            </Form.Item>

            <Row gutter={12}>
              <Col span={12}>
                <Form.Item label="Project start date">
                  <DatePicker
                    placeholder="Select a date"
                    style={{ width: '100%' }}
                    onChange={handleDateStartDate}
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Target launch date">
                  <DatePicker
                    style={{ width: '100%' }}
                    placeholder="Select a date"
                    onChange={handleDateEndDate}
                    size="large"
                    allowClear
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Quantity">
                  <Input
                    value={quantity}
                    placeholder="Quantity..."
                    onChange={(e) => {
                      setQuantity(e.target.value)
                    }}
                    size="large"
                    allowClear
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Budget">
                  <Input
                    placeholder="Budget amount..."
                    value={budget}
                    onChange={(e) => {
                      setBudget(e.target.value)
                    }}
                    size="large"
                    allowClear
                  />
                </Form.Item>
              </Col>
            </Row>
            <div className={classes.headingQuote}>
              <h6 style={{ marginBottom: '0' }}>Project description:</h6>
            </div>

            <p style={{ marginBottom: '40px' }}>
              Briefly explain what you are looking for. (ex. We are looking to
              design active wear. We would like the fabric to be at least 90%
              cotton and include our brand logo.)
            </p>
            <Form.Item>
              <TextArea
                value={messageData}
                placeholder="Enter your project description..."
                onChange={(e) => setMessageData(e.target.value)}
                rows={5}
                size="large"
              />
            </Form.Item>
            <div className={classes.headingQuote}>
              <h6 style={{ marginBottom: '0' }}>Project reference files:</h6>
            </div>

            <p style={{ marginBottom: '32px' }}>
              Images or sourced documents such as tech packs
            </p>

            <Form.Item>
              <UploadImage />
            </Form.Item>
            <hr />
            <div className={classes.headingQuote}>
              <h6 style={{ marginBottom: '0' }}>Inspiration files:</h6>
            </div>

            <p style={{ marginBottom: '32px' }}>
              Images/design so that your supplier gets an idea of the style you
              are looking for
            </p>
            <Form.Item label="Images...">
              <div className={classes.uploadImageHeadText}>
                <UploadImage />
              </div>

              <div className={classes.uploadImageSubText}>
                <p>Add image</p>
              </div>
            </Form.Item>
            <Form.Item label="Documents & Links...">
              <UploadImage />
              <div className={classes.uploadImageSubText}>
                <p>Add document/link</p>
              </div>
            </Form.Item>

            <Form.Item>
              <button
                onClick={() => handleSubmit()}
                className={classes.buttonHome}
                to="/"
              >
                <h6>
                  Submit{'           '}
                  <ArrowRightOutlined />
                </h6>
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>

      {/* not logged in */}
      <Modal
        title="Oops !"
        visible={isModalVisible}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
      >
        <div style={{ textAlign: 'center' }}>
          <p>In Order to send quote you need to</p>
          <Space size="large">
            <Button onClick={() => handleSignUp()}>SignUp</Button>
            <Button onClick={() => handleSignIn()}>SignIn</Button>
          </Space>
        </div>
      </Modal>
    </>
  )
}
export default Quote
