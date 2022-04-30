import React, { useState } from 'react'
import classes from './InputElement.module.scss'
import eye from '../../../assets/svg/password_eye.svg'
const InputElement = (props) => {
  const [visible, setVisible] = useState(false)
  const handleValue = (e) => {
    props.onChange(e)
  }

  return (
    <>
      {props.type !== 'password' ? (
        <input
          type={props.type !== undefined ? props.type : 'text'}
          style={{ width: `${props.width}` }}
          className={classes.input}
          value={props.value}
          onChange={(e) => handleValue(e.target.value)}
          placeholder={props.placeholder}
        />
      ) : (
        <div className={classes.inputContainer}>
          <input
            className={classes.inputPassword}
            type={visible ? 'text' : 'password'}
            style={{ width: `${props.width}` }}
            value={props.value}
            onChange={(e) => handleValue(e.target.value)}
            placeholder={props.placeholder}
          />
          <button onClick={() => setVisible(!visible)}>
            <img
              className={visible ? classes.icon : classes.iconVisible}
              src={eye}
              alt="Uplio"
            />
          </button>
        </div>
      )}
    </>
  )
}
export default InputElement
