import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { userType } from '../../../../CounterSlice'
import classes from './AccountType.module.scss'
import { Row, Col } from 'antd'

import SupplierImage from '../../../../assets/svg/supplier.svg'
import BuyerImage from '../../../../assets/svg/buyer.svg'
import ButtonElement from '../../../../constant/public/Button/ButtonElement'

const AccountType = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  // const handleAccountType = (value) => {
  //   if (value === 'supplier') {
  //     history.push('/signup/supplier')
  //     dispatch(userType('supplier'))
  //   } else if (value === 'buyer') {
  //     history.push('/signup/buyer')
  //     dispatch(userType('buyer'))
  //   }
  // }

  return (
    <>
      <div className={classes.sideTitle}>
        <h2>SIGN UP</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.mainSection}>
          <h2>Choose your account type:</h2>
          <Row gutter={{ xs: 0, sm: 0, md: 164, lg: 164 }}>
            <Col lg={12} md={12} xl={12} sm={24} xs={24}>
              <div className={classes.card}>
                <h3>[BUYER]</h3>
                <img src={BuyerImage} alt="Uplio" />
                <ButtonElement
                  function={() => props.setCurrentView('userDetails')}
                  content="I WANT TO FIND A SUPPLIER"
                  width={'325px'}
                />
              </div>
            </Col>
            <Col lg={12} md={12} xl={12} sm={24} xs={24}>
              <div className={classes.card}>
                <h3>[SUPPLIER]</h3>
                <img src={SupplierImage} alt="Uplio" />
                <ButtonElement
                  function={() => history.push({ pathname: '/coming-soon' })}
                  content="I WANT TO SUPPLY"
                  width={'325px'}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default AccountType
