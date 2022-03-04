import React from 'react'
import { Row, Col, Table, Tag, Space } from 'antd'
import classes from './MyInquiries.module.scss'

import message from '../../../../assets/svg/Message.svg'
import check from '../../../../assets/svg/Tick.svg'
import cross from '../../../../assets/svg/Cross.svg'
import chat from '../../../../assets/svg/Chat.svg'
import Navigation from '../Common/Navigation/Navigation'
const { Column, ColumnGroup } = Table
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

const MyInquiries = () => {
  const arr = [1, 2, 3]

  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <div className={classes.mainSection}>
              <Table dataSource={data}>
                <Column title="Quote ID" dataIndex="quoteId" key="quoteId" />
                <Column title="Category" dataIndex="category" key="category" />
                <Column title="Send to" dataIndex="sendTo" key="sendTo" />
                <Column title="Send to" dataIndex="sendTo" key="sendTo" />
                <Column title="Status" dataIndex="sendTo" key="sendTo" />
                <Column title="Date" dataIndex="sendTo" key="sendTo" />
                <Column title="Date" dataIndex="Submitted Date" key="sendTo" />
                Action
              </Table>
              ,
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default MyInquiries
