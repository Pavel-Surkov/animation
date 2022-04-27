import React from 'react'

import classes from './PreSignUp.module.scss'
import ProgressBar from '../ProgressBar/ProgressBar'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import { Row, Col, Space } from 'antd'
import InputElement from '../../../../constant/public/Input/InputElement'

const PreSignUp = ({ setQuoteView }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <div className={classes.getQuoteSection}>
              <h2>Get your Quote</h2>
            </div>
            <ProgressBar width={'70%'} />
            <div className={classes.mainSection}>
              <h2>Tell us your name and email address so we can contact you</h2>
              <p>We won’t share your contact info with suppliers</p>

              <h4>Name</h4>
              <InputElement placeholder="Name" width="100%" />

              <h4>Email</h4>
              <InputElement placeholder="Email" width="100%" />
            </div>
            <Row>
              <Col span={12}></Col>
              <Col span={12}>
                <div className={classes.actionButtonSection}>
                  <Space size={48}>
                    <button onClick={() => setQuoteView('uploadDocument')}>
                      PREVIOUS
                    </button>
                    <ButtonWithRightArrow
                      content="NEXT"
                      function={() => setQuoteView('postSignUp')}
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
