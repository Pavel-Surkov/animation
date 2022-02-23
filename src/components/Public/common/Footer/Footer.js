import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col, Divider, Space } from 'antd'
import logo from '../../../../assets/svg/logo_red_medium.svg'
import facebookIcon from '../../../../assets/svg/facebook_icon.svg'
import instagramIcon from '../../../../assets/svg/instagramIcon.svg'
import twitterIcon from '../../../../assets/svg/twitterIcon.svg'
import classes from './Footer.module.scss'

const Footer = () => {
  const [value, setValue] = useState('')

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  })
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension)

    return () => {
      window.removeEventListener('resize', setDimension)
    }
  }, [screenSize])

  return (
    <>
      <div className={classes.footer}>
        <div className={classes.container}>
          <Link to="/">
            <img src={logo} alt="Uplio" />
          </Link>
          {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
                <Link to="/about">
                  <h3>About Us</h3>
                </Link>
                <Link to="/newsroom">
                  <h3>Newsroom</h3>
                </Link>
                <Link to="/careers">
                  <h3>Careers</h3>
                </Link>
              </div>
            </Col>
            <Col className="gutter-row" md={4} sm={24} xs={24}>
              <div className={classes.footerTitle}>
                <h2>Support</h2>
                <Link to="/help-center">
                  <h3>Help Center</h3>
                </Link>
                <Link to="/">
                  <h3>Apply as Supplier</h3>
                </Link>
                <Link href="/">
                  <h3>Become a Brand</h3>
                </Link>
              </div>
            </Col>
            <Col className="gutter-row" md={4} sm={24} xs={24}>
              <div className={classes.footerTitle}>
                <h2>Contact</h2>
                <Link href="/contact">
                  <h3>Blog</h3>
                </Link>
                <Link
                  href="https://www.instagram.com/uplio_marketplace/"
                  target="_blank"
                >
                  <h3>Instagram</h3>
                </Link>
                <Link href="https://twitter.com/Uplio11" target="_blank">
                  <h3>Twitter</h3>
                </Link>
              </div>
            </Col>
          </Row> */}
          <Divider className={classes.divider} />
          <Row>
            <Col className="gutter-row" md={8} sm={24} xs={24}>
              <div className={classes.footerContentLeft}>
                <Space size={65}>
                  <Link to="/">
                    <h3>Home</h3>
                  </Link>
                  <Link to="/about">
                    <h3>About Us</h3>
                  </Link>
                </Space>
              </div>
              <div className={classes.footerBottomContentLeft}>
                <h3>@2022 Uplio, Inc. All rights reserved</h3>
              </div>
            </Col>
            <Col className="gutter-row" md={8} sm={24} xs={24}>
              <div className={classes.footerContentCenter}>
                <Space size={76}>
                  <a
                    href="https://www.facebook.com/Uplio-103062572308513"
                    target="_blank"
                  >
                    <img src={facebookIcon} alt="Uplio" />
                  </a>
                  <a href="https://twitter.com/Uplio11" target="_blank">
                    <img src={twitterIcon} alt="Uplio" />
                  </a>
                  <a
                    href="https://www.instagram.com/uplio_marketplace/"
                    target="_blank"
                  >
                    <img src={instagramIcon} alt="Uplio" />
                  </a>
                </Space>
              </div>
            </Col>
            <Col className="gutter-row" md={8} sm={24} xs={24}>
              <div className={classes.footerContentRight}>
                <Space size={65}>
                  <Link to="/privacy-policy">
                    <h3>Privacy Policy</h3>
                  </Link>
                  <Link to="/faq">
                    <h3>FAQs</h3>
                  </Link>
                </Space>
              </div>
              <div className={classes.footerBottomContentRight}>
                <Space size={29}>
                  <a href="mailto:hello@uplio.com" target="_blank">
                    <h3>hello@uplio.com</h3>
                  </a>
                  <a href="tel:+1 835 254 8456" target="_blank">
                    <h3>+1 835 254 8456</h3>
                  </a>
                </Space>
              </div>
            </Col>

            {/* <Col className="gutter-row" md={1} sm={24} xs={24}>
              <Divider
                type={screenSize.dynamicWidth < 500 ? 'horizontal' : 'vertical'}
                className={classes.dividerVertical}
              />
            </Col> */}
          </Row>
        </div>
      </div>
    </>
  )
}

export default Footer
