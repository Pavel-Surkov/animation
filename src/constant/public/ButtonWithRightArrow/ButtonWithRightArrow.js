import React from 'react'
import classes from './ButtonWithRightArrow.module.scss'
import { Space } from 'antd'

import arrowRight from '../../../assets/svg/Arrow_Right.svg'

const ButtonWithRightArrow = (props) => {
  return (
    <>
      <button className={classes.button} onClick={props.function}>
        <Space size={54}>
          {props.content}
          <img src={arrowRight} alt="Uplio" />
        </Space>
      </button>
    </>
  )
}
export default ButtonWithRightArrow
