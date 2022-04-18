import React, { useEffect, useState } from 'react'
import { Row, Col, Input, Button, Space, Empty, Badge, Divider } from 'antd'
import axios from 'axios'
import { useSelector } from 'react-redux'
import classes from './Messages.module.scss'
import data from './Data'
import userImg1 from '../../../../assets/images/user_sample_icon_1.png'
import userImg2 from '../../../../assets/images/user_sample_icon_2.png'
import userImg3 from '../../../../assets/images/user_sample_icon_3.png'
import userImg4 from '../../../../assets/images/user_sample_icon_4.png'
import userTemp from '../../../../assets/images/sample_logo_img.png'
const { TextArea } = Input

const Messages = () => {
  const token = sessionStorage.getItem('token')
  const userId = useSelector((state) => state.user.user.id)
  const [message, setMessage] = useState()
  const [draftMessage, setDraftMessage] = useState('')
  const [chatData, setChatData] = useState()
  const [loading, setLoading] = useState(true)
  const [selectedChat, setSelectedChat] = useState()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/messages/get-messages/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setLoading(false)
        setMessage(res.data.messages)
        setSelectedChat(res.data.messages[0].messages)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }, [])

  // useEffect(() => {
  //   setChatData(data[0].messages)
  // }, [])

  const renderContactList = (data) => {
    if (message === undefined) {
      return <Empty description={false} />
    } else {
      return message.map((item) => (
        <div className={classes.contactDetail}>
          <Row gutter={12}>
            <Col span={4}>
              <Badge dot={false}>
                <img
                  src={
                    item.buyer.profileImage === ''
                      ? userTemp
                      : item.buyer.profileImage
                  }
                  alt="Uplio"
                />
              </Badge>
            </Col>
            <Col span={20}>
              <Row>
                <Col span={20}>
                  <h3>{item.buyer.companyName}</h3>
                </Col>
                <Col span={4}>{/* <p>1m ago</p> */}</Col>
              </Row>
              <h4>{item.buyer.name}</h4>
              {/* <p>{item.messages[0].message}</p> */}
            </Col>
          </Row>
        </div>
      ))
    }

    // return (
    //   <>
    //     {/* <div className={classes.contactDetail}>
    //       <Row gutter={12}>
    //         <Col span={4}>
    //           <Badge count={999} dot={false}>
    //             <img src={userImg2} alt="Uplio" />
    //           </Badge>
    //         </Col>
    //         <Col span={20}>
    //           <Row>
    //             <Col span={20}>
    //               <h3>Company Name</h3>
    //             </Col>
    //             <Col span={4}>
    //               <p>1m ago</p>
    //             </Col>
    //           </Row>
    //           <h4>Buyer Name</h4>
    //           <p>Message content will fill up here...</p>
    //         </Col>
    //       </Row>
    //     </div> */}
    //     {/* <div className={classes.contactDetail}>
    //       <Row gutter={12}>
    //         <Col span={4}>
    //           <Badge count={23} dot={false}>
    //             <img src={userImg3} alt="Uplio" />
    //           </Badge>
    //         </Col>
    //         <Col span={20}>
    //           <Row>
    //             <Col span={20}>
    //               <h3>Company Name</h3>
    //             </Col>
    //             <Col span={4}>
    //               <p>1m ago</p>
    //             </Col>
    //           </Row>
    //           <h4>Buyer Name</h4>
    //           <p>Message content will fill up here...</p>
    //         </Col>
    //       </Row>
    //     </div> */}
    //     {/* <div className={classes.contactDetail}>
    //       <Row gutter={12}>
    //         <Col span={4}>
    //           <Badge count={5} dot={false}>
    //             <img src={userImg4} alt="Uplio" />
    //           </Badge>
    //         </Col>
    //         <Col span={20}>
    //           <Row>
    //             <Col span={20}>
    //               <h3>Company Name</h3>
    //             </Col>
    //             <Col span={4}>
    //               <p>1m ago</p>
    //             </Col>
    //           </Row>
    //           <h4>Buyer Name</h4>
    //           <p>Message content will fill up here...</p>
    //         </Col>
    //       </Row>
    //     </div> */}
    //   </>
    // )
  }

  const renderChatBox = (data) => {
    if (selectedChat !== undefined) {
      return (
        <>
          <div className={classes.mainSection}>
            {data === undefined
              ? null
              : data.map((item) => (
                  <div
                    className={
                      item.messageType === 'supplier'
                        ? classes.messageBubbleUser
                        : classes.messageBubble
                    }
                  >
                    <Row gutter={12}>
                      {/* <Col span={2}>
                    <img src={userImg1} alt="uplio" />
                  </Col> */}
                      <Col span={24}>
                        {/* <Space>
                      <h3>{item.messageType}</h3>
                      <p>8:50 AM</p>
                    </Space>
                    <h4>Contact name</h4>
                    <Divider className={classes.divider} /> */}
                        <p>{item.message}</p>
                      </Col>
                    </Row>
                  </div>
                ))}
          </div>
          <div>
            <div className={classes.messageEditor}>
              <Row justify="space-between">
                <Col span={21}>
                  <TextArea
                    value={draftMessage}
                    onChange={(e) => setDraftMessage(e.target.value)}
                    autoSize={{ minRows: 3, maxRows: 5 }}
                  />
                </Col>
                <Col span={2}>
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => sendMessage()}
                    className={classes.sendButton}
                  >
                    Send
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={classes.mainSection}>
            <Empty description="No Message" />
          </div>
        </>
      )
    }
  }

  const sendMessage = () => {
    selectedChat.push({
      messageType: 'buyer',
      message: draftMessage,
    })

    //sending message

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/messages/send-chat-messages/${userId}`,
        {
          buyer: '620cc5b7ddbbd410b0e3615c',
          message: { messageType: 'buyer', message: draftMessage },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })

    setDraftMessage('')
  }

  return (
    <>
      <div className={classes.container}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <div className={classes.contactSection}>
              {loading ? <Empty /> : renderContactList(data)}
            </div>
          </Col>
          <Col span={16}>
            <div className={classes.messageChatSection}>
              {loading ? <Empty /> : renderChatBox(selectedChat)}
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Messages
