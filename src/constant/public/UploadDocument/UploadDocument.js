import React, { useRef } from 'react'
import classes from './UploadDocument.module.scss'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons'

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
        disabled={props.disabled}
        onChange={(e) => props.onChange(e)}
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
          {!props.disabled ? (
            <PlusOutlined width={32} />
          ) : (
            <LoadingOutlined style={{ fontSize: 24 }} spin />
          )}
        </button>
      </div>
    </>
  )
}
export default UploadDocument
