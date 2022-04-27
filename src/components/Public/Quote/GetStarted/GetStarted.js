import React from 'react'

import { Row, Col } from 'antd'

import classes from './GetStarted.module.scss'

import image from '../../../../assets/images/Quote/quote_step_1.svg'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import ProgressBar from '../ProgressBar/ProgressBar'

const GetStarted = ({ setQuoteView }) => {
  return (
    <>
      <div className={classes.getQuoteSection}>
        <h2>Get your Quote</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <ProgressBar width={'10%'} />
            <div className={classes.mainSection}>
              <Row gutter={68}>
                <Col span={12} align="right">
                  <div className={classes.leftSection}>
                    <img src={image} alt="Uplio" />
                  </div>
                </Col>
                <Col span={12}>
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
