import React from 'react'
import classes from './HeroBanner.module.scss'
import { Row, Col } from 'antd'

import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import { useHistory } from 'react-router-dom'

import image from '../../../../assets/images/HeroBanner/Group 65.png'

const HeroBanner = (props) => {
  const history = useHistory()
  return (
    <>
      <div className={classes.container}>
        <div className={classes.banner}>
          <Row>
            <Col span={13}>
              <div className={classes.bannerRight}>
                <h1>
                  Convert <br />
                  your dream <br />
                  into a product
                </h1>
                <p>Find a trusted supplier</p>
                <ButtonWithRightArrow
                  content="GET A QUOTE"
                  function={() =>
                    history.push({ pathname: '/quote/generic_quote' })
                  }
                />
              </div>
            </Col>
            <Col span={11}>
              <div className={classes.bannerLeft}>
                <img src={image} alt="uplio" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
export default HeroBanner
