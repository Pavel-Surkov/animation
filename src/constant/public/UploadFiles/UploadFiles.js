import React, { useRef } from 'react'
import { Row, Col } from 'antd'
import classes from './UploadFiles.module.scss'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons'
const UploadFiles = (props) => {
  const inputFile = useRef(null)
  const openAttachment = () => {
    inputFile.current.click()
  }
  return (
    <>
      <input
        type="file"
        onChange={(e) => props.onChange(e)}
        id="file"
        ref={inputFile}
        style={{ display: 'none' }}
      />

      <div className={classes.input}>
        <p>Images (.JPEG, .PDF)</p>
        <button
          disabled={props.disabled}
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
export default UploadFiles
