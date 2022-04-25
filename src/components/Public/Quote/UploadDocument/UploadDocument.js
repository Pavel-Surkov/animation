import { Space } from 'antd'
import React from 'react'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'

const UploadDocument = ({ setQuoteView }) => {
  return (
    <div>
      UploadDocument
      <Space>
        <button onClick={() => setQuoteView('launchDate')}>PREVIOUS</button>
        <ButtonWithRightArrow
          content="NEXT"
          function={() => setQuoteView('preSignUp')}
        />
      </Space>
    </div>
  )
}
export default UploadDocument
