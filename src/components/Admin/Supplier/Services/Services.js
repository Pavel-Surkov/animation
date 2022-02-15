import React from 'react'
import {
  Row,
  Col,
  Button,
  Space,
  Badge,
  Divider,
  Upload,
  Form,
  Input,
} from 'antd'
import classes from './Services.module.scss'
import UploadImage from '../../../../components/Public/Quote/UploadImage'

import tick from '../../../../assets/svg/Tick.svg'
import rightArrow from '../../../../assets/svg/rightArrow.svg'
import plusIcon from '../../../../assets/svg/Plus.svg'

const { TextArea } = Input

const Services = () => {
  return (
    <>
      <div className={classes.container}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <div className={classes.actionSection}>
              <div className={classes.serviceAction}>
                <h3>Primary:</h3>
                <Button
                  type="primary"
                  size="large"
                  alt="Uplio"
                  className={classes.serviceButton}
                >
                  <img src={rightArrow} alt="Uplio" />
                  Service 1...
                </Button>
                <Button
                  type="link"
                  size="large"
                  alt="Uplio"
                  className={classes.addServiceButton}
                >
                  <img src={plusIcon} alt="Uplio" />
                  Add a service...
                </Button>
              </div>
              <div className={classes.specialtyAction}>
                <h3>Specialty:</h3>
                <Button
                  type="link"
                  size="large"
                  alt="Uplio"
                  className={classes.addServiceButton}
                >
                  <img src={plusIcon} alt="Uplio" />
                  Add a service...
                </Button>
              </div>
            </div>
          </Col>
          <Col span={16}>
            <div className={classes.mainSection}>
              <h3>Primary service.</h3>
              <p>Setup your services. </p>
              <Divider className={classes.divider} />
              <h4>Service details:</h4>
              <Row gutter={12}>
                <Col span={4}>
                  <UploadImage />
                </Col>
                <Col span={20}>
                  <Form layout="vertical">
                    <Form.Item label="Title">
                      <Input placeholder="Title..." size="large" />
                    </Form.Item>
                    <Row gutter={12}>
                      <Col span={12}>
                        <Form.Item label="Pricing">
                          <Input
                            prefix="$"
                            placeholder="Amount..."
                            size="large"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Title">
                          <Input
                            placeholder="Select a timeframe..."
                            size="large"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item label="Description">
                      <TextArea placeholder="Brief description..." rows={2} />
                    </Form.Item>
                    <Button size="large" className={classes.saveButton}>
                      <img src={tick} alt="Uplio" />
                      Save
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Services
