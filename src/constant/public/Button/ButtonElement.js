import React from 'react'
import classes from './ButtonElement.module.scss'
const ButtonElement = (props) => {
  return (
    <>
      <button className={classes.button} onClick={props.function}>
        {props.content}
      </button>
    </>
  )
}
export default ButtonElement
