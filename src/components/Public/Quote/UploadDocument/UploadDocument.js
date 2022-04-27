import { Space, Col, Row } from 'antd'

import classes from './UploadDocument.module.scss'

import ProgressBar from '../ProgressBar/ProgressBar'
import React from 'react'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import UploadFiles from '../../../../constant/public/UploadFiles/UploadFiles'
import UploadDocumentFiles from '../../../../constant/public/UploadDocument/UploadDocument'

import shield from '../../../../assets/svg/bi_shield-check.svg'

const UploadDocument = ({ setQuoteView }) => {
  return (
    <>
      <div className={classes.getQuoteSection}>
        <h2>Get your Quote</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <ProgressBar width={'60%'} />
            <div className={classes.mainSection}>
              <h3>
                Upload your inspiration image/design so that your supplier gets
                an idea of the style you are looking for (Optional)
              </h3>
              <UploadFiles />
              <UploadDocumentFiles />
              <h5>
                <img src={shield} alt="uplio" />
                All uploads are secure and confidential.{' '}
              </h5>
            </div>
            <Row>
              <Col span={12}></Col>
              <Col span={12}>
                <div className={classes.actionButtonSection}>
                  <Space size={48}>
                    <button
                      className={classes.actionButton}
                      onClick={() => setQuoteView('launchDate')}
                    >
                      PREVIOUS
                    </button>
                    <ButtonWithRightArrow
                      content="NEXT"
                      function={() => setQuoteView('preSignUp')}
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
export default UploadDocument
