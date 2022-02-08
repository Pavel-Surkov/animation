import React from 'react'
import { Link } from 'react-router-dom'
import classes from './SignUp.module.scss'
import logo from '../../../assets/svg/logo_black_medium.svg'

import SupplierCategoryDetails from './SupplierCategoryDetails/SupplierCategoryDetails'

const SupplierDetailTemp = () => {
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

        <SupplierCategoryDetails />
      </div>
    </>
  )
}
export default SupplierDetailTemp
