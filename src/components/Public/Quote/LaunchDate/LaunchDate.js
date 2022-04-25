import { Space } from 'antd'
import React from 'react'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'

import classes from './LaunchDate.module.scss'

const LaunchDate = ({ setQuoteView }) => {
  return (
    <>
      <div className={classes.container}>
        Launch date
        <Space>
          <button onClick={() => setQuoteView('selectQuantity')}>
            PREVIOUS
          </button>
          <ButtonWithRightArrow
            content="NEXT"
            function={() => setQuoteView('uploadDocument')}
          />
        </Space>
      </div>
    </>
  )
}
export default LaunchDate
