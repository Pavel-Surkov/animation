import React from 'react'
import ButtonElement from '../../../../constant/public/Button/ButtonElement'
import ProgressBar from '../ProgressBar/ProgressBar'
import classes from './PostQuoteSubmit.module.scss'
import { Row, Col } from 'antd'
import { useHistory } from 'react-router-dom'

const PostQuoteSubmit = ({ setQuoteView }) => {
  const history = useHistory()
  return (
    <>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <div className={classes.getQuoteSection}>
              <h2>Get your Quote</h2>
            </div>
            <ProgressBar width={'100%'} />
            <div className={classes.mainSection}>
              <h3>Your request has been sent!</h3>
              <p>What’s next:</p>

              <h4>
                <h6> 1.</h6>Uplio will share your project with a handful of
                trusted suppliers
              </h4>
              <h4>
                <h6> 2.</h6>You will get a response directly on Uplio, usually
                within 24 hours
              </h4>
              <h4>
                <h6> 3.</h6>Compare responses and hire a supplier that’s right
                for you
              </h4>
            </div>
            <Row className={classes.actionButtonSection}>
              <Col span={12}></Col>
              <Col span={12} align="right">
                <div>
                  <ButtonElement
                    content="GO TO DASHBOARD"
                    function={() => history.push({ pathname: '/login' })}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
export default PostQuoteSubmit
