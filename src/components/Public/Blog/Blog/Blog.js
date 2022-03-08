import React from 'react'
import Footer from '../../common/Footer/Footer'
import Navigation from '../../Homepage/Navigation/Navigation'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'antd'
import classes from './Blog.module.scss'
import banner from '../../../../assets/images/main_banner.png'
import banner1 from '../../../../assets/images/banner.jpg'
const { Meta } = Card
const BlogListing = () => {
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.blogsSection}>
          <Row gutter={[12, 24]}>
            <Col span={24}>
              <h2>Lorem Ipsum</h2>
              <p>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit..." "There is no one who loves pain
                itself, who seeks after it and wants to have it, simply because
                it is pain..."
              </p>
              <img src={banner} alt="uplio" />
            </Col>
            <Col span={24}>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </h4>
              <img width={1000} src={banner1} alt="uplio" />
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default BlogListing
