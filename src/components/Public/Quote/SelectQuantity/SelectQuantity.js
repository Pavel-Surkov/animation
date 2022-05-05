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
      <div className={classes.getQuoteSection}>
        <h2>Get your Quote</h2>
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
              <Col span={12}></Col>
              <Col span={12}>
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
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
export default SelectQuantity
