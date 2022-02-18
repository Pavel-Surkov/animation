import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userType } from '../../../../CounterSlice'
import classes from './AccountType.module.scss'
import { Row, Col } from 'antd'

import BuyerAccountDetails from '../BuyerAccountDetails/BuyerAccountDetails'
import SupplierImage from '../../../../assets/images/supplier_card_background.png'
import BuyerImage from '../../../../assets/images/buyer_card_background.png'

const AccountType = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const handleAccountType = (value) => {
    if (value === 'supplier') {
      history.push('/signup/supplier')
      dispatch(userType('supplier'))
    } else if (value === 'buyer') {
      history.push('/signup/buyer')
      dispatch(userType('buyer'))
    }
  }

  return (
    <>
      <div className={classes.mainSection}>
        <h3>Choose your account type:</h3>
        <Row gutter={50}>
          <Col span={12}>
            <div className={classes.card}>
              <button onClick={() => handleAccountType('buyer')}>
                <img src={BuyerImage} alt="Uplio" />
                <div className={classes.cardContent}>
                  <h2>Buyer</h2>
                  <p>Purchase from suppliers</p>
                </div>
              </button>
            </div>
          </Col>
          <Col span={12}>
            <div className={classes.card}>
              <button onClick={() => handleAccountType('supplier')}>
                <img src={SupplierImage} alt="Uplio" />
                <div className={classes.cardContent}>
                  <h2>Suplier</h2>
                  <p>Acquire and support customers</p>
                </div>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default AccountType
