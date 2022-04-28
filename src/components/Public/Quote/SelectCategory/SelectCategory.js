import React, { useEffect, useState } from 'react'

import { Space, Row, Col } from 'antd'

import classes from './SelectCategory.module.scss'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import ProgressBar from '../ProgressBar/ProgressBar'
import InputWithDropDown from '../../../../constant/public/InputWithDropDown/InputWithDropDown'
import InputElement from '../../../../constant/public/Input/InputElement'

const SelectQuantity = (props) => {
  const [dropdown, setDropdown] = useState('')
  const [otherCategory, setOtherCategory] = useState('')
  const [disable, setDisable] = useState(true)

  const data = [
    { id: 1, label: 'Apparel' },
    { id: 2, label: 'Cosmetics' },
    { id: 3, label: 'Jewelry' },
    { id: 4, label: 'Home Décor' },
    { id: 5, label: 'Textile' },
    { id: 6, label: 'Others' },
  ]

  useEffect(() => {
    if (dropdown !== '') {
      if (dropdown === 'Others') {
        if (otherCategory !== '') {
          setDisable(false)
          props.setCategory(otherCategory)
        }
      } else {
        setDisable(false)
        props.setCategory(dropdown)
      }
    }
  }, [dropdown, otherCategory])

  return (
    <>
      <div className={classes.getQuoteSection}>
        <h2>Get your Quote</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <ProgressBar width={'20%'} />

            <div className={classes.selectField}>
              <h2>Select a category that fits your request</h2>
              <div style={{ marginBottom: '32px' }}>
                <InputWithDropDown
                  dropdown={data}
                  placeholder="- Select a category -"
                  width={'100%'}
                  setDropdown={setDropdown}
                />
              </div>
              {dropdown === 'Others' ? (
                <InputElement
                  value={otherCategory}
                  onChange={setOtherCategory}
                  placeholder="Enter the name of your category"
                  width={'100%'}
                />
              ) : null}
            </div>
            <Row>
              <Col span={12}></Col>
              <Col span={12}>
                <div className={classes.actionButtonSection}>
                  <Space size={48}>
                    <button
                      className={classes.actionButton}
                      onClick={() => props.setQuoteView('getStarted')}
                    >
                      PREVIOUS
                    </button>
                    <ButtonWithRightArrow
                      disable={disable}
                      content="NEXT"
                      function={() => props.setQuoteView('projectDescription')}
                    />
                  </Space>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
export default SelectQuantity
