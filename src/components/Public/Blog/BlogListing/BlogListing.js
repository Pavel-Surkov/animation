import React, { useEffect, useState } from 'react'
import Footer from '../../common/Footer/Footer'
import Navigation from '../../Homepage/Navigation/Navigation'

import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'antd'
import classes from './BlogListing.module.scss'
import axios from 'axios'
import { Typography } from 'antd'

const { Paragraph } = Typography
const { Meta } = Card
const BlogListing = () => {
  const arr = [1, 2, 3, 4, 5]
  const [blogData, setBlogData] = useState([])
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/blogs/list`)
      .then((res) => {
        console.log(res)
        setBlogData(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const linkData = (data) => {
    return `/blog/${data._id}`
  }

  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.blogsSection}>
          <Row gutter={[12, 24]}>
            {blogData.map((item) => (
              <Col span={6}>
                <Link to={linkData(item)}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="Uplio" src={item.image} />}
                  >
                    <Meta />
                    <h3>{item.title}</h3>

                    <div
                      className={classes.ellipse}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default BlogListing
