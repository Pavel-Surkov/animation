import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Radio, Select } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import classes from './SupplierAccountDetails.module.scss'
const { Option } = Select
const SupplierAccountDetails = () => {
  return (
    <>
      <div className={classes.mainSection}>
        <h3>Start your Uplio account.</h3>
        <h4>
          Already have an account? <Link to="/login">Sign In</Link>
        </h4>
        <p>(*Required field)</p>
        <hr />
        <Form layout="vertical">
          <Form.Item label="*Full name">
            <Input size="large" placeholder="Full name..." />
          </Form.Item>
          <Form.Item label="*Company name">
            <Input size="large" placeholder="Company name..." />
          </Form.Item>
          <Form.Item label="*Phone number">
            <Input size="large" placeholder="+1 (XXX) XXX-XXXX" />
          </Form.Item>
          <Form.Item label="Work email (optional)">
            <Input size="large" placeholder="Email address..." />
          </Form.Item>
          <Form.Item label="Website URL (optional)">
            <Input size="large" placeholder="ex: https://www.yourwebsite.com" />
          </Form.Item>
          <Form.Item label="*Country">
            <Select
              style={{ width: '100%' }}
              defaultValue="Country"
              allowClear
              size="large"
            >
              <Option value="Option 1">Option 1</Option>
              <Option value="Option 2">Option 2</Option>
              <Option value="Option 3">Option 3</Option>
              <Option value="Option 4">Option 4</Option>
              <Option value="Option 5">Option 5</Option>
              <Option value="Option 6">Option 6</Option>
              <Option value="Option 7">Option 7</Option>
              <Option value="Option 8">Option 8</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Link className={classes.buttonHome} to="/signup/supplier-details">
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

export default SupplierAccountDetails
