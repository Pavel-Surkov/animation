import React from 'react'
import classes from './ProgressBar.module.scss'

const ProgressBar = (props) => {
  return (
    <>
      <div className={classes.progressBar}>
        <div className={classes.bar} style={{ width: `${props.width}` }}></div>
      </div>
    </>
  )
}
export default ProgressBar
