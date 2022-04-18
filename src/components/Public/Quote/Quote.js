import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import moment from 'moment'
import {
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Popover,
  InputNumber,
  Select,
  Modal,
  Space,
  Spin,
  Button,
  notification,
} from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import UploadImage from './UploadImage'
import plusIcon from '../../../assets/svg/uploadIcon.svg'
import logo from '../../../assets/svg/logo_black_medium.svg'
import Navigation from '../../../components/Public/Homepage/Navigation/Navigation'
import classes from './Quote.module.scss'
import { singleQuoteData } from '../../../redux/actions/singleQuote.action'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'

const { TextArea } = Input
const Option = Select

const Quote = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  let { id } = useParams()
  const user = useSelector((state) => state.user)
  // const userType = useSelector((state) => state.counter.userType)
  const token = sessionStorage.getItem('token')
  const [imageLoading, setImageLoading] = useState(false)
  const [imageResponseUrlArray] = useState([])
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
  const [supplierId, setSupplierId] = useState('')
  const [uploadType, setUploadType] = useState('')
  const [referenceFiles, setRefernceFiles] = useState(false)
  const [inspirationFilesUploading, setInspirationFilesUploading] =
    useState(false)
  const [documentFilesUploading, setDocumentFilesUploading] = useState(false)
  const [inspirationFiles, setInspirationFiles] = useState(false)
  const [documentFiles, setDocumentFiles] = useState(false)

  const [referenceFilesUrlArray, setReferenceFilesUrlArray] = useState([])
  const [inspirationFilesUrlArray, setInspirationFilesUrlArray] = useState([])
  const [documentUrlArray, setDocumentUrlArray] = useState([])

  const [preview, setPreView] = useState('')

  const [supplierIdExist, setSupplierIdExist] = useState(false)

  useEffect(() => {
    debugger
    if (id === 'no_supplier') {
      setSupplierIdExist(false)
      setSupplierId('')
    } else {
      setSupplierIdExist(true)
      setSupplierId(id)
    }
  }, [])

  useEffect(() => {
    if (referenceFilesUrlArray.length > 0) {
      setRefernceFiles(true)
    } else if (documentUrlArray.length > 0) {
      setDocumentFiles(true)
    } else if (inspirationFilesUrlArray.length > 0) {
      setInspirationFiles(true)
    } else if (referenceFilesUrlArray.length == 0) {
      setRefernceFiles(false)
    } else if (documentUrlArray.length == 0) {
      setDocumentFiles(false)
    } else if (inspirationFilesUrlArray.length == 0) {
      setInspirationFiles(false)
    }
  }, [referenceFilesUrlArray, documentUrlArray, inspirationFilesUrlArray])
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

  const hiddenFileInput = React.useRef(null)

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click()
    setUploadType(event)
  }
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    if (uploadType === 'reference') {
      setImageLoading(true)
    } else if (uploadType === 'inspiration') {
      setInspirationFilesUploading(true)
    } else if (uploadType === 'document') {
      setDocumentFilesUploading(true)
    }

    const fileUploaded = event.target.files[0]
    const data = new FormData()
    data.append('file', fileUploaded)
    // console.warn(this.state.selectedFile)
    let url = `${process.env.REACT_APP_API_URL}/quotes/uploadFile`
    console.log(fileUploaded)
    axios
      .post(url, data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status

        if (uploadType === 'reference') {
          setImageLoading(false)
          const referenceRecentUpload = []
          referenceRecentUpload.push(res.data.data)
          setReferenceFilesUrlArray(
            referenceFilesUrlArray.concat(referenceRecentUpload)
          )

          setRefernceFiles(true)
        } else if (uploadType === 'inspiration') {
          setInspirationFilesUploading(false)
          const inspirationRecentUpload = []
          inspirationRecentUpload.push(res.data.data)
          setInspirationFilesUrlArray(
            inspirationFilesUrlArray.concat(inspirationRecentUpload)
          )
          setInspirationFiles(true)
        } else if (uploadType === 'document') {
          setDocumentFilesUploading(false)
          const documentRecentUpload = []
          documentRecentUpload.push(res.data.data)
          setDocumentUrlArray(documentUrlArray.concat(documentRecentUpload))
          setDocumentFiles(true)
        }
      })
      .catch((err) => {
        console.log(err)
        setImageLoading(true)
      })
  }

  const handleDateEndDate = (date, dateString) => {
    setProjectEndDate(dateString)
  }

  const handleSubmit = () => {
    dispatch(
      singleQuoteData({
        projectName: projectDetail,
        productCategory: category,
        color: color,
        description: messageData,
        projectStartDate: projectStartDate,
        projectLaunchDate: projectEndDate,
        quantity: quantity,
        budget: budget,
        inspirationImages: inspirationFilesUrlArray,
        inspirationDocument: documentUrlArray,
        referenceImages: referenceFilesUrlArray,
        supplierIdExist: supplierIdExist,
        supplierId: supplierId,
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

  const onChangeBudget = (value) => {
    setBudget(value)
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
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const handleView = (item) => {
    setIsModalVisible(true)
    setPreView(item)
  }

  function removeItemFromArray(array, n) {
    const newArray = []

    for (let i = 0; i < array.length; i++) {
      if (array[i] !== n) {
        newArray.push(array[i])
      }
    }
    return newArray
  }

  const handleRemove = (item, type) => {
    if (type === 'reference') {
      // const index = referenceFilesUrlArray.indexOf(item)
      setReferenceFilesUrlArray(
        removeItemFromArray(referenceFilesUrlArray, item)
      )
    } else if (type === 'document') {
      // const index = documentUrlArray.indexOf(item)
      setDocumentUrlArray(removeItemFromArray(documentUrlArray, item))
    } else if (type === 'inspiration') {
      // const index = inspirationFilesUrlArray.indexOf(item)
      setInspirationFilesUrlArray(
        removeItemFromArray(inspirationFilesUrlArray, item)
      )
    }
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
          <h3>Get your Quote</h3>
          <h4>Create a request and get your quote in two business days. </h4>

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
                    disabledDate={(current) => {
                      let customDate = moment().format('YYYY-MM-DD')
                      return (
                        current && current < moment(customDate, 'YYYY-MM-DD')
                      )
                    }}
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
                    disabledDate={(current) => {
                      let customDate = moment().format('YYYY-MM-DD')
                      return (
                        current && current < moment(customDate, 'YYYY-MM-DD')
                      )
                    }}
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
                <Popover
                  content={
                    <h4>
                      Budget includes sample and production cost that you are
                      willing to pay for this project.
                    </h4>
                  }
                >
                  <Form.Item label=" Budget">
                    <InputNumber
                      className={classes.fullWidth}
                      placeholder="Budget amount..."
                      controls={false}
                      min={0}
                      prefix="$"
                      value={budget}
                      onChange={onChangeBudget}
                      size="large"
                      allowClear
                    />
                  </Form.Item>
                </Popover>
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
              Images or sourced documents such as
              <Popover
                content={
                  <h4>
                    Tech pack is a technical document that contains all
                    technical information <br /> such as your design sketches,
                    measurements and specs, sizing, etc.
                  </h4>
                }
              >
                {' '}
                <Link>tech packs</Link>
              </Popover>
            </p>

            <Form.Item>
              <div className={classes.uploadCustomDiv}>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                />
                <Row gutter={[15, 10]}>
                  <Col md={6} lg={6} xs={12}>
                    <button
                      className={classes.uploadButton}
                      onClick={() => handleClick()}
                    >
                      {imageLoading ? (
                        <Spin size="large" />
                      ) : (
                        <img src={plusIcon} alt="uplio" />
                      )}
                    </button>
                  </Col>
                  {referenceFiles
                    ? referenceFilesUrlArray.map((item) => {
                        return (
                          <Col md={6} lg={6} xs={12}>
                            <div className={classes.previewWrapper}>
                              <button
                                className={classes.rightButton}
                                onClick={() => handleRemove(item, 'reference')}
                              >
                                <DeleteOutlined />
                              </button>
                              <button
                                className={classes.leftButton}
                                onClick={() => handleView(item)}
                              >
                                <EyeOutlined />
                              </button>
                              <img src={item} alt="uplio" />
                            </div>
                          </Col>
                        )
                      })
                    : null}
                </Row>
              </div>
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
                <Row gutter={[15, 10]}>
                  <Col md={6} lg={6} xs={12}>
                    <button
                      className={classes.uploadButton}
                      onClick={() => handleClick('inspiration')}
                    >
                      {inspirationFilesUploading ? (
                        <Spin size="large" />
                      ) : (
                        <img src={plusIcon} alt="uplio" />
                      )}
                    </button>
                  </Col>
                  {!inspirationFiles
                    ? null
                    : inspirationFilesUrlArray.map((item) => (
                        <Col md={6} lg={6} xs={12}>
                          <div className={classes.previewWrapper}>
                            <button
                              className={classes.rightButton}
                              onClick={() => handleRemove(item, 'inspiration')}
                            >
                              <DeleteOutlined />
                            </button>
                            <button
                              className={classes.leftButton}
                              onClick={() => handleView(item)}
                            >
                              <EyeOutlined />
                            </button>
                            <img src={item} alt="uplio" />
                          </div>
                        </Col>
                      ))}
                </Row>
                {/* <UploadImage /> */}
              </div>

              <div className={classes.uploadImageSubText}>
                <p>Add image</p>
              </div>
            </Form.Item>
            <Form.Item label="Documents">
              <Row gutter={[15, 10]}>
                <Col md={6} lg={6} xs={12}>
                  <button
                    className={classes.uploadButton}
                    onClick={() => handleClick('document')}
                  >
                    {documentFilesUploading ? (
                      <Spin size="large" />
                    ) : (
                      <img src={plusIcon} alt="uplio" />
                    )}
                  </button>
                </Col>
                {!documentFiles
                  ? null
                  : documentUrlArray.map((item) => (
                      <Col span={6}>
                        <div>
                          <div className={classes.previewWrapper}>
                            <button
                              className={classes.rightButton}
                              onClick={() => handleRemove(item, 'document')}
                            >
                              <DeleteOutlined />
                            </button>
                            <button
                              className={classes.leftButton}
                              onClick={() => handleView(item)}
                            >
                              <EyeOutlined />
                            </button>
                            <img src={item} alt="uplio" />
                          </div>
                        </div>
                      </Col>
                    ))}
              </Row>
              {/* <UploadImage /> */}
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
        title="Preview"
        visible={isModalVisible}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
      >
        <div style={{ textAlign: 'center' }}>
          <img src={preview} alt="uplio" />
        </div>
      </Modal>
    </>
  )
}

export default Quote
