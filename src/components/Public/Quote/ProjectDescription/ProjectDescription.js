import React from 'react'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'

import { Row, Col, Space } from 'antd'
import ProgressBar from '../ProgressBar/ProgressBar'
import classes from './ProjectDescription.module.scss'
import TextInput from '../../../../constant/public/TextInput/TextInput'
const ProjectDescription = ({ setQuoteView }) => {
  return (
    <>
      <div className={classes.getQuoteSection}>
        <h2>Get your Quote</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <ProgressBar width={'30%'} />
            <div className={classes.mainSection}>
              <h3>
                Tell us about your project for a more accurate cost estimate.
              </h3>
              <p>
                The details will help suppliers understand your project to
                provide the right recommendations, prices and service.
              </p>
              <TextInput
                rows={5}
                width={'100%'}
                placeholder="As an example, I am launching an active wear line and looking for sustainable fabric."
              />
            </div>
            <Row>
              <Col span={12}></Col>
              <Col span={12}>
                <div className={classes.actionButtonSection}>
                  <Space size={48}>
                    <button
                      className={classes.actionButton}
                      onClick={() => setQuoteView('selectCategory')}
                    >
                      PREVIOUS
                    </button>
                    <ButtonWithRightArrow
                      content="NEXT"
                      function={() => setQuoteView('selectQuantity')}
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
export default ProjectDescription
