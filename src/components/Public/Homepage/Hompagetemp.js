import React, { useEffect, useState } from 'react'
import classes from './Hompagetemp.module.scss'

import logo from '../../../assets/svg/logo_black_medium.svg'
import { Link, useHistory } from 'react-router-dom'
import { Row, Col, Button, Space, Carousel } from 'antd'
import Footer from '../common/Footer/Footer'
import Navigation from './Navigation/Navigation'

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
const Hompagetemp = () => {
  const history = useHistory()

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
      {/* {screenSize.dynamicWidth < 500 ? 'mobile' : 'Desktop'} */}

      <Navigation />
      <Carousel autoplay dots={false} effect="fade" pauseOnHover={false}>
        <div>
          <div className={classes.container}>
            <div className={classes.banner}>
              <div>
                <Row>
                  <Col xl={16} md={16} xs={24}>
                    <h2>
                      Find trusted Suppliers in <span>Fashion</span>
                    </h2>
                    <h3>
                      No more manual vetting or endless supplier outreach.
                      Submit your quote and get personalized sourcing support in
                      minutes.
                    </h3>
                    <Space size={12}>
                      <button
                        className={classes.bannerButton}
                        onClick={() => history.push({ pathname: '/quote' })}
                      >
                        Get a Free Quote Now
                      </button>
                    </Space>
                  </Col>
                  <Col xl={8} md={8} xs={24}>
                    <img src={banner1} alt="uplio" />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={classes.container}>
            <div className={classes.banner}>
              <div>
                <Row>
                  <Col xl={16} md={16} xs={24}>
                    <h2>
                      Find trusted Suppliers in <span>Cosmetics</span>
                    </h2>
                    <h3>
                      No more manual vetting or endless supplier outreach.
                      Submit your quote and get personalized sourcing support in
                      minutes.
                    </h3>
                    <Space size={12}>
                      <button
                        className={classes.bannerButton}
                        onClick={() => history.push({ pathname: '/quote' })}
                      >
                        Get a Free Quote Now
                      </button>
                    </Space>
                  </Col>
                  <Col xl={8} md={8} xs={24}>
                    <img src={banner2} alt="Uplio" />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={classes.container}>
            <div className={classes.banner}>
              <div>
                <Row>
                  <Col xl={16} md={16} xs={24}>
                    <h2>
                      Find trusted Suppliers in <span>Furniture</span>
                    </h2>
                    <h3>
                      No more manual vetting or endless supplier outreach.
                      Submit your quote and get personalized sourcing support in
                      minutes.
                    </h3>
                    <Space size={12}>
                      <button
                        className={classes.bannerButton}
                        onClick={() => history.push({ pathname: '/quote' })}
                      >
                        Get a Free Quote Now
                      </button>
                    </Space>
                  </Col>
                  <Col xl={8} md={8} xs={24}>
                    <img src={banner3} alt="Uplio" />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <div className={classes.categoriesCarousel}>
        <Carousel
          autoplay
          dots={false}
          slidesPerRow={screenSize.dynamicWidth < 500 ? 2 : 6}
          draggable={true}
          pauseOnHover={false}
        >
          <div className={classes.categoriesCarouselContent}>
            <h3>Furniture</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Cosmetic</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Fashion</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Apparel</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Candle</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Food & Beverage</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Furniture</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Cosmetic</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Fashion</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Apparel</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Candle</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Food & Beverage</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Furniture</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Cosmetic</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Fashion</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Apparel</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Candle</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Food & Beverage</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Furniture</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Cosmetic</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Fashion</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Apparel</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Candle</h3>
          </div>
          <div className={classes.categoriesCarouselContent}>
            <h3>Food & Beverage</h3>
          </div>
        </Carousel>
      </div>
      <div className={classes.container}>
        <div className={classes.worksSection}>
          <h3>How it works</h3>
          <p>We’re Your Partner From Prototyping to Production and Beyond</p>
          <Row gutter={50}>
            <Col xl={8} md={8} xs={24}>
              <div className={classes.worksSectionContent}>
                <img src={icon3} alt="Uplio" />
                <h3>Request Free Quotes Online</h3>
                <p>
                  Submit a single request for quote and get multiple custom
                  offerings from suppliers that match your requirements.
                </p>
              </div>
            </Col>
            <Col xl={8} md={8} xs={24}>
              <div className={classes.worksSectionContent}>
                <img src={icon1} alt="Uplio" />
                <h3>
                  Get Personalized <br />
                  Support
                </h3>
                <p>
                  We take your requirements and custom tailor the result
                  according to your preferences. No more hassle in finding
                  qualified sourcing partner.
                </p>
              </div>
            </Col>
            <Col xl={8} md={8} xs={24}>
              <div className={classes.worksSectionContent}>
                <img src={icon2} alt="Uplio" />
                <h3>Access trusted domestic manufacturers</h3>
                <p>
                  With access to network of custom manufacturers, we can always
                  find you the perfect match. The Uplio team will handle your
                  order from start to finish.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={classes.categoriesSection}>
        <Row>
          {screenSize.dynamicWidth > 500 ? (
            <>
              {' '}
              <Col span={7}>
                <div className={classes.categoryWrapper}>
                  <h4>Watch</h4>
                  <img src={image_1_1} alt="uplio" />
                </div>
                <div className={classes.categoryWrapperBottom}>
                  <h4>Furniture</h4>
                  <img src={image_1_2} alt="uplio" />
                </div>
              </Col>
              <Col span={10}>
                <div className={classes.categoryWrapperCenter}>
                  <img src={image_2_1} alt="uplio" />
                  <h5>Browse sample of manufacturers</h5>
                </div>
              </Col>
              <Col span={7}>
                <div className={classes.categoryWrapper}>
                  <img src={image_3_1} alt="uplio" />
                  <h4>Cosmetics</h4>
                </div>
                <div className={classes.categoryWrapperBottom}>
                  <h4>Eyewear</h4>
                  <img src={image_3_2} alt="uplio" />
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col span={24}>
                <div className={classes.categoryWrapperCenter}>
                  <img width="380" src={image_2_1} alt="uplio" />
                  <h5>Browse sample of manufacturers</h5>
                </div>
              </Col>
              <Col span={12}>
                <div className={classes.categoryWrapper}>
                  <h4>Watch</h4>
                  <img src={image_1_1} alt="uplio" />
                </div>
                <div className={classes.categoryWrapperBottom}>
                  <h4>Furniture</h4>
                  <img src={image_1_2} alt="uplio" />
                </div>
              </Col>
              <Col span={12}>
                <div className={classes.categoryWrapper}>
                  <img src={image_3_1} alt="uplio" />
                  <h4>Cosmetics</h4>
                </div>
                <div className={classes.categoryWrapperBottom}>
                  <h4>Eyewear</h4>
                  <img src={image_3_2} alt="uplio" />
                </div>
              </Col>
            </>
          )}
        </Row>
      </div>
      <div className={classes.container}>
        <div className={classes.aboutSection}>
          <h6>Why Uplio?</h6>
          <h2>
            Uplio connects brands with local manufacturers in the consumer goods
            industry.
          </h2>
          <p>
            We are building Uplio to make local manufacturing accessible to
            anyone who wants to start their brand.
          </p>
          <div className={classes.aboutSectionContent}>
            <Row gutter={96}>
              <Col xl={8} md={8} xs={24}>
                <img src={icon4} alt="uplio" />
                <p>01</p>
                <h2>Attain your quote within a few clicks</h2>
                <p>
                  We brought the traditional quotation process online to quickly
                  match you with the top five suppliers. Choose the best ones to
                  explore further because You’re in control.
                </p>
              </Col>
              <Col xl={8} md={8} xs={24}>
                <img src={icon5} alt="uplio" />
                <p>02</p>
                <h2>More reliability and transparency</h2>
                <p>
                  We help make the supply chain proccess much easier. Get more
                  transparency into every step of the process from design and
                  discovery to production and delivery.
                </p>
              </Col>
              <Col xl={8} md={8} xs={24}>
                <img src={icon6} alt="uplio" />
                <p>03</p>
                <h2>Own your IP and protect your brand</h2>
                <p>
                  Your designs will remain yours; as it should be. We audit
                  manufactures to ensure that your private labels stay private
                  and secure.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Row>
        <Col xl={14} md={14} xs={24}>
          <img
            src={banner_1}
            alt="uplio"
            className={classes.getQuoteSectionImage}
          />
        </Col>
        <Col xl={10} md={10} xs={24}>
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
export default Hompagetemp
