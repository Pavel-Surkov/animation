import React from 'react'
import ButtonWithRightArrow from '../../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'

import { Space } from 'antd'

import classes from './ProjectDescription.module.scss'

const ProjectDescription = ({ setQuoteView }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.progressDiv}></div>
        project discription
        <Space>
          <button onClick={() => setQuoteView('selectCategory')}>
            PREVIOUS
          </button>
          <ButtonWithRightArrow
            content="NEXT"
            function={() => setQuoteView('selectQuantity')}
          />
        </Space>
      </div>
    </>
  )
}
export default ProjectDescription
