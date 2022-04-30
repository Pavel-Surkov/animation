import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import classes from './Greetings.module.scss'
import ButtonElement from '../../../../constant/public/Button/ButtonElement'
const Greetings = (props) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.mainSection}>
          <h1>YOUR ACCOUNT IS ALMOST READY!</h1>
          <h3>A verification link was sent to your email info@gmail.com.</h3>
          <h3>
            Please click the link in the email to access your account. For
            security purposes, the link will expire in 12 hours.
          </h3>
        </div>
        <div className={classes.actionButton}>
          <Row gutter={34}>
            <Col span={12}>
              <h2>
                Resend the confirmation <br />
                if you didn’t receive the email.
              </h2>
            </Col>
            <Col span={12}>
              <ButtonElement
                function={() => props.setCurrentView('postSignUp')}
                content="RESEND CONFIRMATION"
                width={'325px'}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
export default Greetings
