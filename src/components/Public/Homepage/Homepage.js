import React from 'react'
import { Row, Col, Button } from 'antd'

import { Link } from 'react-router-dom'

import Footer from '../common/Footer/Footer'
import Carouselsection from './Carouselsection/Carouselsection'
import Scrollproducts from './Scrollproducts/Scrollproducts'
import Email from './Email/Email'
import Tab from './Tabs/Tabs'
import Navigation from './Navigation/Navigation'

import classes from './Homepage.module.scss'
import mouse_icon from '../../../assets/svg/mouse.svg'
import connect_icon from '../../../assets/svg/connect.svg'
import code_icon from '../../../assets/svg/code.svg'
import eye_icon from '../../../assets/svg/eye.svg'
import shield_icon from '../../../assets/svg/shield_icon.svg'
import factory_icon from '../../../assets/svg/factory.svg'

import data from './Tabs/Data'

const Homepage = () => {
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.banner}>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            align="middle"
            justify="space-around"
            className={classes.bannerSection}
          >
            <Col className="gutter-row" md={16} sm={24} xs={24}>
              <div>
                <Tab data={data} />
              </div>
            </Col>
            <Col className="gutter-row" md={8} sm={0} xs={0}>
              <div>
                <Carouselsection />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.container}>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            justify="space-around"
            className={classes.keyFeature}
          >
            <Col className="gutter-row" md={8} sm={24} xs={24}>
              <h2>Access approved local suppliers</h2>
              <p>
                Work directly with our network of reliable suppliers who have a
                track record of delivering quality on-time.
              </p>
            </Col>
            <Col className="gutter-row" md={8} sm={24} xs={24}>
              <h2>Flawlesly source unique products</h2>
              <p>
                Source quality custom products to standout on websites like
                Amazon and avoid the generic products on Alibaba.
              </p>
            </Col>
            <Col className="gutter-row" md={8} sm={24} xs={24}>
              <h2>Net 90 terms with all suppliers</h2>
              <p>Order custom products for your brand and pay 90 days later.</p>
            </Col>
          </Row>
        </div>
      </div>
      {/* <Scrollproducts /> */}
      <div className={classes.container}>
        <div className={classes.aboutSection}>
          <h1>Why Uplio?</h1>
          <h3>
            More reliable, more cost-effective,
            <br /> and more sustainable.
          </h3>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className={classes.keyFeature}
          >
            <Col className="gutter-row" md={12} sm={24} xs={24}>
              <div className={classes.content}>
                <Row>
                  <Col span={2}>
                    <img src={mouse_icon} alt="uplio" />
                  </Col>
                  <Col span={20}>
                    <h2>Attain your quote within a few clicks</h2>
                    <p>
                      We brought the traditional quotation process online to
                      quickly match you with the top five suppliers. Choose the
                      best ones to explore further because You’re in control.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" md={12} sm={24} xs={24}>
              <div className={classes.content}>
                <Row>
                  <Col span={2}>
                    <img src={connect_icon} alt="uplio" />
                  </Col>
                  <Col span={20}>
                    <h2>Direct pricing from factories near you</h2>
                    <p>
                      Expand your network and reach suppliers near you. Drive
                      your lead time down and increase your quality by tapping
                      into local USA made products.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" md={12} sm={24} xs={24}>
              <div className={classes.content}>
                <Row>
                  <Col span={2}>
                    <img src={code_icon} alt="uplio" />
                  </Col>
                  <Col span={20}>
                    <h2>AI backed matching algorithm</h2>
                    <p>
                      We take your requirements and custom tailor the result
                      according to your preferences. No more hassle in finding
                      qualified prospects or leads.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" md={12} sm={24} xs={24}>
              <div className={classes.content}>
                <Row>
                  <Col span={2}>
                    <img src={eye_icon} alt="uplio" />
                  </Col>
                  <Col span={20}>
                    <h2>More reliability and transparency</h2>
                    <p>
                      We help make the supply chain proccess much easier. Get
                      more transparency into every step of the process from
                      design and discovery to production and delivery.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" md={12} sm={24} xs={24}>
              <div className={classes.content}>
                <Row>
                  <Col span={2}>
                    <img src={shield_icon} alt="uplio" />
                  </Col>
                  <Col span={20}>
                    <h2>Own your IP and protect your brand</h2>
                    <p>
                      Your designs will remain yours; as it should be. We audit
                      manufactures to ensure that your private labels stay
                      private and secure.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" md={12} sm={24} xs={24}>
              <div className={classes.content}>
                <Row>
                  <Col span={2}>
                    <img src={factory_icon} alt="uplio" />
                  </Col>
                  <Col span={20}>
                    <h2>Reduce your footprint</h2>
                    <p>
                      Choose sustainable materials, suppliers and products
                      without contributing to carbon emission. We help you.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={classes.aboutUs}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col md={10} sm={24} xs={24}>
                <h2>
                  We believe the future of <br /> commerce is direct and simple:
                </h2>
                <p>
                  Local manufacturers and businesses working together without
                  the intermediaries.
                </p>
              </Col>
              <Col md={14} sm={24} xs={24}>
                <p>
                  Our mission is to empower manufacturers with robust technology
                  that will scale with them. The goal is to allow them to break
                  free of the hassels they face today so that they can thrive
                  and solve the most difficult challenges of tomorrow. In doing
                  so, we will make it easier on business of all sizes to partner
                  and grow, hand in hand, with manufacturers.
                </p>
                <Link to="/about">About us</Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className={classes.heroBanner}>
        <h3>Ready to bring your vision to life?</h3>
        <div className={classes.heroBannerContent}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col md={12} sm={24} xs={24}>
              <div className={classes.aboutUsSection}>
                <h4>Buyers</h4>
                <hr />
                <p>
                  Start building your dream
                  <br /> products now.
                </p>
              </div>
              <Button
                size="large"
                className={classes.actionButton}
                type="primary"
              >
                Begin Here
              </Button>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <div className={classes.aboutUsSection}>
                <h4>Suppliers</h4>
                <hr />
                <p>
                  Get connected to more
                  <br /> qualified leads now.
                </p>
              </div>
              <Button
                size="large"
                className={classes.actionButton}
                type="primary"
              >
                Begin Here
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <Email />

      <Footer />
    </>
  )
}
export default Homepage
