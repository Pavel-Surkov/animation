import React from 'react'
import classes from './InputElement.module.scss'

const InputElement = (props) => {
  return (
    <>
      <input
        className={classes.input}
        value={props.value}
        placeholder={props.placeholder}
      />
    </>
  )
}
export default InputElement
