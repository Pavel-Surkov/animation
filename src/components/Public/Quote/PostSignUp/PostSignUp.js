import React from 'react'
import { Space } from 'antd'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'

const PostSignUp = ({ setQuoteView }) => {
  return (
    <div>
      PostSignUp
      <Space>
        <button onClick={() => setQuoteView('preQuoteSubmit')}>PREVIOUS</button>
        <ButtonWithRightArrow
          content="Submit"
          function={() => setQuoteView('postQuoteSubmit')}
        />
      </Space>
    </div>
  )
}
export default PostSignUp
