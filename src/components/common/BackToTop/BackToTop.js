import React from 'react'
import { BackTop } from 'antd'
import classes from './BackToTop.module.scss'
import image from '../../../assets/svg/back_to_top.svg'
const BackToTop = () => {
  return (
    <BackTop>
      <div className={classes.main}>
        <img src={image} alt="Uplio" />
      </div>
    </BackTop>
  )
}
export default BackToTop
