import React, { useState, useRef } from 'react'
import classes from './Testimonials.module.scss'

import user from '../../../../assets/images/Testimonials/sahil-moosa-m1MRYp556Ew-unsplash 1.png'
import { Col, Row, Space } from 'antd'

import leftArrow from '../../../../assets/png/left_Arrow.png'
import rightArrow from '../../../../assets/png/right_Arrow.png'

import Slider from 'react-slick'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 3,
  arrows: false,
}

const Testimonials = () => {
  const [animateTestimonial, setAnimateTestimonial] = useState(false)
  const [animationActive, setAnimationActive] = useState(false)
  const [leftMargin, setLeftMargin] = useState(0)
  var id = null
  const handleNextTestimonial = () => {
    // setAnimateTestimonial(true)
    setAnimationActive(true)
    handleLeftCard()
    handleRightCard()
  }
  // Animating Testimonials
  const handleLeftCard = () => {
    var pos = 0
    clearInterval(id)
    id = setInterval(frame, 1)

    function frame() {
      if (pos === -6000) {
        clearInterval(id)
        handleLeftCardReverse(pos)
      } else {
        pos = pos - 250
        setLeftMargin(pos)
      }
    }
  }
  const handleLeftCardReverse = (pos) => {
    clearInterval(id)
    id = setInterval(frame, 1)
    function frame() {
      if (pos === 0) {
        clearInterval(id)
        setAnimationActive(false)
      } else {
        pos = pos + 250
        setLeftMargin(pos)
      }
    }
  }
  const sliderRef = useRef()
  const handleRightCard = () => {
    sliderRef.current.slickNext()
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.mainHeading}>
          <h2>WHY CUSTOMERS TRUST US?</h2>
        </div>
        <Row>
          <Col span={18}>
            <div
              style={{ marginLeft: leftMargin }}
              className={
                animateTestimonial
                  ? classes.testimonialLeftCard
                  : classes.testimonialLeftCardActive
              }
            >
              <div className={classes.third}>
                <h3>[SUPPLIERS]</h3>
              </div>
              <Row>
                <Col span={8}>
                  <img src={user} alt="Uplio" />
                </Col>
                <Col span={12}>
                  <div className={classes.userDetails}>
                    <h2>Mark W. </h2>
                    <p>[JEWELRY STORE]</p>
                  </div>
                  <div className={classes.userTestimonial}>
                    <h3>
                      “Now I’m making a real living wage in a job where I feel
                      like I’m actually making an impact.”
                    </h3>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={6}>
            <div className={classes.nextReviews}>
              <Space>
                <button
                  disabled={animationActive}
                  onClick={() => handleNextTestimonial()}
                >
                  <img src={leftArrow} alt="Uplio" />
                </button>
                <button
                  disabled={animationActive}
                  onClick={() => handleNextTestimonial()}
                >
                  <img src={rightArrow} alt="Uplio" />
                </button>
              </Space>
              <h2>NEXT REVIEWS</h2>
              <div className={classes.nextReviews}>
                <div className={classes.nextImages}>
                  <Slider ref={sliderRef} {...settings}>
                    <div>
                      <img width={108} height={108} src={user} alt="Uplio" />
                    </div>
                    <div>
                      <img width={108} height={108} src={user} alt="Uplio" />
                    </div>
                    <div>
                      <img width={108} height={108} src={user} alt="Uplio" />
                    </div>
                    <div>
                      <img width={108} height={108} src={user} alt="Uplio" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Testimonials
