import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './FrequentlyAskedQuestion.module.scss'

import { Row, Col, Divider } from 'antd'

import icon from '../../../assets/svg/crossRounded.svg'
import Header from '../../Public/Homepage/Navigation/Navigation'
import Footer from '../common/Footer/Footer'
import cross from '../../../assets/svg/FAQs Close Icon.svg'
import plus from '../../../assets/svg/FAQs Open.svg'
import BackToTop from '../../common/BackToTop/BackToTop'

const FrequentlyAskedQuestion = () => {
  const [question1, setQuestion1] = useState(false)
  const [question2, setQuestion2] = useState(false)
  const [question3, setQuestion3] = useState(false)
  const [question4, setQuestion4] = useState(false)
  const [question5, setQuestion5] = useState(false)
  const [question6, setQuestion6] = useState(false)
  const [question7, setQuestion7] = useState(false)

  return (
    <>
      <Header />
      <div className={classes.container}>
        <Row>
          <Col lg={12} m={12} xs={24}>
            <div className={classes.mainSectionLeft}>
              <h1>Frequently asked questions</h1>

              <p>
                Do you have another question? <br />
                <span>
                  <a href="mailto:hello@uplio.com" target="_blank">
                    Contact Us
                  </a>
                </span>
              </p>
            </div>
          </Col>
          <Col lg={12} m={12} xs={24}>
            <div className={classes.mainSection}>
              <div className={classes.contentQuestion}>
                <div className={classes.mainSectionRight}>
                  <Row>
                    <Col span={22}>
                      <h2>What is Uplio?</h2>
                    </Col>
                    <Col span={2}>
                      <button onClick={() => setQuestion1(!question1)}>
                        {question1 ? (
                          <img src={cross} alt="uplio" />
                        ) : (
                          <img src={plus} alt="uplio" />
                        )}
                      </button>
                    </Col>
                  </Row>
                </div>
                {question1 ? (
                  <div className={classes.content}>
                    <p>
                      Uplio is a B2B marketplace for the consumer-packaged
                      goods. We connect startup brands with local manufacturers
                      instantly. We solve discovery, pricing, ordering/payment
                      for local manufacturers and their customers.
                    </p>
                  </div>
                ) : null}
                <Divider className={classes.divider} />
              </div>
              <div className={classes.contentQuestion}>
                <div className={classes.mainSectionRight}>
                  <Row>
                    <Col span={22}>
                      <h2>How much does Uplio cost?</h2>
                    </Col>
                    <Col span={2}>
                      <button onClick={() => setQuestion2(!question2)}>
                        {question2 ? (
                          <img src={cross} alt="uplio" />
                        ) : (
                          <img src={plus} alt="uplio" />
                        )}
                      </button>
                    </Col>
                  </Row>
                </div>
                {question2 ? (
                  <div className={classes.content}>
                    <p>
                      Using Uplio platform to request quotes is free. If you
                      accept a quote, that order will be produced by one of our
                      manufacturing partners.
                    </p>
                  </div>
                ) : null}
                <Divider className={classes.divider} />
              </div>
              <div className={classes.contentQuestion}>
                <div className={classes.mainSectionRight}>
                  <Row>
                    <Col span={22}>
                      <h2>
                        How do I get manufacturing quote? How do I see costs and
                        lead times?
                      </h2>
                    </Col>
                    <Col span={2}>
                      <button onClick={() => setQuestion3(!question3)}>
                        {question3 ? (
                          <img src={cross} alt="uplio" />
                        ) : (
                          <img src={plus} alt="uplio" />
                        )}
                      </button>
                    </Col>
                  </Row>
                </div>
                {question3 ? (
                  <div className={classes.content}>
                    <p>
                      Uplio gives you access to factory direct pricing and lead
                      time for your custom products. All you need to do is to
                      submit your requirements to start the matching process. We
                      will contact you in minutes to match you with our trusted
                      local suppliers.
                    </p>
                  </div>
                ) : null}
                <Divider className={classes.divider} />
              </div>
              <div className={classes.contentQuestion}>
                <div className={classes.mainSectionRight}>
                  <Row>
                    <Col span={22}>
                      <h2>What type of products does Uplio offer?</h2>
                    </Col>
                    <Col span={2}>
                      <button onClick={() => setQuestion4(!question4)}>
                        {question4 ? (
                          <img src={cross} alt="uplio" />
                        ) : (
                          <img src={plus} alt="uplio" />
                        )}
                      </button>
                    </Col>
                  </Row>
                </div>
                {question4 ? (
                  <div className={classes.content}>
                    <p>
                      Uplio is an online marketplace for consumer-packaged
                      goods. We support sourcing products from local
                      manufacturers in Apparel, Textile, Home Goods, Furniture,
                      Candles, Cosmetics, Fashion Accessories, and many more.
                    </p>
                  </div>
                ) : null}
                <Divider className={classes.divider} />
              </div>
              <div className={classes.contentQuestion}>
                <div className={classes.mainSectionRight}>
                  <Row>
                    <Col span={22}>
                      <h2>How do I ensure my design is safe?</h2>
                    </Col>
                    <Col span={2}>
                      <button onClick={() => setQuestion5(!question5)}>
                        {question5 ? (
                          <img src={cross} alt="uplio" />
                        ) : (
                          <img src={plus} alt="uplio" />
                        )}
                      </button>
                    </Col>
                  </Row>
                </div>
                {question5 ? (
                  <div className={classes.content}>
                    <p>
                      Uplio keeps your design content secure and private. If
                      needed, we can execute an NDA for customers who require
                      this documentation.
                    </p>
                  </div>
                ) : null}
                <Divider className={classes.divider} />
              </div>
              <div className={classes.contentQuestion}>
                <div className={classes.mainSectionRight}>
                  <Row>
                    <Col span={22}>
                      <h2>
                        I am a manufacturer, how do I join the Uplio Network?
                      </h2>
                    </Col>
                    <Col span={2}>
                      <button onClick={() => setQuestion6(!question6)}>
                        {question6 ? (
                          <img src={cross} alt="uplio" />
                        ) : (
                          <img src={plus} alt="uplio" />
                        )}
                      </button>
                    </Col>
                  </Row>
                </div>
                {question6 ? (
                  <div className={classes.content}>
                    <p>
                      We’re expanding our network of manufacturers and would
                      love to talk to you. Please tell us about your company by
                      contacting us at
                      <a href="mailto:hello@uplio.com" target="_blank">
                        {' '}
                        hello@uplio.com
                      </a>
                      .
                    </p>
                  </div>
                ) : null}
                <Divider className={classes.divider} />
              </div>
              <div className={classes.contentQuestion}>
                <div className={classes.mainSectionRight}>
                  <Row>
                    <Col span={22}>
                      <h2>How do I pay for orders?</h2>
                    </Col>
                    <Col span={2}>
                      <button onClick={() => setQuestion7(!question7)}>
                        {question7 ? (
                          <img src={cross} alt="uplio" />
                        ) : (
                          <img src={plus} alt="uplio" />
                        )}
                      </button>
                    </Col>
                  </Row>
                </div>
                {question7 ? (
                  <div className={classes.content}>
                    <p>
                      On Uplio, you can pay by credit card, debit card, or
                      directly from your bank account! At this time, we are
                      unable to accept other forms of payment (pre-paid cards,
                      checks, etc). Please note that most manufacturing partners
                      require 50% of the order upfront and 50% upon shipping.
                    </p>
                  </div>
                ) : null}
                <Divider className={classes.divider} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <BackToTop />
      <Footer />
    </>
  )
}
export default FrequentlyAskedQuestion
