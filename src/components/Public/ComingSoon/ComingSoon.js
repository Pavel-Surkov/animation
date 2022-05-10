import React from 'react'
import { Row, Col } from 'antd'
import classes from './ComingSoon.module.scss'
import ButtonWithRightArrow from '../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'
import { useHistory } from 'react-router-dom'
import image from '../../../assets/svg/comingsoon.svg'
import Navigation from '../../../constant/public/Navigation/Navigation'
import Footer from '../../../constant/public/Footer/Footer'

const ComingSoon = () => {
  const history = useHistory()
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <Row gutter={100}>
          <Col lg={12} md={12} sm={24} xs={24}>
            <img src={image} alt="Uplio" className={classes.image} />
          </Col>
          <Col lg={12} md={12} sm={24} xs={24} align="right">
            <div className={classes.mainContent}>
              <h1>WE’re COMING SOON!</h1>
              <h2>WE’re working hard to give you the best experience</h2>
              <ButtonWithRightArrow
                content="GO TO HOMEPAGE"
                function={() => history.push({ pathname: '/' })}
              />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}
export default ComingSoon
