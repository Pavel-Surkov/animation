import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Form, Input, Spin, Row, Col, InputNumber } from 'antd'

import classes from './SupplierDetails.module.scss'
import logo from '../../../../assets/svg/logo_black_medium.svg'

import { useSelector, useDispatch } from 'react-redux'
import { singleQuoteData } from '../../../../redux/actions/singleQuote.action'
import { connect } from 'react-redux'
import axios from 'axios'
import InputElement from '../../../../constant/public/Input/InputElement'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'

const SupplierDetails = (props) => {
  const history = useHistory()
  const [disable, setDisable] = useState(true)

  return (
    <>
      <div className={classes.sideTitle}>
        <h2>SIGN UP</h2>
        <h4>SIGN UP</h4>
      </div>
      <div className={classes.container}>
        <div className={classes.mainContent}>
          <h3>Business Name*</h3>
          <InputElement
            type="text"
            placeholder="Business Name"
            name="businessName"
            value={props.Formik.values.businessName}
            onChange={props.Formik.handleChange}
            onBlur={props.Formik.handleBlur}
            helperText={
              props.Formik.errors.businessName &&
              props.Formik.touched.businessName
                ? props.Formik?.errors.businessName
                : null
            }
            width={'100%'}
          />
          <h3>Email*</h3>
          <InputElement
            type="text"
            name="email"
            placeholder="Email*"
            value={props.Formik.values.email}
            onChange={props.Formik.handleChange}
            onBlur={props.Formik.handleBlur}
            helperText={
              props.Formik.errors.email && props.Formik.touched.email
                ? props.Formik?.errors.email
                : null
            }
            width={'100%'}
          />
          <h3>Phone Number (Optional)</h3>
          <InputElement
            type="number"
            name="phone"
            placeholder="+1 562-985-4111"
            value={props.Formik.values.phone}
            onChange={props.Formik.handleChange}
            onBlur={props.Formik.handleBlur}
            helperText={
              props.Formik.errors.phone && props.Formik.touched.phone
                ? props.Formik?.errors.phone
                : null
            }
            width={'100%'}
          />
          <h3>Password*</h3>
          <InputElement
            type="password"
            name="password"
            value={props.Formik.values.password}
            onChange={props.Formik.handleChange}
            onBlur={props.Formik.handleBlur}
            placeholder="Password"
            helperText={
              props.Formik.errors.password && props.Formik.touched.password
                ? props.Formik?.errors.password
                : null
            }
            width={'100%'}
          />
          <h3>Confirm the Password*</h3>
          <InputElement
            name="confirmPassword"
            type="password"
            placeholder="Password"
            onChange={props.Formik.handleChange}
            onBlur={props.Formik.handleBlur}
            helperText={
              props.Formik.errors.confirmPassword &&
              props.Formik.touched.confirmPassword
                ? props.Formik?.errors.confirmPassword
                : null
            }
            value={props.Formik.values.confirmPassword}
            width={'100%'}
          />
        </div>
        <Row>
          <Col lg={12} md={12} sm={0} xs={0}></Col>
          <Col lg={12} md={12} sm={24} xs={24} align="right">
            <div className={classes.actionButton}>
              <ButtonWithRightArrow
                disabled={!disable}
                function={() => props.setCurrentView('greetings')}
                content="SIGN UP"
                width={'325px'}
              />
              <h4>
                By submitting this form, you acknowledge that you have read and
                agree to our{' '}
                <Link to="/terms-conditions">Terms of Service </Link>
                and <Link to="/privacy-policy">Privacy Policy</Link>.
              </h4>
              <h4>
                Already have an account? <Link to="/login">Sign In</Link>
              </h4>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    singleQuote: state,
  }
}

export default connect(mapStateToProps)(SupplierDetails)
