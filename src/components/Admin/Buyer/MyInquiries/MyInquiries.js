import React, { useEffect, useState } from 'react'
import { Row, Col, Divider, Table, Tag, Spin, Space } from 'antd'
import classes from './MyInquiries.module.scss'
import Navigation from '../Common/Navigation/Navigation'
import axios from 'axios'
import moment from 'moment'
import { Link, useHistory } from 'react-router-dom'
const { Column, ColumnGroup } = Table

const MyInquiries = () => {
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
        <div className={classes.navigationLinks}>
          <Space size={40}>
            <Link to="/dashboard/buyer/inquiries">
              <p>My Inquiries </p>
            </Link>
            <h3>My quotes</h3>
          </Space>
        </div>
      </div>

      <div className={classes.container}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24} align="center">
            <div className={classes.mainSection}>
              {loading ? (
                <>
                  <Spin />
                </>
              ) : (
                <Table dataSource={quoteData}>
                  <Column title="Quote ID" dataIndex="quoteId" key="quoteId" />
                  <Column
                    title="Category"
                    dataIndex="category"
                    key="category"
                  />
                  <Column title="Send to" dataIndex="sendTo" key="sendTo" />
                  <Column title="Status" dataIndex="status" key="status" />
                  <Column title="Date Submitted" dataIndex="date" key="date" />
                  <Column
                    title="Action"
                    dataIndex="action"
                    key="action"
                    render={(id) => (
                      <Link to={`/dashboard/buyer/quote/${id}`}>
                        View Inquiry
                      </Link>
                    )}
                  />
                </Table>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default MyInquiries
