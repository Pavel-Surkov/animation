import React, { useState } from 'react'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import moment from 'moment'
import ProgressBar from '../ProgressBar/ProgressBar'
import { Space, Row, Col, DatePicker } from 'antd'
import classes from './LaunchDate.module.scss'

const LaunchDate = (props) => {
  const [disable, setDisable] = useState(true)
  const dateFormat = 'MM/DD/YYYY'
  const handleDateStartDate = (date, dateString) => {
    setDisable(false)
    props.setLaunchDate(dateString)
  }

  return (
    <>
      <div className={classes.getQuoteSection}>
        <h2>Get your Quote</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <ProgressBar width={'50%'} />
            <div className={classes.mainSection}>
              <h3>When do you want to launch your product line?</h3>
              <DatePicker
                format={dateFormat}
                disabledDate={(current) => {
                  let customDate = moment().format('YYYY-MM-DD')
                  return current && current < moment(customDate, 'YYYY-MM-DD')
                }}
                onChange={handleDateStartDate}
                className={classes.datePicker}
              />
            </div>
            <Row>
              <Col span={12}></Col>
              <Col span={12}>
                <div className={classes.actionButtonSection}>
                  <Space size={48}>
                    <button
                      className={classes.actionButton}
                      onClick={() => props.setQuoteView('selectQuantity')}
                    >
                      PREVIOUS
                    </button>
                    <ButtonWithRightArrow
                      disabled={disable}
                      content="NEXT"
                      function={() => props.setQuoteView('uploadDocument')}
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
