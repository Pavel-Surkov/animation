import React from 'react'

import classes from './Footer.module.scss'

import { Link } from 'react-router-dom'
import logo from '../../../assets/svg/logo_rectangle_black.svg'
import { Row, Col, Space } from 'antd'
import InputElement from '../Input/InputElement'

const Footer = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.footer}>
          <Row>
            <Col span={6}>
              <Link to="/">
                <img src={logo} width={112} height={48} alt="Uplio" />
              </Link>
              <div className={classes.socialMedia}>
                <a
                  href="https://www.instagram.com/uplio_marketplace/"
                  target="_blank"
                >
                  <h3>INSTAGRAM</h3>
                </a>
                <a href="https://twitter.com/Uplio11" target="_blank">
                  <h3>TWITTER</h3>
                </a>
                <a
                  href="https://www.facebook.com/Uplio-103062572308513"
                  target="_blank"
                >
                  <h3>FACEBOOK</h3>
                </a>
              </div>
            </Col>
            <Col span={18}>
              <Row>
                <Col span={5}>
                  <div className={classes.footerLinks}>
                    <Space size={16} direction="vertical">
                      <h4>CATEGORIES</h4>
                      <Link to="/products/fashion">
                        <h3>[FASHION]</h3>
                      </Link>

                      <Link to="/products/Jewelry">
                        <h3>[JEWELRY]</h3>
                      </Link>

                      <Link to="/products/Cosmetics">
                        <h3>[COSMETICS]</h3>
                      </Link>
                    </Space>
                  </div>
                </Col>
                <Col span={5}>
                  <div className={classes.footerLinks}>
                    <Space size={16} direction="vertical">
                      <Link to="/about">
                        <h4>ABOUT US</h4>
                      </Link>
                      <Link to="/">
                        <h4>HOW IT WORKS</h4>
                      </Link>
                      <Link to="/faq">
                        <h4>FAQ</h4>
                      </Link>
                      <Link to="/products/all">
                        <h4>CATEGORIES</h4>
                      </Link>
                    </Space>
                  </div>
                </Col>
                <Col span={5}>
                  <div className={classes.footerLinks}>
                    <Space size={16} direction="vertical">
                      <h4>CONTACT:</h4>
                      <a href="mailto:hello@uplio.com">
                        <h3>hello@uplio.com</h3>
                      </a>
                      <a href="phone:+1 714 604 6709">
                        <h3>+1 714 604 6709</h3>
                      </a>
                    </Space>
                  </div>
                </Col>
                <Col span={9}>
                  <div className={classes.footerLinks}>
                    <h5>SUBSCRIBE TO OUR NEWSLETTER:</h5>
                    <InputElement placeholder="Email" width={'100%'} />
                    <button>SUBSCRIBE</button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className={classes.footerBottom}>
          <Row justify="start">
            <Col span={12}>
              <h3>@2022 Uplio, Inc. All rights reserved</h3>
            </Col>
            <Col span={12} align="right">
              <Space>
                <Link to="/terms-conditions">
                  <h4>TERMS & CONDITIONS</h4>
                </Link>
                <Link to="/privacy-policy">
                  <h4>PRIVACY POLICY</h4>
                </Link>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
export default Footer
