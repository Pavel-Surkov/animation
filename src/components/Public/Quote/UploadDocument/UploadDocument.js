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
            if (documentArray.length > 0) {
              let arr = documentArray
              arr.push(res.data.data)
              setDocumentArray(arr)
            } else {
              const arr = []
              arr.push(res.data.data)
              setDocumentArray(arr)
            }
          } else {
            setLoadingImage(false)
            if (imageArray.length > 0) {
              let arr = imageArray
              arr.push(res.data.data)
              setImageArray(arr)
              props.setImageUploaded(imageArray)
            } else {
              const arr = []
              arr.push(res.data.data)
              setImageArray(arr)
              props.setImageUploaded(imageArray)
            }
          }
          // then print response status
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const handleChangeDocument = (event) => {
    if (event !== null) {
      setLoadingDocument(true)

      const fileUploaded = event.target.files[0]

      const data = new FormData()

      data.append('file', fileUploaded)

      let url = `${process.env.REACT_APP_API_URL}/quotes/uploadFile`

      axios
        .post(url, data, {
          // receive two parameter endpoint url ,form data
        })
        .then((res) => {
          setLoadingDocument(false)
          if (documentArray.length > 0) {
            let arr = documentArray
            arr.push(res.data.data)
            setDocumentArray(arr)

            props.setDocumentUploaded(documentArray)
          } else {
            const arr = []
            arr.push(res.data.data)
            setDocumentArray(arr)
            props.setDocumentUploaded(documentArray)
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
      <div className={classes.sideTitle}>
        <h2>Get your Quote</h2>
        <h4>Get your Quote</h4>
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
                    onChange={setDocumentValue}
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
              <Row>
                <Col span={6}>
                  <UploadDocumentFiles
                    disabled={loadingDocument}
                    onChange={handleChangeDocument}
                  />
                </Col>
                {documentArray.map((item) => (
                  <Col span={6}>
                    <div className={classes.documentLoaded}>
                      {item.substring(0, 24) + '...'}
                    </div>
                  </Col>
                ))}
              </Row>
              <h5>
                <img src={shield} alt="uplio" />
                All uploads are secure and confidential.{' '}
              </h5>
            </div>
            <Row>
              <Col lg={12} md={12} sm={0} xs={0}></Col>
              <Col lg={12} md={12} sm={0} xs={0}>
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
              <Col lg={0} md={0} sm={24} xs={24}>
                <Space direction="vertical" size={48}>
                  <ButtonWithRightArrow
                    disabled={disable}
                    content="NEXT"
                    function={() => props.setQuoteView('preSignUp')}
                  />
                  <button
                    className={classes.actionButton}
                    onClick={() => props.setQuoteView('launchDate')}
                  >
                    PREVIOUS
                  </button>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
export default UploadDocument
