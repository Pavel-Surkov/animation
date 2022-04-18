import classes from './DirectLead.module.scss'
import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Space, Badge, Divider } from 'antd'
import axios from 'axios'
import { useSelector } from 'react-redux'
import message from '../../../../assets/svg/Message.svg'
import check from '../../../../assets/svg/Tick.svg'
import cross from '../../../../assets/svg/Cross.svg'
import chat from '../../../../assets/svg/Chat.svg'
import { useHistory } from 'react-router-dom'

import moment from 'moment'
import loader from '../../../../assets/gif/loader.gif'

const DirectLeads = () => {
  const token = sessionStorage.getItem('token')
  const history = useHistory()
  const userId = useSelector((state) => state.user.user.id)
  const arr = [1]
  const [loading, setLoading] = useState(true)
  const [leads, setLeads] = useState([])
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/quotes/${userId}/get_buyer_quotes_by_supplierId`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setLoading(false)
        setLeads(res.data.data)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }, [])

  return (
    <>
      <div className={classes.container}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <div className={classes.navigateSection}>
              <Button
                onClick={() =>
                  history.push({ pathname: '/dashboard/supplier/lead' })
                }
                className={classes.directMessageButton}
                size="large"
                type="link"
              >
                <img src={chat} alt="Uplio" />
                Opportunities
              </Button>
              <Button
                onClick={() =>
                  history.push({ pathname: '/dashboard/supplier/direct-lead' })
                }
                className={classes.opportunityButton}
                size="large"
                type="primary"
              >
                <img src={message} alt="Uplio" />
                Direct Requests
              </Button>
            </div>
          </Col>
          <Col span={16}>
            <div className={classes.mainSection}>
              <h3>Direct Requests...</h3>
              {/* <p>Take a look at the requests we found for you. </p> */}
              <Divider />
              {loading ? (
                <div className={classes.loader}>
                  <img src={loader} alt="uplio" />
                </div>
              ) : (
                <>
                  {' '}
                  {leads.map((lead) => {
                    return (
                      <div className={classes.leadSection}>
                        <div className={classes.leadMainSection}>
                          <Row gutter={12}>
                            <Col span={12}>
                              <Space>
                                {/* <Badge dot={true}> */}
                                <h5>{lead.projectName}</h5>
                                {/* </Badge> */}
                                <p>
                                  {moment(lead.projectLaunchDate).format(
                                    'MMM Do YY'
                                  )}
                                </p>
                              </Space>
                            </Col>
                            <Col span={12}>
                              <div className={classes.messageSection}>
                                {/* <Button
                                  type="primary"
                                  size="large"
                                  className={classes.messageButton}
                                >
                                  Message
                                </Button> */}
                              </div>
                            </Col>
                          </Row>
                          <h4>{lead.user.name}</h4>
                          <Divider className={classes.divider} />
                          <p>{lead.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default DirectLeads
