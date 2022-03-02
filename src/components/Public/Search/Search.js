import React, { useState, useEffect } from 'react'
import { Input, Button, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

import classes from './Search.module.scss'

const Search = () => {
  const history = useHistory()

  const [search, setSearch] = useState('')

  const handleSearch = () => {
    history.push({
      pathname: `/products/${search}`,
    })
  }

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
            value={search}
            onPressEnter={() => handleSearch()}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            size="large"
            placeholder="Ex. apparel, cosmetics, etc..."
            prefix={<SearchOutlined className={classes.icon} />}
            allowClear
            autoSize={true}
          />
        </div>
      </Space>
    </>
  )
}

export default Search
