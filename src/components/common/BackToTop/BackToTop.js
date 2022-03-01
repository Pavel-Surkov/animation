import React from 'react'
import { BackTop } from 'antd'
import classes from './BackToTop.module.scss'
import { UpCircleOutlined } from '@ant-design/icons'
const BackToTop = () => {
  return (
    <BackTop>
      <div className={classes.main}>
        <UpCircleOutlined />
      </div>
    </BackTop>
  )
}
export default BackToTop
