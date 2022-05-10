import React, { useState } from 'react'

import { Row, Col } from 'antd'

import classes from './GetStarted.module.scss'

import image from '../../../../assets/images/Quote/quote_step_1.svg'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import ProgressBar from '../ProgressBar/ProgressBar'

const GetStarted = ({ setQuoteView }) => {
  return (
    <>
      <div className={classes.sideTitle}>
        <h2>Get your Quote</h2>
        <h4>Get your Quote</h4>
      </div>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <ProgressBar width={'10%'} />
            <div className={classes.mainSection}>
              <Row gutter={[{ xs: 0, sm: 0, md: 68, lg: 68 }, 24]}>
                <Col lg={12} md={12} sm={24} xs={24} align="right">
                  <div className={classes.leftSection}>
                    <img className={classes.img} src={image} alt="Uplio" />
                  </div>
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                  <div className={classes.rightSection}>
                    <h2>
                      Let’s get your dream <br /> project started
                    </h2>
                    <p>Answer a few simple questions</p>
                    <ButtonWithRightArrow
                      function={() => setQuoteView('selectCategory')}
                      content="GET STARTED"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default GetStarted
