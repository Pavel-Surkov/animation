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
        className={props.disabled ? classes.buttonDisabled : classes.button}
        onClick={props.function}
      >
        <Row>
          <Col span={12}>{props.content}</Col>
          <Col span={12} align="right">
            <img src={arrowRight} alt="Uplio" />
          </Col>
        </Row>
      </button>
    </>
  )
}
export default ButtonWithRightArrow
