import React from 'react'
import {
  Row,
  Col,
  Button,
  Space,
  Tag,
  Badge,
  Divider,
  Upload,
  Form,
  Input,
  Table,
} from 'antd'
import classes from './Orders.module.scss'

import data from './data'

import UploadImage from '../../../../components/Public/Quote/UploadImage'

import tick from '../../../../assets/svg/Tick.svg'
import cross from '../../../../assets/svg/Cross.svg'
import check from '../../../../assets/svg/Check.svg'

const columns = [
  {
    title: 'Order #',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Description',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Payment',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
  },
  {
    title: 'Shipment',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
]

const Orders = () => {
  return (
    <>
      <div className={classes.container}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <div className={classes.actionSection}>
              <Button
                type="primary"
                size="large"
                className={classes.actionButton}
              >
                <img src={tick} alt="Uplio" />
                In progress
              </Button>
              <Button
                size="large"
                type="link"
                className={classes.completedButton}
              >
                <img src={check} alt="Uplio" />
                Completed
              </Button>
              <Button
                size="large"
                type="link"
                className={classes.completedButton}
              >
                <img src={cross} alt="Uplio" />
                Canceled
              </Button>
            </div>
          </Col>
          <Col span={16}>
            <div className={classes.mainSection}>
              <Table columns={columns} dataSource={data} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Orders
