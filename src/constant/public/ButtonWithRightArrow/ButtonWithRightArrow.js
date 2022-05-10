import React from 'react'
import classes from './ButtonWithRightArrow.module.scss'
import { Row, Col } from 'antd'
import { Space } from 'antd'

import arrowRight from '../../../assets/svg/Arrow_Right.svg'

const ButtonWithRightArrow = (props) => {
  return (
    <>
      <button
        type={props.type}
        disabled={props.disabled === undefined ? false : props.disabled}
        className={props.disabled ? classes.buttonDisabled : classes.button}
        onClick={props.function}
      >
        {props.content}
        <img width="55" src={arrowRight} alt="Uplio" />
      </button>
    </>
  )
}
export default ButtonWithRightArrow
