import React from 'react'
import { Link } from 'react-router-dom'
import classes from './SignUp.module.scss'
import logo from '../../../assets/svg/logo_black_medium.svg'
import SupplierAccountDetails from './SupplierAccountDetails/SupplierAccountDetail'
import SupplierCategoryDetails from './SupplierCategoryDetails/SupplierCategoryDetails'
import Greetings from './Greetings/Greetings'

const SupplierTemp = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <Link to="/">
            <img src={logo} alt="uplio" />
          </Link>
          <div className={classes.textOverlaySupplier}>
            <h1>SUPPLIER</h1>
          </div>
        </div>
        <SupplierAccountDetails />
        {/* <SupplierCategoryDetails /> */}
        {/* <Greetings supplier={true} /> */}
      </div>
    </>
  )
}
export default SupplierTemp
