import React, { useEffect, useState } from 'react'

import classes from './PreSignUp.module.scss'
import ProgressBar from '../ProgressBar/ProgressBar'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import { Row, Col, Space } from 'antd'
import InputElement from '../../../../constant/public/Input/InputElement'

const PreSignUp = (props) => {
  const [disable, setDisable] = useState(true)

  useEffect(() => {
    if (props.Formik.values.name !== '' && props.Formik.values.email !== '') {
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
            <ProgressBar width={'70%'} />
            <div className={classes.mainSection}>
              <h2>Tell us your name and email address so we can contact you</h2>
              <p>We won’t share your contact info with suppliers</p>

              <h4>Name</h4>
              <InputElement
                name="name"
                value={props.Formik.values.name}
                onChange={props.Formik.handleChange}
                onBlur={props.Formik.handleBlur}
                helperText={false}
                placeholder="Name"
                width="100%"
              />

              <h4>Email</h4>
              <InputElement
                name="email"
                value={props.Formik.values.email}
                onChange={props.Formik.handleChange}
                onBlur={props.Formik.handleBlur}
                helperText={
                  props.Formik.errors.email && props.Formik.touched.email
                    ? props.Formik?.errors.email
                    : null
                }
                placeholder="Email"
                width="100%"
              />
            </div>
            <Row>
              <Col span={12}></Col>
              <Col span={12}>
                <div className={classes.actionButtonSection}>
                  <Space size={48}>
                    <button
                      onClick={() => props.setQuoteView('uploadDocument')}
                    >
                      PREVIOUS
                    </button>
                    <ButtonWithRightArrow
                      disabled={disable}
                      content="NEXT"
                      function={() => props.setQuoteView('postSignUp')}
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
export default PreSignUp
