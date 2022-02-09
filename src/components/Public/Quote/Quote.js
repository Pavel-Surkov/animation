import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Input, Select } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import UploadImage from './UploadImage'
import logo from '../../../assets/svg/logo_black_medium.svg'
import Navigation from '../../../components/Public/Homepage/Navigation/Navigation'
import classes from './Quote.module.scss'
const { TextArea } = Input
const Option = Select
function Quote() {
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <Link to="/">
            <img src={logo} alt="uplio" />
          </Link>
          <div className={classes.textOverlaySupplier}>
            <h1>Specs</h1>
          </div>
        </div>
        <div className={classes.mainSection}>
          <h3>View</h3>
          <h4>Opening an existing spec sheet document.</h4>

          <hr />
          <h4>Category:</h4>

          <Form layout="vertical">
            {/* <Form.Item label="Product category">
              <Select
                style={{ width: '100%' }}
                defaultValue="Select"
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
            </Form.Item> */}

            <Form.Item>
              <Row gutter={12}>
                <Col span={20}>
                  <Form.Item label="Product category">
                    <Select
                      style={{ width: '100%' }}
                      defaultValue="Select"
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
                </Col>
                <Col span={4}>
                  <Form.Item label="Color">
                    <Select
                      style={{ width: '100%' }}
                      defaultValue="Select"
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
                </Col>
              </Row>
            </Form.Item>
            <h4>Project details:</h4>
            <Form.Item>
              <Input
                value="Wooden Brushes - Washington Dental Group Anual Galla"
                size="large"
                allowClear
              />
            </Form.Item>
            <Row gutter={12}>
              <Col span={12}>
                <Form.Item label="Project start date">
                  <Input value="9/6/2021" size="large" allowClear />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Target launch date">
                  <Input value="9/6/2021" size="large" allowClear />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Quantity">
                  <Input value="500" size="large" allowClear />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Budget">
                  <Input prefix="$" value="1900" size="large" allowClear />
                </Form.Item>
              </Col>
            </Row>
            <h4>Project reference files:</h4>
            <p>Images or sourced documents such as tech packs</p>
            <Form.Item>
              <UploadImage />
            </Form.Item>
            <hr />
            <h4>Inspiration files:</h4>
            <p>
              Images/design so that your supplier gets an idea of the style you
              are looking for
            </p>
            <Form.Item>
              <UploadImage />
            </Form.Item>
            <hr />
            <h4>Project description:</h4>
            <p>
              Briefly explain what you are looking for. (ex. We are looking to
              design active wear. We would like the fabric to be at least 90%
              cotton and include our brand logo.)
            </p>
            <Form.Item>
              <TextArea
                rows={5}
                size="large"
                value="We are looking to provide eco-friendly wooden toothbrushes as give aways."
              />
            </Form.Item>

            <Form.Item>
              <Link className={classes.buttonHome} to="/">
                <h6>
                  Start from scratch
                  <ArrowRightOutlined />
                </h6>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}
export default Quote
