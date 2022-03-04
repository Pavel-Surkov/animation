import React, { useEffect, useState } from 'react'
import { Row, Col, Table, Tag, Spin, Space } from 'antd'
import classes from './MyQuote.module.scss'
import Navigation from '../Common/Navigation/Navigation'
import axios from 'axios'
import moment from 'moment'

const { Column, ColumnGroup } = Table

const MyQuote = () => {
  const token = localStorage.getItem('token')
  const [quoteData, setQuoteData] = useState()
  const [loading, setLoading] = useState(true)
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
            status: 'Quote Requested',
            date: moment(item.projectStartDate).format('MMM Do YY'),
            action: 'View Inquiry',
          })
        })
        setQuoteData([])
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
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24} align="center">
            <div className={classes.mainSection}>
              {loading ? (
                <>
                  <Spin />
                </>
              ) : (
                <Table dataSource={quoteData}>
                  <Column
                    title="Unit Price"
                    dataIndex="quoteId"
                    key="quoteId"
                  />
                  <Column
                    title="Lead time "
                    dataIndex="category"
                    key="category"
                  />
                  <Column title="MOQ" dataIndex="sendTo" key="sendTo" />
                  <Column title="Shipping" dataIndex="status" key="status" />
                  <Column title="Cost" dataIndex="date" key="date" />
                  <Column title="Action" dataIndex="action" key="action" />
                  Action
                </Table>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default MyQuote
