import React from 'react'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import { Space } from 'antd'
const PreSignUp = ({ setQuoteView }) => {
  return (
    <>
      PreSignUp
      <Space>
        <button onClick={() => setQuoteView('uploadDocument')}>PREVIOUS</button>
        <ButtonWithRightArrow
          content="NEXT"
          function={() => setQuoteView('postSignUp')}
        />
      </Space>
    </>
  )
}
export default PreSignUp
