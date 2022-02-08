import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Input, Select, Radio, Space, Button } from 'antd'

import classes from './SupplierCategoryDeatils.module.scss'
import { ArrowRightOutlined, PlusOutlined } from '@ant-design/icons'

const Option = Select
export default function SupplierCategoryDetails() {
  return (
    <>
      <div className={classes.mainSection}>
        <h3>Welcome!</h3>
        <h4>Help us to understand your business better.</h4>
        <p>(*Required field)</p>
        <hr />
        <h4>What product categories do you offer?</h4>
        <p>Select all that apply:</p>
        <Form layout="vertical">
          <Form.Item>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="1">Apparel</Radio>
                <Radio value="2">Fashion accessories</Radio>
                <Radio value="3">Jewellry</Radio>
                <Radio value="4">Home decor</Radio>
                <Radio value="5">Furniture</Radio>
                <Radio value="6">Textile</Radio>
                <Radio value="7">Cosmetics</Radio>
                <Radio value="8">Skincare </Radio>
                <Radio value="9">Other </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <h4>Where are your factories located? (City/County)</h4>
          <p>
            Click or tap on, “Add a location” button for additional locations:
          </p>
          <Form.Item label="Location1">
            <Row gutter={12}>
              <Col span={12}>
                <Form.Item label="City">
                  <Input size="large" placeholder="City..." />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="*County">
                  <Input size="large" placeholder="County..." />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button type="secondary">
                  <PlusOutlined />
                  Add a location
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <h4>Approximate amount of products output per month?</h4>
          <p>Choose the closest range:</p>
          <Form.Item>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="1 - 5,000">1 - 5,000</Radio>
                <Radio value="5,000 - 10,000">5,000 - 10,000</Radio>
                <Radio value="10,000 +">10,000 +</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <h4>Do you offer any “miscellaneous” type services?</h4>
          <p>Select all that apply:</p>
          <Form.Item>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="None">None</Radio>
                <Radio value="Pattern making">Pattern making</Radio>
                <Radio value="Design">DesignDesign</Radio>
                <Radio value="Dieline creation">Dieline creation</Radio>
                <Radio value="Structural design">Structural design</Radio>
                <Radio value="Other">Other</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Link
              className={classes.buttonHome}
              to="/signup/completed-supplier"
            >
              <h6>
                Get started
                <ArrowRightOutlined />
              </h6>
            </Link>
            {/* <Button
              size="large"
              style={{
                backgroundColor: '#000',
                width: '100%',
                border: '1px solid #000',
              }}
              type="primary"
              htmlType="submit"
            >
              Get started
              <ArrowRightOutlined />
            </Button> */}
          </Form.Item>
        </Form>
        <h5>
          You acknowledge that you have read and agree <br /> to our Terms of
          Service and Privacy Policy.
        </h5>
      </div>
    </>
  )
}
