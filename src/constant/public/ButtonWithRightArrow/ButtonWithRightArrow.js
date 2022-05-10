import React from 'react'
import classes from './ButtonWithRightArrow.module.scss'
import { Row, Col } from 'antd'
import { Space } from 'antd'

import arrowRight from '../../../assets/svg/Arrow_Right.svg'

const ButtonWithRightArrow = (props) => {
  return (
    <>
      <button
        disabled={props.disabled === undefined ? false : props.disabled}
        className={
          props.disabled ? classes.buttonDisabled : 'button button-arrow'
        }
        onClick={props.function}
      >
        <p>{props.content}</p>
        <img width="55" src={arrowRight} alt="Uplio" />
      </button>
    </>
  )
}
export default ButtonWithRightArrow
