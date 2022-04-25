import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Space, Row, Col } from 'antd'
import HeroBanner from './HeroBanner/HeroBanner'
import Navigation from './../../../constant/public/Navigation/Navigation'
import InputElement from '../../../constant/public/Input/InputElement'
import Footer from '../../../constant/public/Footer/Footer'

import classes from './Homepage.module.scss'
import arrowRight from '../../../assets/svg/Arrow_Right.svg'
import arrowDown from '../../../assets/svg/Arrow_Down.svg'
import arrowPoint from '../../../assets/svg/Arrow_Pointer.svg'

import apparel from '../../../assets/png/apparel.png'
import cosmetics from '../../../assets/png/cosmetic.png'
import jwellery from '../../../assets/png/jwellery.png'
import furniture from '../../../assets/png/furniture.png'
import textile from '../../../assets/png/textile.png'
import chair from '../../../assets/png/chair.png'
import cream from '../../../assets/png/cream.png'
import contact from '../../../assets/png/contact.png'

import image_1 from '../../../assets/png/50Text.png'
import image_2 from '../../../assets/svg/TIME.svg'

import ButtonWithRightArrow from '../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import Testimonials from './Testimonials /Testimonials'

const Homepage = () => {
  const [question1, setQuestion1] = useState(false)
  const [question2, setQuestion2] = useState(false)
  const [question3, setQuestion3] = useState(false)
  const [question4, setQuestion4] = useState(false)
  const [question5, setQuestion5] = useState(false)
  const [question6, setQuestion6] = useState(false)
  const [question7, setQuestion7] = useState(false)
  return (
    <>
      <Navigation />
      <HeroBanner />
      <div className={classes.container}>
        <div className={classes.section}>
          <div
            style={{ marginBottom: '256px' }}
            className={classes.categorySection}
          >
            <h3 style={{ marginTop: '200px' }}>
              Explore top trending <br /> categories on UPLIO
            </h3>
            <Row gutter={[24, 24]}>
              <Col span={8}>
                <Link to="/products/Apparel">
                  <div className={classes.categories}>
                    <img
                      className={classes.categoryBackgroundImg}
                      src={apparel}
                      alt="uplio"
                    />
                    <h4>[APPAREL]</h4>

                    <p>
                      EXPLORE NOW <img src={arrowRight} alt="Uplio" />
                    </p>
                  </div>
                </Link>
              </Col>

              <Col span={8}>
                <Link to="/products/Cosmetics">
                  <div className={classes.categories}>
                    <img
                      className={classes.categoryBackgroundImg}
                      src={cosmetics}
                      alt="uplio"
                    />
                    <h4>[COSMETICS]</h4>

                    <p>
                      EXPLORE NOW <img src={arrowRight} alt="Uplio" />
                    </p>
                  </div>
                </Link>
              </Col>

              <Col span={8}>
                <Link to="/products/Jewelry">
                  <div className={classes.categories}>
                    <img
                      className={classes.categoryBackgroundImg}
                      src={jwellery}
                      alt="uplio"
                    />
                    <h4>[JEWELRY]</h4>

                    <p>
                      EXPLORE NOW <img src={arrowRight} alt="Uplio" />
                    </p>
                  </div>
                </Link>
              </Col>

              <Col span={8}>
                <div className={classes.categoriesText}>
                  <h2>
                    Can’t find the <br />
                    category you are <br />
                    looking for?
                  </h2>
                  <h5>
                    Contact us and we will find you
                    <br /> suppliers within our network.
                  </h5>
                  <ButtonWithRightArrow content="SEE MORE" />
                </div>
              </Col>

              <Col span={8}>
                <Link to="/products/All">
                  <div className={classes.categories}>
                    <img
                      className={classes.categoryBackgroundImg}
                      src={furniture}
                      alt="uplio"
                    />
                    <h4>[FURNITURE]</h4>

                    <p>
                      EXPLORE NOW <img src={arrowRight} alt="Uplio" />
                    </p>
                  </div>
                </Link>
              </Col>

              <Col span={8}>
                <Link to="/products/Textile">
                  <div className={classes.categories}>
                    <img
                      className={classes.categoryBackgroundImg}
                      src={textile}
                      alt="uplio"
                    />
                    <h4>[TEXTILE]</h4>

                    <p>
                      EXPLORE NOW <img src={arrowRight} alt="Uplio" />
                    </p>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className={classes.boxOverlay}>
        <Row gutter={[0, 68]}>
          <Col span={13}>
            <div className={classes.saveTimeBanner}>
              <img src={image_1} alt="Uplio" />
            </div>
          </Col>
          <Col span={13} offset={11}>
            <div className={classes.timeBanner}>
              <img src={image_2} alt="Uplio" />
            </div>
          </Col>
        </Row>
      </div>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.howItWorksSection}>
            <h2>HOW IT WORKS?</h2>

            <Row align="center">
              <Col span={6}>
                <div className={classes.cardHeading}>
                  <h4>[FOR SUPPLIERS] </h4>
                </div>
              </Col>
              <Col span={6} offset={12}>
                <div className={classes.cardHeading}>
                  <h4>[FOR Creators]</h4>
                </div>
              </Col>
            </Row>

            <div className={classes.stepOne}>
              <Row align="center">
                <Col span={6}>
                  <div className={classes.cardHeading}>
                    <Row>
                      <Col span={5}>
                        <div className={classes.numberCard}>
                          <span>1.</span>
                        </div>
                      </Col>
                      <Col span={19}>
                        <h3>Access Qualified Leads </h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <h2>
                          Join us to access a network <br />
                          of qualified leads that fit <br />
                          your capabilities
                        </h2>
                      </Col>
                      <Col span={1}>
                        <img src={arrowDown} alt="Uplio" />
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col span={6} offset={12}>
                  <div className={classes.cardHeading}>
                    <Row>
                      <Col span={5}>
                        <div className={classes.numberCard}>
                          <span>1.</span>
                        </div>
                      </Col>
                      <Col span={19}>
                        <h3>Submit Requirements </h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <h2>
                          Send your request to all <br />
                          relevant suppliers in one <br />
                          click
                        </h2>
                      </Col>
                      <Col span={1}>
                        <img src={arrowDown} alt="Uplio" />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={classes.stepTwo}>
              <Row align="center">
                <Col span={6}>
                  <div className={classes.cardHeading}>
                    <Row>
                      <Col span={5}>
                        <div className={classes.numberCard}>
                          <span>2.</span>
                        </div>
                      </Col>
                      <Col span={19}>
                        <h3>Provide Quotes</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <h2>
                          Quote to more opportunities <br />
                          faster and message <br />
                          with customers
                        </h2>
                      </Col>
                      <Col span={1}>
                        <img src={arrowDown} alt="Uplio" />
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col span={6} offset={12}>
                  <div className={classes.cardHeading}>
                    <Row>
                      <Col span={5}>
                        <div className={classes.numberCard}>
                          <span>2.</span>
                        </div>
                      </Col>
                      <Col span={19}>
                        <h3>Get Multiple Quotes </h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <h2>
                          Compare quotes and choose <br />
                          the best supplier that fit your
                          <br />
                          requirements
                        </h2>
                      </Col>
                      <Col span={1}>
                        <img src={arrowDown} alt="Uplio" />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={classes.stepThree}>
              <Row align="center">
                <Col span={6}>
                  <div className={classes.cardHeading}>
                    <Row>
                      <Col span={5}>
                        <div className={classes.numberCard}>
                          <span>3.</span>
                        </div>
                      </Col>
                      <Col span={19}>
                        <h3>
                          Accept <br />
                          Orders
                        </h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <h2>
                          Receive orders and get
                          <br />
                          paid on time
                        </h2>
                      </Col>
                      <Col span={1}>
                        <img src={arrowDown} alt="Uplio" />
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col span={6} offset={12}>
                  <div className={classes.cardHeading}>
                    <Row>
                      <Col span={5}>
                        <div className={classes.numberCard}>
                          <span>3.</span>
                        </div>
                      </Col>
                      <Col span={19}>
                        <h3>
                          Order
                          <br /> Samples
                        </h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <h2>
                          Place a sample, track your <br />
                          order and your supplier <br />
                          communications in one place
                        </h2>
                      </Col>
                      <Col span={1}>
                        <img src={arrowDown} alt="Uplio" />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={classes.stepFour}>
              <Row align="center">
                <Col span={6}>
                  <div className={classes.cardHeading}>
                    <Row>
                      <Col span={5}>
                        <div className={classes.numberCard}>
                          <span>4.</span>
                        </div>
                      </Col>
                      <Col span={19}>
                        <h3>DONE!</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <h2>It’s that simple!</h2>
                      </Col>
                      <Col span={1}>
                        <img src={arrowDown} alt="Uplio" />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={classes.actionButton}>
              <Space size={24}>
                <h2>
                  Tired of complicated
                  <br /> processes?
                </h2>
                <ButtonWithRightArrow content="MAKE IT EASY" />
              </Space>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.about}>
            <h2>WHY UPLIO?</h2>
            <Row gutter={24}>
              <Col span={12}>
                <Row gutter={[24, 24]}>
                  <Col span={12}>
                    <div className={classes.card}>
                      <h3>
                        <img src={arrowPoint} alt="uplio" />
                        Fast response
                      </h3>
                      <h3>
                        <img src={arrowPoint} alt="uplio" />
                        Transparent Pricing
                      </h3>
                      <h3>
                        <img src={arrowPoint} alt="uplio" />
                        Trusted Experience
                      </h3>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className={classes.cardImage}>
                      <img src={chair} alt="uplio" />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className={classes.cardImage}>
                      <img src={cream} alt="uplio" />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className={classes.cardWithMessage}>
                      <h2>Want to achieve success? </h2>
                      <p>
                        Join us and find the best suppliers
                        <br />
                        in your category.
                      </p>
                      <ButtonWithRightArrow content="SIGN UP" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <p>
                  Whether you are starting your business, launching a new
                  product
                  <br />
                  line, or looking for sustainable and ethical sourcing, Uplio
                  helps
                  <br /> you connect with and source products from vetted and
                  hand-
                  <br />
                  picked suppliers who can bring your vision to life.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.faqSection}>
          <div className={classes.container}>
            <h2>FAQ</h2>
            <p>[PRODUCT INFORMATION]</p>
            <div className={classes.faq}>
              <button onClick={() => setQuestion1(!question1)}>
                <h3>
                  What is Uplio? <span>{!question1 ? '+' : 'x'}</span>
                </h3>
              </button>

              {question1 ? (
                <p>
                  Uplio is a B2B marketplace for the consumer-packaged goods. We
                  connect startup brands with local manufacturers instantly. We
                  solve discovery, pricing, ordering/payment for local
                  manufacturers and their customers.
                </p>
              ) : null}
            </div>
            <div className={classes.faq}>
              <button onClick={() => setQuestion2(!question2)}>
                <h3>
                  How much does Uplio cost?{' '}
                  <span>{!question2 ? '+' : 'x'}</span>
                </h3>
              </button>

              {question2 ? (
                <p>
                  Using Uplio platform to request quotes is free. If you accept
                  a quote, that order will be produced by one of our
                  manufacturing partners.
                </p>
              ) : null}
            </div>
            <div className={classes.faq}>
              <button onClick={() => setQuestion3(!question3)}>
                <h3>
                  How do I get manufacturing quote? How do I see costs and lead
                  times? <span>{!question3 ? '+' : 'x'}</span>
                </h3>
              </button>

              {question3 ? (
                <p>
                  Uplio gives you access to factory direct pricing and lead time
                  for your custom products. All you need to do is to submit your
                  requirements to start the matching process. We will contact
                  you in minutes to match you with our trusted local suppliers.
                </p>
              ) : null}
            </div>
            <div className={classes.faq}>
              <button onClick={() => setQuestion4(!question4)}>
                <h3>
                  What type of products does Uplio offer?{' '}
                  <span>{!question4 ? '+' : 'x'}</span>
                </h3>
              </button>
              {question4 ? (
                <p>
                  Uplio is an online marketplace for consumer-packaged goods. We
                  support sourcing products from local manufacturers in Apparel,
                  Textile, Home Goods, Furniture, Candles, Cosmetics, Fashion
                  Accessories, and many more.
                </p>
              ) : null}
            </div>
            <div className={classes.faq}>
              <button onClick={() => setQuestion5(!question5)}>
                <h3>
                  How do I ensure my design is safe?
                  <span>{!question5 ? '+' : 'x'}</span>
                </h3>
              </button>

              {question5 ? (
                <p>
                  Uplio keeps your design content secure and private. If needed,
                  we can execute an NDA for customers who require this
                  documentation.
                </p>
              ) : null}
            </div>
            <div className={classes.faq}>
              <button onClick={() => setQuestion6(!question6)}>
                <h3>
                  I am a manufacturer, how do I join the Uplio Network?
                  <span>{!question6 ? '+' : 'x'}</span>
                </h3>
              </button>
              {question6 ? (
                <p>
                  We’re expanding our network of manufacturers and would love to
                  talk to you. Please tell us about your company by contacting
                  us at <a href="mailto:hello@uplio.com">hello@uplio.com</a>.
                </p>
              ) : null}
            </div>
            <div className={classes.faq}>
              <button onClick={() => setQuestion7(!question7)}>
                <h3>
                  How do I pay for orders?
                  <span>{!question7 ? '+' : 'x'}</span>
                </h3>
              </button>

              {question7 ? (
                <p>
                  On Uplio, you can pay by credit card, debit card, or directly
                  from your bank account! At this time, we are unable to accept
                  other forms of payment (pre-paid cards, checks, etc). Please
                  note that most manufacturing partners require 50% of the order
                  upfront and 50% upon shipping.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.contact}>
            <h2>STAY IN TOUCH</h2>
            <p>
              Contact us and we will answer
              <br /> any questions you have.
            </p>
            <div className={classes.inputSection}>
              <Row gutter={[16, 32]}>
                <Col span={12}>
                  {/* <InputElement placeholder="Search" /> */}
                  <input className={classes.inputDark} placeholder="Name" />
                </Col>
                <Col span={12}>
                  {/* <input className={classes.inputDark} placeholder="Name" /> */}
                  <input className={classes.inputDark} placeholder="Email" />
                </Col>
                <Col span={24}>
                  {/* <InputElement placeholder="Search" /> */}
                  <input className={classes.inputDark} placeholder="Question" />
                </Col>
                <Col span={13}></Col>
                <Col span={11}>
                  <ButtonWithRightArrow content="SEND" />
                </Col>
              </Row>
            </div>
            <img
              style={{ marginTop: '-615px', marginLeft: '610px' }}
              src={contact}
              alt="uplio"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Homepage
