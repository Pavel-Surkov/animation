import React, { useEffect, useState } from 'react'

import { Col, Row, Space } from 'antd'
import ProgressBar from '../ProgressBar/ProgressBar'

import classes from './SelectQuantity.module.scss'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import InputElement from '../../../../constant/public/Input/InputElement'

const SelectQuantity = (props) => {
  const [disable, setDisable] = useState(true)

  useEffect(() => {
    if (
      props.Formik.values.quantity !== '' &&
      props.Formik.values.budget !== ''
    ) {
      setDisable(false)
    }
  }, [props])

  return (
    <>
      <div className={classes.sideTitle}>
        <h2>Get your Quote</h2>
        <h4>Get your Quote</h4>
      </div>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <ProgressBar width={'40%'} />
            <div className={classes.mainSection}>
              <h3>Select the quantity you are looking to order</h3>
              <InputElement
                name="quantity"
                type="number"
                value={props.Formik.values.quantity}
                onChange={props.Formik.handleChange}
                helperText={false}
                onBlur={props.Formik.handleBlur}
                placeholder="e.g. 500 pieces"
                width={'100%'}
              />
              <h3>What is your budget for this project?</h3>
              <InputElement
                type="number"
                name="budget"
                value={props.Formik.values.budget}
                onChange={props.Formik.handleChange}
                helperText={false}
                onBlur={props.Formik.handleBlur}
                placeholder="$ budget amount"
                width={'100%'}
              />
            </div>
            <Row>
              <Col lg={12} md={12} sm={0} xs={0}></Col>
              <Col lg={12} md={12} sm={0} xs={0}>
                <div className={classes.actionButtonSection}>
                  <Space size={48}>
                    <button
                      className={classes.actionButton}
                      onClick={() => props.setQuoteView('projectDescription')}
                    >
                      PREVIOUS
                    </button>
                    <ButtonWithRightArrow
                      disabled={disable}
                      content="NEXT"
                      function={() => props.setQuoteView('launchDate')}
                    />
                  </Space>
                </div>
              </Col>
              <Col lg={0} md={0} sm={24} xs={24}>
                <div className={classes.actionButtonSection}>
                  <Space direction="vertical" size={48}>
                    <ButtonWithRightArrow
                      disabled={disable}
                      content="NEXT"
                      function={() => props.setQuoteView('launchDate')}
                    />
                    <button
                      className={classes.actionButton}
                      onClick={() => props.setQuoteView('projectDescription')}
                    >
                      PREVIOUS
                    </button>
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
