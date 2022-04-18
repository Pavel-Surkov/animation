import React, { useEffect, useState } from 'react'
import Footer from '../../common/Footer/Footer'
import Navigation from '../../Homepage/Navigation/Navigation'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'antd'
import classes from './Blog.module.scss'
import banner from '../../../../assets/images/main_banner.png'
import banner1 from '../../../../assets/images/banner.jpg'
import { useParams } from 'react-router-dom'
const { Meta } = Card
const BlogListing = () => {
  let { id } = useParams()
  const [blog, setBlogData] = useState('')
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/blogs/list`)
      .then((res) => {
        console.log(res)

        res.data.data.map((item) => {
          if (item._id === id) {
            setBlogData(item)
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.blogsSection}>
          <Row gutter={[12, 24]}>
            <Col span={24}>
              <Col span={24}>
                <h2>{blog.title}</h2>
                <p> </p>
                <img src={blog.image} alt="uplio" />
              </Col>
            </Col>
            <Col span={24}>
              <div dangerouslySetInnerHTML={{ __html: blog.description }} />
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default BlogListing
