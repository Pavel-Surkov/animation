import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './SignUp.module.scss'
import logo from '../../../assets/svg/logo_black_medium.svg'
import Navigation from '../../../constant/public/Navigation/Navigation'
import Footer from '../../../constant/public/Footer/Footer'

import AccountType from './AccountType/AccountType'
import BuyerDetails from './BuyerDetails/BuyerDetails'
import Greetings from './Greetings/Greetings'
import PostSignUp from './PostSignUp/PostSignUp'
import SupplierDetails from './SupplierDetails/SupplierDetails'
const SignUp = () => {
  const [currentView, setCurrentView] = useState('accountType')

  const handleSignUpView = () => {
    if (currentView === 'accountType') {
      return <AccountType setCurrentView={setCurrentView} />
    } else if (currentView === 'userDetails') {
      return <BuyerDetails setCurrentView={setCurrentView} />
    } else if (currentView === 'supplierDetails') {
      return <SupplierDetails setCurrentView={setCurrentView} />
    } else if (currentView === 'greetings') {
      return <Greetings setCurrentView={setCurrentView} />
    } else if (currentView === 'postSignUp') {
      return <PostSignUp setCurrentView={setCurrentView} />
    }
  }

  return (
    <>
      <Navigation />
      {handleSignUpView()}
      <Footer />
    </>
  )
}
export default SignUp
