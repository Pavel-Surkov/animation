import React, { useState } from 'react'
import classes from './InputElement.module.scss'
import eye from '../../../assets/svg/password_eye.svg'
import errorIcon from '../../../assets/svg/error_icon.svg'
const InputElement = (props) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      {props.type !== 'password' ? (
        <>
          <input
            name={props.name}
            type={props.type !== undefined ? props.type : 'text'}
            style={{ width: `${props.width}` }}
            className={classes.input}
            onBlur={props.onBlur}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
          />
          <p className={classes.errorMessage}>
            {props.helperText ? <img src={errorIcon} alt="Uplio" /> : null}{' '}
            {props.helperText}
          </p>
        </>
      ) : (
        <>
          <div className={classes.inputContainer}>
            <input
              name={props.name}
              className={classes.inputPassword}
              type={visible ? 'text' : 'password'}
              style={{ width: `${props.width}` }}
              onBlur={props.onBlur}
              value={props.value}
              onChange={props.onChange}
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
          <p className={classes.errorMessage}>
            {props.helperText ? <img src={errorIcon} alt="Uplio" /> : null}{' '}
            {props.helperText}
          </p>
        </>
      )}
    </>
  )
}
export default InputElement
