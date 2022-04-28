import React from 'react'
import classes from './TextInput.module.scss'
const TextInput = (props) => {
  return (
    <>
      <textarea
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        style={{ width: props.width }}
        className={classes.textarea}
        placeholder={props.placeholder}
        rows={props.rows}
        cols={props.cols}
      />
    </>
  )
}
export default TextInput
