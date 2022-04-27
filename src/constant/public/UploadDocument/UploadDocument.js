import React, { useRef } from 'react'
import classes from './UploadDocument.module.scss'
import { PlusOutlined } from '@ant-design/icons'

const UploadDocument = (props) => {
  const inputFile = useRef(null)
  const openAttachment = () => {
    inputFile.current.click()
  }
  return (
    <>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: 'none' }}
      />
      <div className={classes.input}>
        <p>Documents (.DOC)</p>
        <button
          id="attachment"
          type="button"
          class="file"
          name="attachement"
          onClick={() => openAttachment()}
        >
          <PlusOutlined width={32} />
        </button>
      </div>
    </>
  )
}
export default UploadDocument
