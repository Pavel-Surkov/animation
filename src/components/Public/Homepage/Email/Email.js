import React, { useState, useEffect } from 'react'
import { Space, Input, Button } from 'antd'
import classes from './Email.module.scss'
import { MailOutlined } from '@ant-design/icons'
const Email = () => {
  const [value, setValue] = useState('')

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  })
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension)

    return () => {
      window.removeEventListener('resize', setDimension)
    }
  }, [screenSize])

  return (
    <div className={classes.container}>
      <h2>
        Signup to get firsthand information <br /> on what’s coming soon!
      </h2>
      <div className={classes.emailSection}>
        <Space size={screenSize.dynamicWidth < 500 ? 0 : 'large'}>
          <Input placeholder="Email address..." size="large" />
          <Button type="primary" size="large">
            {screenSize.dynamicWidth < 500 ? <MailOutlined /> : 'Submit'}
          </Button>
        </Space>
      </div>
    </div>
  )
}
export default Email
