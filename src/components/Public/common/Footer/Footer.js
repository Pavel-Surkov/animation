import React from 'react'
import { Row, Col, Divider } from 'antd'
import logo from '../../../../assets/svg/logo_white.svg'
import classes from './Footer.module.scss'

const Footer = () => (
  <>
    <div className={classes.footer}>
      <div className={classes.container}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" md={12} sm={24} xs={24}>
            <img src={logo} alt="Uplio" />
            <h2>
              Uplio is an online sourcing marketplace <br /> that connects
              brands directly to local manufacturers.
            </h2>
          </Col>
          <Col className="gutter-row" md={4} sm={24} xs={24}>
            <div className={classes.footerTitle}>
              <h2>Contact</h2>
              <a href="/">
                <h3>About Us</h3>
              </a>
              <a href="/">
                <h3>Newsroom</h3>
              </a>
              <a href="/">
                <h3>Careers</h3>
              </a>
            </div>
          </Col>
          <Col className="gutter-row" md={4} sm={24} xs={24}>
            <div className={classes.footerTitle}>
              <h2>Support</h2>
              <a href="/">
                <h3>Help Center</h3>
              </a>
              <a href="/">
                <h3>Apply as Supplier</h3>
              </a>
              <a href="/">
                <h3>Become a Brand</h3>
              </a>
            </div>
          </Col>
          <Col className="gutter-row" md={4} sm={24} xs={24}>
            <div className={classes.footerTitle}>
              <h2>Contact</h2>
              <a href="/">
                <h3>Blog</h3>
              </a>
              <a href="tel:714-316-3163" target="_blank">
                <h3>Instagram</h3>
              </a>
              <a href="mailto:asal@uplio.com" target="_blank">
                <h3>Twitter</h3>
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.container}>
        <Row>
          <Col className="gutter-row" md={3} sm={24} xs={24}>
            <h3>@2022 Uplio Inc.</h3>
          </Col>
          <Col className="gutter-row" md={1} sm={24} xs={24}>
            <Divider type="vertical" className={classes.dividerVertical} />
          </Col>
          <Col className="gutter-row" md={3} sm={24} xs={24}>
            <h3>Terms of Service</h3>
          </Col>
          <Col className="gutter-row" md={1} sm={24} xs={24}>
            <Divider type="vertical" className={classes.dividerVertical} />
          </Col>
          <Col className="gutter-row" md={3} sm={24} xs={24}>
            <h3>Privacy Policy</h3>
          </Col>
          <Col className="gutter-row" md={1} sm={24} xs={24}>
            <Divider type="vertical" className={classes.dividerVertical} />
          </Col>
          <Col className="gutter-row" md={3} sm={24} xs={24}>
            <h3>Cookie Policy</h3>
          </Col>
          <Col className="gutter-row" md={1} sm={24} xs={24}>
            <Divider type="vertical" className={classes.dividerVertical} />
          </Col>
          <Col className="gutter-row" md={3} sm={24} xs={24}>
            <h3>IP Policy</h3>
          </Col>
          <Col className="gutter-row" md={1} sm={24} xs={24}>
            <Divider type="vertical" className={classes.dividerVertical} />
          </Col>
          <Col className="gutter-row" md={3} sm={24} xs={24}>
            <h3>Sitemap</h3>
          </Col>
        </Row>
      </div>
    </div>
  </>
)

export default Footer
