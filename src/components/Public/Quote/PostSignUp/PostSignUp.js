import React from 'react'
import { Row, Col, Space } from 'antd'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import ProgressBar from '../ProgressBar/ProgressBar'
import classes from './PostSignUp.module.scss'

import image from '../../../../assets/images/g12.png'
import { Link } from 'react-router-dom'

const PostSignUp = ({ setQuoteView }) => {
  return (
    <>
      <div className={classes.getQuoteSection}>
        <h2>Get your Quote</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <ProgressBar width={'80%'} />
            <div>
              <Row gutter={64}>
                <Col span={13} align="right">
                  <img src={image} alt="Uplio" />
                </Col>
                <Col span={11}>
                  <div className={classes.mainSection}>
                    <h2>
                      Your dream <br />
                      is about to get real! <br />
                      Let’s send your request
                    </h2>
                    <p>
                      To help you compare options, we will send your request to
                      multiple suppliers that offer what you need. We won’t
                      share your contact details or budget.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={classes.submitSection}>
              <Row>
                <Col span={12}></Col>
                <Col span={12}>
                  <div className={classes.actionButtonSection}>
                    <Space size={48}>
                      <button onClick={() => setQuoteView('preSignUp')}>
                        PREVIOUS
                      </button>
                      <ButtonWithRightArrow
                        content="Submit"
                        function={() => setQuoteView('postQuoteSubmit')}
                      />
                    </Space>
                    <p>
                      By submitting this form, you acknowledge that you have
                      read and agree to our{' '}
                      <Link className={classes.links} to="terms-conditions">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link className={classes.links} to="/privacy-policy">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PostSignUp
