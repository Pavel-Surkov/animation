import React from 'react'

import { Space } from 'antd'

import classes from './SelectQuantity.module.scss'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'

const SelectQuantity = ({ setQuoteView }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.progressDiv}></div>
        Select Quantity
        <Space>
          <button onClick={() => setQuoteView('projectDescription')}>
            PREVIOUS
          </button>
          <ButtonWithRightArrow
            content="NEXT"
            function={() => setQuoteView('launchDate')}
          />
        </Space>
      </div>
    </>
  )
}
export default SelectQuantity
