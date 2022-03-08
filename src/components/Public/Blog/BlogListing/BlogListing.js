import React from 'react'
import Footer from '../../common/Footer/Footer'
import Navigation from '../../Homepage/Navigation/Navigation'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'antd'
import classes from './BlogListing.module.scss'

const { Meta } = Card
const BlogListing = () => {
  const arr = [1, 2, 3, 4, 5]
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.blogsSection}>
          <Row gutter={[12, 24]}>
            {arr.map((item) => (
              <Col span={6}>
                <Link to="/blog/123">
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  >
                    <Meta
                      title="Sample Blog"
                      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust..."
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
