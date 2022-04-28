import React, { useEffect, useState } from 'react'
import { Space, Col, Row } from 'antd'
import axios from 'axios'
import classes from './UploadDocument.module.scss'

import ProgressBar from '../ProgressBar/ProgressBar'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import UploadFiles from '../../../../constant/public/UploadFiles/UploadFiles'
import UploadDocumentFiles from '../../../../constant/public/UploadDocument/UploadDocument'

import shield from '../../../../assets/svg/bi_shield-check.svg'

const UploadDocument = (props) => {
  const [disable, setDisable] = useState(false)
  const [loadingImage, setLoadingImage] = useState(false)

  const [value, setValue] = useState(null)
  const [documentValue, setDocumentValue] = useState(null)

  const [imageArray, setImageArray] = useState([])
  const [documentArray, setDocumentArray] = useState([])

  const [loadingDocument, setLoadingDocument] = useState(false)
  const [images, setImages] = useState([])
  const [document, setDocuments] = useState([])

  useEffect(() => {
    handleChange(documentValue, false)
  }, [documentValue])

  useEffect(() => {
    handleChange(value, true)
  }, [value])

  // setQuoteView
  // setImageUploaded
  // setDocumentUploaded

  const handleChange = (event, document) => {
    if (event !== null) {
      if (document) {
        setLoadingDocument(true)
      } else {
        setLoadingImage(true)
      }

      const fileUploaded = event.target.files[0]

      const data = new FormData()

      data.append('file', fileUploaded)

      let url = `${process.env.REACT_APP_API_URL}/quotes/uploadFile`

      axios
        .post(url, data, {
          // receive two parameter endpoint url ,form data
        })
        .then((res) => {
          debugger
          if (document) {
            setLoadingDocument(false)
            const arr = documentArray.push(res.data.data)
            setDocumentArray(arr)
          } else {
            setLoadingImage(false)
            if (imageArray.length > 0) {
              imageArray.push(res.data.data)
              setImageArray(imageArray)
            } else {
              const arr = []
              arr.push(res.data.data)
              setImageArray(arr)
            }
          }
          // then print response status
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
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
              <Row>
                <Col span={4}>
                  <UploadFiles
                    disabled={loadingImage}
                    onChange={handleChange}
                  />
                </Col>
                {imageArray.length > 0
                  ? imageArray.map((item) => (
                      <Col span={4}>
                        <img
                          className={classes.imageLoaded}
                          src={item}
                          alt="Uplio"
                        />
                      </Col>
                    ))
                  : null}
              </Row>
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
                      onClick={() => props.setQuoteView('launchDate')}
                    >
                      PREVIOUS
                    </button>
                    <ButtonWithRightArrow
                      disabled={disable}
                      content="NEXT"
                      function={() => props.setQuoteView('preSignUp')}
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
