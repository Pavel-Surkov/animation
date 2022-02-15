import React, { useState } from 'react'
import classes from './Products.module.scss'
import {
  Row,
  Col,
  Input,
  Pagination,
  Radio,
  Space,
  Rate,
  Button,
  Divider,
  Spin,
} from 'antd'
import image1 from '../../../assets/images/product_image_1.png'
import image2 from '../../../assets/images/product_image_2.png'
import image3 from '../../../assets/images/product_image_3.png'
import Navigation from '../../Public/Homepage/Navigation/Navigation'
import companyLogo from '../../../assets/images/profile_image.png'
import Rating from '../../common/Rating/Rating'
import { SearchOutlined, HeartOutlined } from '@ant-design/icons'
import Tags from '../../common/Tags/Tags'

export default function Products() {
  const [loading, setLoading] = useState(false)
  const arr = [1, 2, 3, 4]
  const loadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <Row gutter={16}>
          <Col span={5}>
            <div className={classes.section}>
              <div className={classes.searchFilter}>
                <Input
                  size="large"
                  placeholder="Search keywords..."
                  prefix={<SearchOutlined />}
                />
                <h3>Ex. fabric, retro, minimal, etc...</h3>
              </div>
              <div className={classes.filterOption}>
                <h3>Categories</h3>
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value="1">Favorites</Radio>
                    <Radio value="2">Availability</Radio>
                    <Radio value="3">Minimum Order Quantity</Radio>
                    <Radio value="4">Location</Radio>
                  </Space>
                </Radio.Group>
              </div>
            </div>
          </Col>
          <Col span={19}>
            <div className={classes.section}>
              <div className={classes.resultsHeader}>
                <h3>
                  10,000+ Suppliers found for <strong>Ring</strong>
                </h3>
              </div>
              <div className={classes.productSection}>
                {arr.map((item) => (
                  <>
                    <Divider />
                    <Row
                      gutter={16}
                      // justify="space-between"
                    >
                      <Col span={8}>
                        <div className={classes.productImg}>
                          <Row>
                            <Col span={8}>
                              <div className={classes.logoImg}>
                                <img src={companyLogo} alt="uplio" />
                                <Tags prop="top rated" />
                                <Tags prop="approved" />
                                <Tags prop="hot seller" />
                              </div>
                            </Col>
                            <Col span={16}>
                              <h2>Company Name</h2>
                              <Rating value={1} />
                              <div className={classes.ratingText}>
                                <h3>
                                  <span> 4.5 Ups</span>
                                  <Divider
                                    type="vertical"
                                    className={classes.ratingTextDivider}
                                  />
                                  <span>123 Reviews</span>
                                </h3>
                              </div>

                              <Row>
                                <Col span={6}>
                                  <Button className={classes.wishlistButton}>
                                    <HeartOutlined />
                                  </Button>
                                </Col>
                                <Col span={18}>
                                  <Button className={classes.contactButton}>
                                    Contact
                                  </Button>
                                </Col>
                              </Row>
                              <span>
                                Minimum Order
                                <Divider
                                  type="vertical"
                                  className={classes.ratingTextDivider}
                                />
                                <strong>500</strong>
                              </span>
                              <Divider
                                className={classes.dividerForServices}
                                type="horizontal"
                              />
                              <p>
                                Service 1, Service 2, Service 3, Service 4,
                                Customized Service
                              </p>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col span={5}>
                        <div className={classes.productImg}>
                          <img src={image1} alt="uplio" />
                        </div>
                      </Col>
                      <Col span={5}>
                        <div className={classes.productImg}>
                          <img src={image2} alt="uplio" />
                        </div>
                      </Col>
                      <Col span={5}>
                        <div className={classes.productImg}>
                          <img src={image3} alt="uplio" />
                        </div>
                      </Col>
                    </Row>
                  </>
                ))}
                <div className={classes.section}>
                  {/* {loading ? (
                    <div className={classes.loader}>
                      <Spin
                        indicator={
                          <LoadingOutlined style={{ fontSize: 40 }} spin />
                        }
                      />
                    </div>
                  ) : (
                    <Button
                      size="large"
                      onClick={() => loadMore()}
                      className={classes.contactButton}
                    >
                      Load next 5
                    </Button>
                  )} */}
                  <Pagination
                    className={classes.paginationStyle}
                    defaultCurrent={1}
                    total={50}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
