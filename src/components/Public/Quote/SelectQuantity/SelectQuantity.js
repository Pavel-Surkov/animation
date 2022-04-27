import React from 'react'

import { Col, Row, Space } from 'antd'
import ProgressBar from '../ProgressBar/ProgressBar'

import classes from './SelectQuantity.module.scss'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import InputElement from '../../../../constant/public/Input/InputElement'

const SelectQuantity = ({ setQuoteView }) => {
  return (
    <>
      <div className={classes.getQuoteSection}>
        <h2>Get your Quote</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <ProgressBar width={'40%'} />
            <div className={classes.mainSection}>
              <h3>Select the quantity you are looking to order</h3>
              <InputElement placeholder="e.g. 500 pieces" width={'100%'} />
              <h3>What is your budget for this project?</h3>
              <InputElement placeholder="$ budget amount" width={'100%'} />
            </div>
            <Row>
              <Col span={12}></Col>
              <Col span={12}>
                <div className={classes.actionButtonSection}>
                  <Space size={48}>
                    <button
                      className={classes.actionButton}
                      onClick={() => setQuoteView('projectDescription')}
                    >
                      PREVIOUS
                    </button>
                    <ButtonWithRightArrow
                      content="NEXT"
                      function={() => setQuoteView('launchDate')}
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
export default SelectQuantity
