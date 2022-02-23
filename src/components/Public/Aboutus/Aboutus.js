import React from 'react'

import logo from '../../../assets/svg/logo_black_medium.svg'
import { Link, useHistory } from 'react-router-dom'
import { Row, Col, Button, Space, Carousel } from 'antd'

import icon1 from '../../../assets/images/icon_section_1.png'
import icon2 from '../../../assets/images/icon_section_2.png'
import icon3 from '../../../assets/images/icon_section_3.png'

import banner1 from '../../../assets/images/banner image 1.png'
import banner2 from '../../../assets/png/banner_image_2.png'
import banner3 from '../../../assets/images/Banner Image 3.png'

import image_1_1 from '../../../assets/images/category_1_1.png'
import image_1_2 from '../../../assets/images/category_1_2.png'
import image_2_1 from '../../../assets/images/category_2_1.png'
import image_3_1 from '../../../assets/images/category_3_1.png'
import image_3_2 from '../../../assets/images/category_3_2.png'

import icon4 from '../../../assets/images/Group 82.png'
import icon5 from '../../../assets/images/Group 83.png'
import icon6 from '../../../assets/images/Group 84.png'

import banner_1 from '../../../assets/images/main_banner.png'
import Navigation from '../Homepage/Navigation/Navigation'
import Footer from '../common/Footer/Footer'

import classes from './Aboutus.module.scss'

const Aboutus = () => {
  const history = useHistory()
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.aboutSection}>
          <h6>About Us</h6>
          <h2>
            <span>At Uplio</span>, we’re empowering entrepreneurs to access
            local manufacturers easier, faster, and cheaper.
          </h2>
        </div>
      </div>
      <Row>
        <Col span={14} xs={24}>
          <img src={banner_1} className={classes.quoteSectionImg} alt="uplio" />
        </Col>
        <Col span={10} xs={24}>
          <div className={classes.quoteSection}>
            <h3>Ready to bring your vision to life</h3>
            <p>
              Start tapping into a network of trusted local manufacturers who
              can launch your product line responsibly.
            </p>
            <button onClick={() => history.push({ pathname: '/quote' })}>
              Get a Free Quote now
            </button>
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default Aboutus
