import React from 'react'

import { Space } from 'antd'

import classes from './SelectCategory.module.scss'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'

const SelectQuantity = ({ setQuoteView }) => {
  return (
    <div className={classes.container}>
      <div className={classes.progressBar}></div>
      select category
      <Space>
        <button onClick={() => setQuoteView('getStarted')}>PREVIOUS</button>
        <ButtonWithRightArrow
          content="NEXT"
          function={() => setQuoteView('projectDescription')}
        />
      </Space>
    </div>
  )
}
export default SelectQuantity
