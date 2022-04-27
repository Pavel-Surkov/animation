import React, { useState } from 'react'

import { Space, Row, Col } from 'antd'

import classes from './SelectCategory.module.scss'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import ProgressBar from '../ProgressBar/ProgressBar'
import InputWithDropDown from '../../../../constant/public/InputWithDropDown/InputWithDropDown'
import InputElement from '../../../../constant/public/Input/InputElement'

const SelectQuantity = ({ setQuoteView }) => {
  const [dropdown, setDropdown] = useState('')

  const data = [
    { id: 1, label: 'Apparel' },
    { id: 2, label: 'Cosmetics' },
    { id: 3, label: 'Jewelry' },
    { id: 4, label: 'Home Décor' },
    { id: 5, label: 'Textile' },
    { id: 6, label: 'Others' },
  ]

  useState(() => {
    console.log(dropdown)
  }, [dropdown])

  return (
    <>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <div className={classes.getQuoteSection}>
              <h2>Get your Quote</h2>
            </div>
            <ProgressBar width={'20%'} />

            <div className={classes.selectField}>
              <h2>Select a category that fits your request</h2>
              <InputWithDropDown
                dropdown={data}
                placeholder="- Select a category -"
                width={'100%'}
                setDropdownValue={setDropdown}
              />
              {dropdown === 'Others' ? <InputElement /> : null}
            </div>
            <Row>
              <Col span={12}></Col>
              <Col span={12}>
                <div className={classes.actionButtonSection}>
                  <Space size={48}>
                    <button
                      className={classes.actionButton}
                      onClick={() => setQuoteView('getStarted')}
                    >
                      PREVIOUS
                    </button>
                    <ButtonWithRightArrow
                      content="NEXT"
                      function={() => setQuoteView('projectDescription')}
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
