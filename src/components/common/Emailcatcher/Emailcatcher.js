import { useState } from 'react'
import { Input, Button, Space } from 'antd'
import { MailOutlined } from '@ant-design/icons'

import classes from './Emailcatcher.module.scss'

const Emailcatcher = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <Space>
        <div className={classes.inputSection}>
          <Input
            size="large"
            placeholder="Email.."
            prefix={<MailOutlined className={classes.icon} />}
            allowClear
            autoSize={true}
          />
        </div>
        <Button className={classes.submitButton} type="primary" size="large">
          Submit
        </Button>
      </Space>
    </>
  )
}

export default Emailcatcher
