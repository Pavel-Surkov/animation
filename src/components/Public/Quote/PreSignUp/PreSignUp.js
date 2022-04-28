import React, { useEffect, useState } from 'react'

import classes from './PreSignUp.module.scss'
import ProgressBar from '../ProgressBar/ProgressBar'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import { Row, Col, Space } from 'antd'
import InputElement from '../../../../constant/public/Input/InputElement'

const PreSignUp = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [disable, setDisable] = useState(true)

  useEffect(() => {
    if (name !== '' && email !== '') {
      setDisable(false)
    }
  }, [name, email])

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
                value={name}
                onChange={setName}
                placeholder="Name"
                width="100%"
              />

              <h4>Email</h4>
              <InputElement
                value={email}
                onChange={setEmail}
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
