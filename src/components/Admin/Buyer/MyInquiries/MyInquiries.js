import React, { useEffect, useState } from 'react'
import { Row, Col, Divider, Table, Tag, Spin, Space } from 'antd'
import classes from './MyInquiries.module.scss'
import Navigation from '../../../../constant/public/Navigation/Navigation'
import Footer from '../../../../constant/public/Footer/Footer'
import axios from 'axios'
import moment from 'moment'
import { Link, useHistory } from 'react-router-dom'
import clsx from 'clsx'
const { Column, ColumnGroup } = Table

const MyInquiries = () => {
  const history = useHistory()
  const token = sessionStorage.getItem('token')
  const [quoteData, setQuoteData] = useState()
  const [loading, setLoading] = useState(true)

  const handleStatus = (status) => {
    if (status === 0) {
      return 'Quote Requested'
    } else if (status === 1) {
      return 'Quote Submitted'
    } else if (status === 2) {
      return 'Awaiting Manufacturer Response'
    } else if (status === 3) {
      return 'Quote Received'
    } else if (status === 4) {
      return 'More Information Needed'
    }
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/quotes/get_user_quotes`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setLoading(false)
        const quoteDataArray = []
        res.data.data.map((item) => {
          quoteDataArray.push({
            //     key: item._id,
            quoteId: item.quoteNumber,
            category: item.productCategory,
            sendTo: 'Uplio',
            status: handleStatus(item.quote_status),
            date: moment(item.projectStartDate).format('MMM Do YY'),
            action: item._id,
          })
        })
        setQuoteData(quoteDataArray)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }, [])
  return (
    <>
      <Navigation />

      <div className={classes.container}>
        <div className={classes.responsiveHeader}>
          <div className={classes.mainSectionHeading}>
            <h3>Quotes</h3>
          </div>
        </div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col lg={6} md={6} sm={0} xs={0}>
            <div className={classes.actionSection}>
              <button
                onClick={() => {
                  history.push('/dashboard/buyer/inquiries')
                }}
                type="primary"
                className={clsx([classes.actionButton, classes.active])}
              >
                Quotes
              </button>

              <button
                className={classes.actionButton}
                onClick={() => {
                  history.push('/coming-soon')
                }}
              >
                Message Center
              </button>
              <button className={classes.actionButton}>Orders</button>
              <button
                onClick={() => {
                  history.push('/dashboard/buyer/profile')
                }}
                className={clsx([classes.actionButton, classes.borderTop])}
              >
                Account Settings
              </button>
              <button
                className={classes.actionButton}
                onClick={() => {
                  history.push('/coming-soon')
                }}
              >
                Shipping and Payment Information
              </button>
              <button className={classes.actionButton}>Log Out</button>
            </div>
          </Col>
          <Col lg={18} md={18} sm={24} xs={24} align="center">
            <div className={classes.mainSection}>
              {loading ? (
                <>
                  <Spin />
                </>
              ) : (
                <>
                  <div className={classes.table}>
                    {quoteData !== undefined
                      ? quoteData.map((item) => (
                          <Row className={classes.tableContent}>
                            <Col lg={4} md={4} sm={12} xs={12}>
                              <h3>Quote ID: </h3>
                              <h2>{item.quoteId}</h2>
                            </Col>
                            <Col lg={7} md={7} sm={12} xs={12}>
                              <h3>Supplier:</h3>
                              <h2>{item.category}</h2>
                            </Col>
                            <Col lg={5} md={5} sm={12} xs={12}>
                              <h3>Date </h3>
                              <h2>{item.date}</h2>
                            </Col>
                            <Col lg={5} md={5} sm={12} xs={12}>
                              <h3>Status: </h3>
                              <h2>{item.status}</h2>
                            </Col>
                            <Col lg={3} md={3} sm={12} xs={12}>
                              <h4>SEE MORE </h4>
                            </Col>
                          </Row>
                        ))
                      : null}
                  </div>
                </>
              )}
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}
export default MyInquiries
