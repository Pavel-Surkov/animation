import { useState } from 'react'
import { Input, Button, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import classes from './Search.module.scss'

const Search = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <Space>
        <div className={classes.inputSection}>
          <Input
            size="large"
            placeholder="Ex. apparel, cosmetics, etc..."
            prefix={<SearchOutlined className={classes.icon} />}
            allowClear
            autoSize={true}
          />
        </div>
        <Button className={classes.searchButton} type="primary" size="large">
          Search
        </Button>
      </Space>
    </>
  )
}

export default Search
