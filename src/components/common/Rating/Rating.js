import React from 'react'
import logoImg from '../../../assets/svg/rating_uplio.svg'
import logoImgActive from '../../../assets/svg/rating_uplio_active.svg'
import classes from './Rating.module.scss'
import { Row, Col } from 'antd'
const Rating = () => {
  const renderRating = () => {
    return (
      <>
        <Col span={4}>
          <img
            className={classes.ratingElement}
            src={logoImgActive}
            alt="uplio"
          />
        </Col>
        <Col span={4}>
          <img className={classes.ratingElement} src={logoImg} alt="uplio" />
        </Col>
        <Col span={4}>
          <img className={classes.ratingElement} src={logoImg} alt="uplio" />
        </Col>
        <Col span={4}>
          <img className={classes.ratingElement} src={logoImg} alt="uplio" />
        </Col>
        <Col span={4}>
          <img className={classes.ratingElement} src={logoImg} alt="uplio" />
        </Col>
      </>
    )
    //     for (let i = 0; i < 5; i++) {
    //       return (

    //       )
    //     }
  }
  return (
    <>
      <Row className={classes.ratingMainSection}>{renderRating()}</Row>
    </>
  )
}
export default Rating
