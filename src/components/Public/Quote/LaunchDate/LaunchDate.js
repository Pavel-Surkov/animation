import React from 'react'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'

import ProgressBar from '../ProgressBar/ProgressBar'
import { Space, Row, Col, DatePicker } from 'antd'
import classes from './LaunchDate.module.scss'

const LaunchDate = ({ setQuoteView }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <div className={classes.getQuoteSection}>
              <h2>Get your Quote</h2>
            </div>
            <ProgressBar width={'50%'} />
            <div className={classes.mainSection}>
              <h3>When do you want to launch your product line?</h3>
              <DatePicker className={classes.datePicker} />
            </div>
            <Row>
              <Col span={12}></Col>
              <Col span={12}>
                <div className={classes.actionButtonSection}>
                  <Space size={48}>
                    <button
                      className={classes.actionButton}
                      onClick={() => setQuoteView('selectQuantity')}
                    >
                      PREVIOUS
                    </button>
                    <ButtonWithRightArrow
                      content="NEXT"
                      function={() => setQuoteView('uploadDocument')}
                    />
                  </Space>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
export default LaunchDate
