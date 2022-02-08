import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import classes from './Greetings.module.scss'
export default function Greetings(prop) {
  console.log(prop)
  return (
    <>
      <div className={classes.mainSection}>
        <h3>Nice</h3>
        <h4>Sign up is complete.</h4>
        <hr />
        {prop.supplier ? (
          <p>
            Thank you for applying to be a part of the Uplio family. We will be
            in touch with you very soon. Keep an eye on your inbox for our “next
            steps” email.
          </p>
        ) : (
          <p>
            Thank you for signing up to be a part of the Uplio community. We are
            excited to have you with us. You may now begin sourcing from our
            list of trusted suppliers...
          </p>
        )}

        <Row gutter={16}>
          <Col span={12}>
            <Link className={classes.buttonHome} to="/">
              <h6>Home</h6>
            </Link>
          </Col>
          <Col span={12}>
            <Link className={classes.buttonSignUp} to="/login">
              <h6>Sign In</h6>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  )
}
