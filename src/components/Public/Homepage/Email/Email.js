import React from 'react'
import { Space, Input, Button } from 'antd'
import classes from './Email.module.scss'
const Email = () => (
  <div className={classes.container}>
    <h2>
      Signup to get firsthand information <br /> on what’s coming soon!
    </h2>
    <div className={classes.emailSection}>
      <Space>
        <Input placeholder="Email address..." size="large" />
        <Button type="primary" size="large">
          Submit
        </Button>
      </Space>
    </div>
  </div>
)
export default Email
