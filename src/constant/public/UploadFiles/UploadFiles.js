import React, { useRef } from 'react'
import classes from './UploadFiles.module.scss'
import { PlusOutlined } from '@ant-design/icons'
const UploadFiles = (props) => {
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
        <p>Images (.JPEG, .PDF)</p>
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
export default UploadFiles
