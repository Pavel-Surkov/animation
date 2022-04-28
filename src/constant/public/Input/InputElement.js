import React from 'react'
import classes from './InputElement.module.scss'

const InputElement = (props) => {
  const handleValue = (e) => {
    props.onChange(e)
  }

  return (
    <>
      <input
        type={props.type !== undefined ? props.type : 'text'}
        style={{ width: `${props.width}` }}
        className={classes.input}
        value={props.value}
        onChange={(e) => handleValue(e.target.value)}
        placeholder={props.placeholder}
      />
    </>
  )
}
export default InputElement
