import React, { useState, useEffect } from 'react'
import { Input, Button, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import classes from './Search.module.scss'

const Search = () => {
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
    <>
      <Space size={screenSize.dynamicWidth < 500 ? 0 : 'large'}>
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
          {screenSize.dynamicWidth < 500 ? <SearchOutlined /> : 'Search'}
        </Button>
      </Space>
    </>
  )
}

export default Search
