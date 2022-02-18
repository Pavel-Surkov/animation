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
  Empty,
  Divider,
  Spin,
} from 'antd'

import Navigation from '../../Public/Homepage/Navigation/Navigation'
import companyLogo from '../../../assets/images/profile_image.png'
import Rating from '../../common/Rating/Rating'
import { SearchOutlined, HeartOutlined } from '@ant-design/icons'
import Tags from '../../common/Tags/Tags'

import { Link, useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

export default function Products() {
  let { id } = useParams()
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [supplierData, setSupplierData] = useState([])
  const [pageinate, setPaginate] = useState(1)
  const [search, setSearch] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      history.push({ pathname: `/products/${newSearch}` })
      console.log('do validate')
    }
  }
  useEffect(() => {
    setLoading(true)
    setSearch(id)
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/suppliers?category=${id}`)
      .then((res) => {
        console.log(res)
        setLoading(false)
        setSupplierData(res.data.data)
        setPaginate(res.data.data.length)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [newSearch])

  return (
    <>
      <Navigation />

      <div className={classes.container}>
        <Row gutter={16}>
          <Col span={5}>
            <div className={classes.section}>
              <div className={classes.searchFilter}>
                <Input
                  value={newSearch}
                  size="large"
                  onChange={(e) => setNewSearch(e.target.value)}
                  placeholder="Search keywords..."
                  prefix={<SearchOutlined />}
                  onKeyDown={(e) => handleSearch(e)}
                />
                <h3>Ex. fabric, retro, minimal, etc...</h3>
              </div>
              {/* <div className={classes.filterOption}>
                <h3>Categories</h3>
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value="1">Favorites</Radio>
                    <Radio value="2">Availability</Radio>
                    <Radio value="3">Minimum Order Quantity</Radio>
                    <Radio value="4">Location</Radio>
                  </Space>
                </Radio.Group>
              </div> */}
            </div>
          </Col>
          <Col span={19}>
            <div className={classes.section}>
              <div className={classes.resultsHeader}>
                <h3>
                  {pageinate}+ Suppliers found for <strong>{id}</strong>
                </h3>
              </div>
              <div className={classes.productSection}>
                {supplierData.length > 0 ? (
                  supplierData.map((item) => (
                    <>
                      <Divider />
                      <Link
                        className={classes.cardLink}
                        to={`/profile/${item._id}`}
                      >
                        <Row
                          gutter={16}
                          // justify="space-between"
                        >
                          <Col span={8}>
                            <div className={classes.productImg}>
                              <Row>
                                <Col span={8}>
                                  <div className={classes.logoImg}>
                                    <img
                                      width={65}
                                      height={65}
                                      src={item.companyLogo}
                                      alt="uplio"
                                    />
                                    {/* <Tags prop="top rated" />
                                <Tags prop="approved" />
                                <Tags prop="hot seller" /> */}
                                  </div>
                                </Col>
                                <Col span={16}>
                                  <h2>{item.companyName}</h2>
                                  {/* <Rating value={1} /> */}
                                  {/* <div className={classes.ratingText}>
                                <h3>
                                  <span> 4.5 Ups</span>
                                  <Divider
                                    type="vertical"
                                    className={classes.ratingTextDivider}
                                  />
                                  <span>123 Reviews</span>
                                </h3>
                              </div> */}

                                  <Row>
                                    {/* <Col span={6}>
                                  <Button className={classes.wishlistButton}>
                                    <HeartOutlined />
                                  </Button>
                                </Col> */}
                                    <Col span={24}>
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
                                    <strong>{item.MOQ}</strong>
                                  </span>
                                  <Divider
                                    className={classes.dividerForServices}
                                    type="horizontal"
                                  />
                                  <p>{item.specialization}</p>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col span={5}>
                            <div className={classes.productImg}>
                              <img
                                width={175}
                                height={175}
                                src={item.images[0]}
                                alt="uplio"
                              />
                            </div>
                          </Col>
                          <Col span={5}>
                            <div className={classes.productImg}>
                              <img
                                width={175}
                                height={175}
                                src={item.images[1]}
                                alt="uplio"
                              />
                            </div>
                          </Col>
                          <Col span={5}>
                            <div className={classes.productImg}>
                              <img
                                width={175}
                                height={175}
                                src={item.images[2]}
                                alt="uplio"
                              />
                            </div>
                          </Col>
                        </Row>
                      </Link>
                    </>
                  ))
                ) : (
                  <Empty />
                )}
                <div className={classes.section}>
                  <Pagination
                    className={classes.paginationStyle}
                    defaultCurrent={1}
                    total={pageinate}
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
