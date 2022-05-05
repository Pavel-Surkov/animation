import React, { useState, useEffect } from 'react'
import classes from './SupplierProfile.module.scss'
import verified_tag from '../../../assets/svg/verified_tag.svg'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import rightArrow from '../../../assets/svg/Arrow_indicator_left_black.svg'
import leftArrow from '../../../assets/svg/Arrow_indicator_right_black.svg'
import ButtonWithRightArrow from '../../../constant/public/ButtonWithRightArrow/ButtonWithRightArrow'

import { Row, Col, Carousel, Breadcrumb, Button, Space, Spin } from 'antd'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

import Navigation from '../../../constant/public/Navigation/Navigation'
import Footer from '../../../constant/public/Footer/Footer'

const SupplierProfile = () => {
  const history = useHistory()
  let { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [supplierData, setSupplierData] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/supplier_profile/${id}`)
      .then((res) => {
        setSupplierData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Navigation />
      {!loading ? (
        <>
          <div className={clsx(classes.container, classes.main)}>
            <div className={classes.companyDetails}>
              <img
                width={48}
                height={48}
                className={classes.logoImg}
                src={supplierData.companyLogo}
                alt="uplio"
              />
              <h1>{supplierData.companyName}</h1>
              <h4>
                <img src={verified_tag} alt="Uplio" />
                Verified Supplier
              </h4>
            </div>

            {!loading ? (
              <div className={classes.mainSection}>
                <Row gutter={12}>
                  <Col md={18} lg={18} sm={24} xs={24}>
                    <div className={classes.carousel}>
                      <Row gutter={[24, 24]}>
                        <Col span={14}>
                          {supplierData.images[0] !== undefined ? (
                            <img
                              width={558}
                              src={supplierData.images[0]}
                              alt="uplio"
                            />
                          ) : null}
                        </Col>
                        <Col span={10}>
                          <Row gutter={[24, 24]}>
                            <Col span={24}>
                              <img
                                width={325}
                                src={
                                  supplierData.images[1] !== undefined
                                    ? supplierData.images[1]
                                    : null
                                }
                                alt="uplio"
                              />
                            </Col>
                            <Col span={24}>
                              <img
                                width={325}
                                src={
                                  supplierData.images[2] !== undefined
                                    ? supplierData.images[2]
                                    : null
                                }
                                alt="uplio"
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <div className={classes.actionButton}>
                        <Space size={24}>
                          <button>
                            <img src={leftArrow} alt="Uplio" />
                          </button>
                          <button>
                            <img src={rightArrow} alt="Uplio" />
                          </button>
                        </Space>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={6} xs={24} sm={24}>
                    <div className={classes.quoteButton}>
                      <ButtonWithRightArrow
                        function={() =>
                          history.push({
                            pathname: `/quote/${id}`,
                          })
                        }
                        content="GET A QUOTE"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            ) : null}

            <div
              className={clsx(
                classes.supplierSection,
                classes.supplierSectionTopBorder
              )}
            >
              <h2>About Supplier</h2>
              <h3>Production capacity:</h3>
              <h3>
                Minimum Order: <strong>{supplierData.MOQ}</strong>
              </h3>
              <h3>
                Est. Leadtime: <strong>{supplierData.averageLeadtime}</strong>
              </h3>
              <h3>Established:</h3>
              <h3>Location:</h3>
              <h3>Response Rate:</h3>
            </div>

            <div
              className={clsx(
                classes.supplierSection,

                classes.supplierSectionTopBorder
              )}
            >
              <h2>Overview</h2>
              <p>{supplierData.companyOverview}</p>
            </div>
            <div
              className={clsx(
                classes.supplierSection,
                classes.supplierSectionTopBorder,
                classes.supplierSectionBottomBorder
              )}
            >
              <h2>Specialization</h2>
              <ul>
                {!loading
                  ? supplierData.specialization.split(',').map((item) => (
                      <li>
                        <Link to={`/products/${item}`}>{item}</Link>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <div className={classes.spin}>
          <Spin />
        </div>
      )}
    </>
  )
}

export default SupplierProfile
