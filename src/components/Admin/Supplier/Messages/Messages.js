import React from 'react'
import { Row, Col, Button, Space, Badge, Divider } from 'antd'
import classes from './Messages.module.scss'

import userImg1 from '../../../../assets/images/user_sample_icon_1.png'
import userImg2 from '../../../../assets/images/user_sample_icon_2.png'
import userImg3 from '../../../../assets/images/user_sample_icon_3.png'
import userImg4 from '../../../../assets/images/user_sample_icon_4.png'

const Messages = () => {
  const renderContactList = () => {
    return (
      <>
        <div className={classes.contactDetailActive}>
          <Row gutter={12}>
            <Col span={4}>
              <Badge dot={false}>
                <img src={userImg1} alt="Uplio" />
              </Badge>
            </Col>
            <Col span={20}>
              <Row>
                <Col span={20}>
                  <h3>Company Name</h3>
                </Col>
                <Col span={4}>
                  <p>1m ago</p>
                </Col>
              </Row>
              <h4>Buyer Name</h4>
              <p>Message content will fill up here...</p>
            </Col>
          </Row>
        </div>
        <div className={classes.contactDetail}>
          <Row gutter={12}>
            <Col span={4}>
              <Badge count={999} dot={false}>
                <img src={userImg2} alt="Uplio" />
              </Badge>
            </Col>
            <Col span={20}>
              <Row>
                <Col span={20}>
                  <h3>Company Name</h3>
                </Col>
                <Col span={4}>
                  <p>1m ago</p>
                </Col>
              </Row>
              <h4>Buyer Name</h4>
              <p>Message content will fill up here...</p>
            </Col>
          </Row>
        </div>
        <div className={classes.contactDetail}>
          <Row gutter={12}>
            <Col span={4}>
              <Badge count={23} dot={false}>
                <img src={userImg3} alt="Uplio" />
              </Badge>
            </Col>
            <Col span={20}>
              <Row>
                <Col span={20}>
                  <h3>Company Name</h3>
                </Col>
                <Col span={4}>
                  <p>1m ago</p>
                </Col>
              </Row>
              <h4>Buyer Name</h4>
              <p>Message content will fill up here...</p>
            </Col>
          </Row>
        </div>
        <div className={classes.contactDetail}>
          <Row gutter={12}>
            <Col span={4}>
              <Badge count={5} dot={false}>
                <img src={userImg4} alt="Uplio" />
              </Badge>
            </Col>
            <Col span={20}>
              <Row>
                <Col span={20}>
                  <h3>Company Name</h3>
                </Col>
                <Col span={4}>
                  <p>1m ago</p>
                </Col>
              </Row>
              <h4>Buyer Name</h4>
              <p>Message content will fill up here...</p>
            </Col>
          </Row>
        </div>
      </>
    )
  }

  return (
    <>
      <div className={classes.container}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <div className={classes.contactSection}>{renderContactList()}</div>
          </Col>
          <Col span={16}>
            <div className={classes.mainSection}>
              <div className={classes.messageBubble}>
                <Row gutter={12}>
                  <Col span={2}>
                    <img src={userImg1} alt="uplio" />
                  </Col>
                  <Col span={22}>
                    <Space>
                      <h3>Company name</h3>
                      <p>8:50 AM</p>
                    </Space>
                    <h4>Contact name</h4>
                    <Divider className={classes.divider} />
                    <p>
                      Morbi massa ut aliquam velit nullam quam a morbi.
                      Tincidunt sed in aliquam mi pulvinar mauris vel mollis
                      arcu. Ut proin enim sem neque venenatis laoreet.
                    </p>
                  </Col>
                </Row>
              </div>
              <div className={classes.messageBubbleUser}>
                <Row gutter={12}>
                  <Col span={2}>
                    <img src={userImg4} alt="uplio" />
                  </Col>
                  <Col span={22}>
                    <Space>
                      <h3>Company name</h3>
                      <p>8:50 AM</p>
                    </Space>
                    <h4>Contact name</h4>
                    <Divider className={classes.divider} />
                    <p>
                      Neque massa etiam semper maecenas. Tellus sed varius nunc
                      mauris amet. Ut erat enim amet, mattis nec, enim ut. Arcu
                      sit velit posuere egestas at scelerisque nulla est. A eu
                      porttitor sit augue quam id sit volutpat integer.
                      Suspendisse sit facilisi urna tellus etiam elementum,
                      sagittis.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <div>
              <div className={classes.messageEditor}>
                <Button
                  type="primary"
                  size="large"
                  className={classes.sendButton}
                >
                  Send
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Messages
