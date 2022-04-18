import React, { useEffect, useState } from 'react'
import { Row, Col, Table, Tag, Spin, Space } from 'antd'
import classes from './MyQuote.module.scss'
import { Link } from 'react-router-dom'
import Navigation from '../Common/Navigation/Navigation'
import axios from 'axios'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { render } from '@testing-library/react'

const { Column, ColumnGroup } = Table

const MyQuote = () => {
  let { id } = useParams()
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
      .get(
        `${process.env.REACT_APP_API_URL}/quotes/${id}/get_supplier_quotes_by_quoteId`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setLoading(false)
        const quoteDataArray = []
        res.data.data.map((item) => {
          quoteDataArray.push({
            //     key: item._id,
            supplier: item.user_id.name,
            unitPrice: item.unitPrice,
            leadTime: item.leadTime,
            moq: item.MOQ,
            status: handleStatus(item.status),
            shippingCost: item.shippingCost,
            action: 'Get more info',
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
              <h3>My Inquiries </h3>
            </Link>
            <p>My quotes </p>
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
                  <Column
                    title="Supplier"
                    dataIndex="supplier"
                    key="supplier"
                  />
                  <Column
                    title="Unit Price"
                    dataIndex="unitPrice"
                    key="unitPrice"
                  />
                  <Column
                    title="Lead time "
                    dataIndex="leadTime"
                    key="leadTime"
                  />
                  <Column title="MOQ" dataIndex="moq" key="moq" />
                  <Column title="Shipping" dataIndex="status" key="status" />
                  <Column
                    title="Cost"
                    dataIndex="shippingCost"
                    key="shippingCost"
                  />
                  <Column title="Action" dataIndex="action" key="action" />
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
