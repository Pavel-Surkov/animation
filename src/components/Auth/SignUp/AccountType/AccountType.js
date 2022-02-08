import React from 'react'
import { Link } from 'react-router-dom'
import classes from './AccountType.module.scss'
import { Row, Col } from 'antd'
import BuyerAccountDetails from '../BuyerAccountDetails/BuyerAccountDetails'
import SupplierImage from '../../../../assets/images/supplier_card_background.png'
import BuyerImage from '../../../../assets/images/buyer_card_background.png'

const AccountType = () => {
  return (
    <>
      <div className={classes.mainSection}>
        <h3>Choose your account type:</h3>
        <Row gutter={50}>
          <Col span={12}>
            <Link to="/signup/buyer">
              <div className={classes.card}>
                <img src={BuyerImage} alt="Uplio" />
                <div className={classes.cardContent}>
                  <h2>Buyer</h2>
                  <p>Purchase from suppliers</p>
                </div>
              </div>
            </Link>
          </Col>
          <Col span={12}>
            <Link to="/signup/supplier">
              <div className={classes.card}>
                <img src={SupplierImage} alt="Uplio" />
                <div className={classes.cardContent}>
                  <h2>Suplier</h2>
                  <p>Acquire and support customers</p>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default AccountType
