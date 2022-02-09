import React from 'react'
import classes from './SupplierProfile.module.scss'
import Scroll from '../../common/Scroll/Scrollproducts'
import profileImage from '../../../assets/images/profile_image.png'
import { Row, Col, Breadcrumb, Button, Space } from 'antd'
import Tabs from '../../common/Tabs/Tabs'
import sampleImage1 from '../../../assets/images/sample_upload_1.png'
import sampleImage2 from '../../../assets/images/sample_upload_2.png'
import sampleImage3 from '../../../assets/images/sample_upload_3.png'
import sampleImage4 from '../../../assets/images/sample_upload_4.png'
import {
  RightOutlined,
  HeartOutlined,
  MessageOutlined,
} from '@ant-design/icons'
import Navigation from '../Homepage/Navigation/Navigation'

import data from './Data'
const SupplierProfile = () => {
  return (
    <>
      <Navigation />
      <div className={classes.section}>
        <Scroll />
      </div>
      <div className={classes.container}>
        <div className={classes.companyDetails}>
          <Row gutter={12}>
            <Col span={2}>
              <img src={profileImage} alt="uplio" />
            </Col>
            <Col span={12}>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="">Supplier</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Country</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">City</a>
                </Breadcrumb.Item>
              </Breadcrumb>
              <h3>Company Name</h3>
            </Col>
          </Row>
        </div>

        <div className={classes.section}>
          <Row gutter={12}>
            <Col span={18}>
              <Tabs data={data} />
            </Col>
            <Col span={6}>
              <Space direction="vertical" className={classes.buttonSection}>
                <Button block size="large" className={classes.buttonRequest}>
                  Request a quote <RightOutlined />
                </Button>
                <Button block size="large">
                  <MessageOutlined /> Contact Supplier
                </Button>
                <Button block size="large">
                  <HeartOutlined /> Add to favorites
                </Button>
              </Space>
            </Col>
          </Row>
        </div>
        <div classes={classes.section}>
          <Row>
            <Col span={4}>
              <div className={classes.companyDetailsTab}>
                <p>Production capacity</p>
                <h3>1-5,000 units/mo</h3>
              </div>
            </Col>
            <Col span={4}>
              <div className={classes.companyDetailsTab}>
                <p>Production capacity</p>
                <h3>1-5,000 units/mo</h3>
              </div>
            </Col>
            <Col span={4}>
              <div className={classes.companyDetailsTab}>
                <p>Estimated lead time</p>
                <h3>4-5 weeks</h3>
              </div>
            </Col>
            <Col span={4}>
              <div className={classes.companyDetailsTab}>
                <p>Established</p>
                <h3>1988</h3>
              </div>
            </Col>
          </Row>
          <hr />
          <h5>Specialization</h5>
          <Row>
            <Col span={4}>
              <div className={classes.companyDetailsImg}>
                <img src={sampleImage1} alt="uplio" />
                <p>Item Title</p>
                <h5>Detail copy</h5>
              </div>
            </Col>
            <Col span={4}>
              <div className={classes.companyDetailsImg}>
                <img src={sampleImage2} alt="uplio" />
                <p>Item Title</p>
                <h5>Detail copy</h5>
              </div>
            </Col>
            <Col span={4}>
              <div className={classes.companyDetailsImg}>
                <img src={sampleImage3} alt="uplio" />
                <p>Item Title</p>
                <h5>Detail copy</h5>
              </div>
            </Col>
            <Col span={4}>
              <div className={classes.companyDetailsImg}>
                <img src={sampleImage4} alt="uplio" />
                <p>Item Title</p>
                <h5>Detail copy</h5>
              </div>
            </Col>
          </Row>
          <div className={classes.section}></div>
        </div>
      </div>
    </>
  )
}
export default SupplierProfile
