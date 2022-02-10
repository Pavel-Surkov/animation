import React, { useState } from 'react'
import classes from './SupplierProfile.module.scss'
import Scroll from '../../common/Scroll/Scrollproducts'
import profileImage from '../../../assets/images/profile_image.png'
import { Row, Col, Breadcrumb, Button, Space } from 'antd'

import sampleImage1 from '../../../assets/images/sample_upload_1.png'
import sampleImage2 from '../../../assets/images/sample_upload_2.png'
import sampleImage3 from '../../../assets/images/sample_upload_3.png'
import sampleImage4 from '../../../assets/images/sample_upload_4.png'
import image from '../../../assets/images/sample_logo_img.png'
import {
  RightOutlined,
  HeartOutlined,
  MessageOutlined,
  EyeOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import Navigation from '../Homepage/Navigation/Navigation'

const SupplierProfile = () => {
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
      <div className={classes.section}>
        <Scroll />
      </div>
      <div className={classes.container}>
        <div className={classes.companyDetails}>
          <Row gutter={12}>
            <Col span={2}>
              <img src={profileImage} alt="uplio" />
            </Col>
            <Col span={12}>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="">Supplier</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Country</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">City</a>
                </Breadcrumb.Item>
              </Breadcrumb>
              <h3>Company Name</h3>
            </Col>
          </Row>
        </div>

        <div className={classes.section}>
          <Row gutter={12}>
            <Col span={18}>
              <div className={classes.tabNavigation}>
                <button
                  className={overview ? classes.activeTab : null}
                  onClick={() => handleTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={service ? classes.activeTab : null}
                  onClick={() => handleTab('service')}
                >
                  Services
                </button>
              </div>

              {overview ? <Overview /> : null}
              {service ? <Services /> : null}
            </Col>
            <Col span={6}>
              <Space direction="vertical" className={classes.buttonSection}>
                <Button block size="large" className={classes.buttonRequest}>
                  Request a quote <RightOutlined />
                </Button>
                <Button block size="large">
                  <MessageOutlined /> Contact Supplier
                </Button>
                <Button block size="large">
                  <HeartOutlined /> Add to favorites
                </Button>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

const Overview = () => {
  return (
    <>
      <div classes={classes.section}>
        <div className={classes.companyDetailsTab}>
          <h2>
            Senectus donec quisque nibh sapien volutpat et eget volutpat. Vel
            est sit lectus nullam consequat aenean nulla. Neque, elit pharetra
            blandit egestas lectus aliquet. Tincidunt eget id urna, condimentum
            et odio. Cum id eget luctus viverra a commodo sed ullamcorper
            elementum. Eros, nullam amet lacus amet, ut. Egestas ipsum risus
            consequat, aliquam bibendum nulla elementum eleifend purus. Eget est
            non libero gravida. Pharetra in nibh nulla gravida nunc leo.
          </h2>
        </div>
        <Row>
          <Col span={4}>
            <div className={classes.companyDetailsTab}>
              <p>Production capacity</p>
              <h3>1-5,000 units/mo</h3>
            </div>
          </Col>
          <Col span={4}>
            <div className={classes.companyDetailsTab}>
              <p>Production capacity</p>
              <h3>1-5,000 units/mo</h3>
            </div>
          </Col>
          <Col span={4}>
            <div className={classes.companyDetailsTab}>
              <p>Estimated lead time</p>
              <h3>4-5 weeks</h3>
            </div>
          </Col>
          <Col span={4}>
            <div className={classes.companyDetailsTab}>
              <p>Established</p>
              <h3>1988</h3>
            </div>
          </Col>
        </Row>
        <hr />
        <div className={classes.companyDetailsFooter}>
          <h5>Specialization</h5>
        </div>
        <Row>
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
        </Row>
        <div className={classes.section}></div>
      </div>
    </>
  )
}

const Services = () => {
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
                  <Button size="large" className={classes.shopButton}>
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
