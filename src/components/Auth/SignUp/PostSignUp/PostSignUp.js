import React from 'react'
import { Row, Col } from 'antd'
import classes from './PostSignUp.module.scss'
import image from '../../../../assets/svg/Congrats.svg'

import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import { useHistory } from 'react-router-dom'
const PostSignUp = () => {
  const history = useHistory()
  return (
    <>
      <div className={classes.container}>
        <div className={classes.mainSection}>
          <Row gutter={64}>
            <Col span={12}>
              <img src={image} alt="Uplio" />
            </Col>
            <Col span={12}>
              <div className={classes.actionButton}>
                <h1>CONGRATULATIONS!</h1>
                <h2>you have successfully registered </h2>
                <h3>
                  To help you compare options, we will send your request to
                  multiple suppliers that offer what you need. We won’t share
                  your contact details or budget.
                </h3>
                <ButtonWithRightArrow
                  width={'350px'}
                  content="GO TO DASHBOARD"
                  function={() => history.push({ pathname: '/' })}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
export default PostSignUp
