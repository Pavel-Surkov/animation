import React from 'react'
import { Row, Col, Button } from 'antd'
import classes from './Profile.module.scss'

import account from '../../../../assets/svg/Account.svg'
import bank from '../../../../assets/svg/Bank.svg'
import chart from '../../../../assets/svg/Chart.svg'

const Profile = () => {
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
                <img src={account} alt="Uplio" />
                Account details
              </Button>
              <Button
                size="large"
                type="link"
                className={classes.completedButton}
              >
                <img src={bank} alt="Uplio" />
                Banking information
              </Button>
              <Button
                size="large"
                type="link"
                className={classes.completedButton}
              >
                <img src={chart} alt="Uplio" />
                Company Profile
              </Button>
            </div>
          </Col>
          <Col span={16}>
            <div className={classes.mainSection}></div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Profile
