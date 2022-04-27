import React from 'react'
import classes from './TextInput.module.scss'
const TextInput = (props) => {
  return (
    <>
      <textarea
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
