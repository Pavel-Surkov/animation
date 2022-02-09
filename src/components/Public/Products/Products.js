import React from 'react'
import classes from './Products.module.scss'
import { Row, Col, Input, Radio, Space, Rate, Button, Divider } from 'antd'
import image1 from '../../../assets/images/product_image_1.png'
import image2 from '../../../assets/images/product_image_2.png'
import image3 from '../../../assets/images/product_image_3.png'
import Navigation from '../../Public/Homepage/Navigation/Navigation'
import companyLogo from '../../../assets/images/profile_image.png'
import { SearchOutlined, HeartOutlined } from '@ant-design/icons'
export default function Products() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
                    <Row gutter={10}>
                      <Col span={6}>
                        <div className={classes.productImg}>
                          <Row>
                            <Col span={8}>
                              <img src={companyLogo} alt="uplio" />
                            </Col>
                            <Col span={16}>
                              <h2>Company Name</h2>
                              <span>4.5 Ups | </span>
                              <Rate
                                className={classes.rating}
                                disabled
                                defaultValue={2}
                              />
                              <Space>
                                <Button className={classes.wishlistButton}>
                                  <HeartOutlined />
                                </Button>
                                <Button className={classes.contactButton}>
                                  Contact
                                </Button>
                              </Space>
                              <span>
                                Minimum Order |<strong>500</strong>
                              </span>
                              <p>
                                Service 1, Service 2, Service 3, Service 4,
                                Customized Service
                              </p>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col span={6}>
                        <div className={classes.productImg}>
                          <img src={image1} alt="uplio" />
                        </div>
                      </Col>
                      <Col span={6}>
                        <div className={classes.productImg}>
                          <img src={image2} alt="uplio" />
                        </div>
                      </Col>

                      <Col span={6}>
                        <div className={classes.productImg}>
                          <img src={image3} alt="uplio" />
                        </div>
                      </Col>
                    </Row>
                  </>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
