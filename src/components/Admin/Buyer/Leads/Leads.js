import React from 'react'
import { Row, Col, Button, Space, Badge, Divider } from 'antd'
import classes from './Leads.module.scss'

import message from '../../../../assets/svg/Message.svg'
import check from '../../../../assets/svg/Tick.svg'
import cross from '../../../../assets/svg/Cross.svg'
import chat from '../../../../assets/svg/Chat.svg'

const Leads = () => {
  const arr = [1, 2, 3]

  return (
    <>
      <div className={classes.container}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <div className={classes.navigateSection}>
              <Button
                className={classes.opportunityButton}
                size="large"
                type="primary"
              >
                <img src={message} alt="Uplio" />
                Opportunities
              </Button>
              <Button
                className={classes.directMessageButton}
                size="large"
                type="link"
              >
                <img src={chat} alt="Uplio" />
                Direct Requests
              </Button>
            </div>
          </Col>
          <Col span={16}>
            <div className={classes.mainSection}>
              <h3>Opportunity knocks...</h3>
              <p>Take a look at the requests we found for you. </p>
              <Divider />
              {arr.map((lead) => {
                return (
                  <div className={classes.leadSection}>
                    <div className={classes.leadMainSection}>
                      <Row gutter={12}>
                        <Col span={12}>
                          <Space>
                            <Badge dot={true}>
                              <h5>Company name</h5>
                            </Badge>
                            <p>12:10 PM</p>
                          </Space>
                        </Col>
                        <Col span={12}>
                          <div className={classes.messageSection}>
                            <Button
                              type="primary"
                              size="large"
                              className={classes.messageButton}
                            >
                              Message
                            </Button>
                          </div>
                        </Col>
                      </Row>
                      <h4>Contact name</h4>
                      <Divider className={classes.divider} />
                      <p>
                        Morbi massa ut aliquam velit nullam quam a morbi.
                        Tincidunt sed in aliquam mi pulvinar mauris vel mollis
                        arcu. Ut proin enim sem neque venenatis laoreet.
                      </p>
                    </div>
                    <div className={classes.action}>
                      <Row gutter={12}>
                        <Col span={12}>
                          <Button size="large" className={classes.acceptButton}>
                            <img src={check} alt="Uplio" /> Accept
                          </Button>
                        </Col>
                        <Col span={12}>
                          <Button size="large" className={classes.cancelButton}>
                            <img src={cross} alt="Uplio" /> Pass
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                )
              })}
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Leads
