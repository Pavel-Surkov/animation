import React, { useState, useEffect } from 'react'
import classes from './SupplierProfile.module.scss'
import Scroll from '../../common/Scroll/Scrollproducts'
import profileImage from '../../../assets/images/profile_image.png'
import Slider from 'react-slick'

import { Row, Col, Carousel, Breadcrumb, Button, Space, Spin } from 'antd'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

import image from '../../../assets/images/sample_logo_img.png'
import {
  RightOutlined,
  HeartOutlined,
  MessageOutlined,
  EyeOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import Navigation from '../Homepage/Navigation/Navigation'
const loadImage = (setImageDimensions, imageUrl) => {
  const img = new Image()
  img.src = imageUrl

  img.onload = () => {
    setImageDimensions({
      height: img.height,
      width: img.width,
    })
  }
  img.onerror = (err) => {
    console.log('img error')
    console.error(err)
  }
}

const SupplierProfile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    pauseOnHover: false,
    slidesToScroll: 4,
    autoplay: true,
    easing: true,
    fade: false,
  }

  const settingsMobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    pauseOnHover: false,
    slidesToScroll: 4,
    autoplay: true,
    easing: true,
    fade: false,
  }

  const history = useHistory()
  let { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [supplierData, setSupplierData] = useState([])
  const [pageinate, setPaginate] = useState(1)
  const [supplierSliderImage, setSupplierSlierImage] = useState()
  const [showBanner, setShowBanner] = useState(true)
  const [imageHeight, setImageHeight] = useState(0)
  const handleQuote = () => {
    history.push({
      pathname: `/quote/${id}`,
    })
  }

  const getMeta = (url) => {
    var img = new Image()

    img.onload = function () {
      if (imageHeight === 0) {
        setImageHeight(this.height)
        return true
      } else if (this.height === imageHeight) {
        return false
      }
    }
    img.src = url

    return false
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/supplier_profile/${id}`)
      .then((res) => {
        const imageData = []
        if (res.data.images.length >= 3) {
          for (let i = 0; i < res.data.images.length; i++) {
            res.data.images.map((item) => {
              imageData.push(item)
            })
          }
        }

        setSupplierSlierImage(imageData)
        setSupplierData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const [overview, setOverview] = useState(true)
  const [service, setService] = useState(false)

  const handleTab = (value) => {
    switch (value) {
      case 'overview':
        setOverview(true)
        setService(false)
        break
      case 'service':
        setOverview(false)
        setService(true)
        break
      default:
        setOverview(true)
        setService(false)
        break
    }
  }

  return (
    <>
      <Navigation />
      {/* {supplierData.length > 0 ? (
        <> */}
      <div className={classes.section}>
        <Row>
          {/* TODO fix banner */}
          <Col lg={24} md={24} xs={0} sm={0}>
            <div className={classes.slideContainer}>
              {showBanner ? (
                <Slider {...settings}>
                  {supplierData.images !== undefined ? (
                    supplierSliderImage.map((item) => (
                      <div className={classes.slide}>
                        <img src={item} alt="uplio" />
                      </div>
                    ))
                  ) : (
                    <Spin />
                  )}
                </Slider>
              ) : null}
            </div>
          </Col>
          <Col lg={0} md={0} xs={24} sm={24} align="center">
            <Slider {...settingsMobile}>
              {supplierData.images !== undefined ? (
                supplierSliderImage.map((item) => (
                  <div className={classes.slide}>
                    <img src={item} alt="uplio" />
                  </div>
                ))
              ) : (
                <Spin />
              )}
            </Slider>
          </Col>
        </Row>
      </div>
      <div className={classes.container}>
        <div className={classes.companyDetails}>
          <Row gutter={12}>
            <Col lg={2} md={2} sm={8} xs={8} className={classes.logo}>
              <img src={supplierData.companyLogo} alt="uplio" />
            </Col>
            <Col lg={12} md={12} sm={16} xs={16}>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="">Supplier</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">{supplierData.country}</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">{supplierData.city}</a>
                </Breadcrumb.Item>
              </Breadcrumb>
              <h3>{supplierData.companyName}</h3>
            </Col>
          </Row>
        </div>

        <div className={classes.section}>
          <Row gutter={12}>
            <Col md={18} lg={18} sm={24} xs={24}>
              <div className={classes.tabNavigation}>
                <button
                  className={overview ? classes.activeTab : null}
                  onClick={() => handleTab('overview')}
                >
                  Overview
                </button>
                {/* <button
                  className={service ? classes.activeTab : null}
                  onClick={() => handleTab('service')}
                >
                  Services
                </button> */}
              </div>

              {overview ? <Overview props={supplierData} /> : null}
              {service ? <Services props={supplierData} /> : null}
            </Col>
            <Col lg={6} md={6} xs={24} sm={24}>
              <div className={classes.buttonSection}>
                {/* <Space direction="vertical" > */}
                <Button
                  onClick={() => handleQuote()}
                  block
                  size="large"
                  className={classes.buttonRequest}
                >
                  Request a quote <RightOutlined />
                </Button>
                {/* <Button block size="large">
                  <MessageOutlined /> Contact Supplier
                </Button>
                <Button block size="large">
                  <HeartOutlined /> Add to favorites
                </Button> */}
                {/* </Space> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>{' '}
    </>
    //     ) : (
    //       <div className={classes.spin}>
    //         <Spin />
    //       </div>
    //     )}
    //   </>
  )
}

const Overview = (data) => {
  return (
    <>
      <div classes={classes.section}>
        <div className={classes.companyDetailsTab}>
          <h2>{data.props.companyOverview}</h2>
        </div>
        <Row>
          {/* <Col span={4}>
            <div className={classes.companyDetailsTab}>
              <p>
              Production capacity
              </p>
              <h3>1-5,000 units/mo</h3>
            </div>
          </Col> */}
          <Col span={2}>
            <div className={classes.companyDetailsTab}>
              <p>MOQ</p>
              <h3>{data.props.MOQ}</h3>
            </div>
          </Col>
          {/* <Col span={4}>
            <div className={classes.companyDetailsTab}>
              <p>Production capacity</p>
              <h3>1-5,000 units/mo</h3>
            </div>
          </Col> */}
          <Col md={6} lg={6}>
            <div className={classes.companyDetailsTab}>
              <p>Estimated lead time</p>
              <h3>{data.props.averageLeadtime}</h3>
            </div>
          </Col>

          {/* <Col span={4}>
            <div className={classes.companyDetailsTab}>
              <p>Established</p>
              <h3>1988</h3>
            </div>
          </Col> */}
        </Row>
        <hr />
        <div className={classes.companyDetailsFooter}>
          <h5>Specialization</h5>
          {data.props.specialization !== undefined ? (
            <ul>
              {data.props.specialization.split(',').map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
        {/* <Row>
          <Col span={6}>
            <div className={classes.companyDetailsImg}>
              <img src={sampleImage1} alt="uplio" />
              <p>Item Title</p>
              <h5>Detail copy</h5>
            </div>
          </Col>
          <Col span={6}>
            <div className={classes.companyDetailsImg}>
              <img src={sampleImage2} alt="uplio" />
              <p>Item Title</p>
              <h5>Detail copy</h5>
            </div>
          </Col>
          <Col span={6}>
            <div className={classes.companyDetailsImg}>
              <img src={sampleImage3} alt="uplio" />
              <p>Item Title</p>
              <h5>Detail copy</h5>
            </div>
          </Col>
          <Col span={6}>
            <div className={classes.companyDetailsImg}>
              <img src={sampleImage4} alt="uplio" />
              <p>Item Title</p>
              <h5>Detail copy</h5>
            </div>
          </Col>
        </Row> */}
        {/* <div className={classes.section}></div> */}
      </div>
    </>
  )
}

const Services = (data) => {
  const id = useParams()
  const history = useHistory()
  const handleQuote = () => {
    history.push({
      pathname: `/quote/${id}`,
    })
  }
  const supplierArray = [1, 2, 3]
  return (
    <div classes={classes.section}>
      <div className={classes.companyDetailsTab}>
        <h1>
          Work directly with [Company Name], Select a service to get started.
        </h1>
      </div>
      {supplierArray.map((item) => {
        return (
          <>
            <Row>
              <Col span={6}>
                <div className={classes.companyDetailsTab}>
                  <img src={image} alt="Uplio" />
                </div>
              </Col>
              <Col span={18}>
                <div className={classes.companyDetailsSection}>
                  <Row>
                    <Col span={20}>
                      <h3>Service Header Line</h3>
                    </Col>
                    <Col span={4}>
                      <h3>
                        <strong>$500.00</strong>
                      </h3>
                    </Col>
                  </Row>
                  <p>
                    Descriptive copy about the service being offered will go
                    here. This can be up to two lines of text. The text will be
                    ellipsized if the description copy overflows the bounding
                    text box area...
                  </p>

                  <h4>Turnaround: 5 days</h4>
                  <Row gutter={12}>
                    <Col span={12}></Col>
                    <Col span={6}>
                      <Button size="large" className={classes.viewMoreButton}>
                        <EyeOutlined />
                        View more
                      </Button>
                    </Col>
                    <Col span={6}>
                      <Button size="large" className={classes.shopButton}>
                        <ShoppingCartOutlined />
                        Add to cart
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <hr />
          </>
        )
      })}
      <div className={classes.companyDetailsFooter}>
        <h5>Build your custom product from scratch.</h5>
        <Row>
          <Col span={6}>
            <div className={classes.companyDetailsTab}>
              <img src={image} alt="Uplio" />
            </div>
          </Col>
          <Col span={18}>
            <div className={classes.companyDetailsSection}>
              <h3>Custom Product Service</h3>

              <p>
                Descriptive copy about the service being offered will go here.
                This can be up to two lines of text. The text will be ellipsized
                if the description copy overflows the bounding text box area...
              </p>

              <Row gutter={12}>
                <Col span={16}></Col>
                <Col span={8}>
                  <Button
                    onClick={() => handleQuote()}
                    size="large"
                    className={classes.shopButton}
                  >
                    Request a quote
                    <RightOutlined />
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      {/* <div className={classes.section}></div> */}
    </div>
  )
}

export default SupplierProfile
