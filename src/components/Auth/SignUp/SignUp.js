import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './SignUp.module.scss'
import logo from '../../../assets/svg/logo_black_medium.svg'
import Navigation from '../../../constant/public/Navigation/Navigation'
import Footer from '../../../constant/public/Footer/Footer'

import AccountType from './AccountType/AccountType'
import BuyerDetails from './BuyerDetails/BuyerDetails'
import Greetings from './Greetings/Greetings'
import { Formik, useFormik } from 'formik'
import PostSignUp from './PostSignUp/PostSignUp'
import * as yup from 'yup'
import SupplierDetails from './SupplierDetails/SupplierDetails'
const SignUp = () => {
  const [currentView, setCurrentView] = useState('accountType')

  const Formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      phone: 0,
      name: '',
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required('Name is required.')
        .max(50, 'Name should be less then 50 Characters'),
      email: yup.string().email('Invalid email.').required('Email is Required'),
      phone: yup.number().required('Phone Number is required'),
      password: yup
        .string()
        .matches('^(+d{1,2}s)?(?d{3})?[s.-]?d{3}[s.-]?d{4}$', 'Invalid Format')
        .required('Password is required.'),
    }),
  })
  const handleSignUpView = () => {
    if (currentView === 'accountType') {
      return <AccountType Formik={Formik} setCurrentView={setCurrentView} />
    } else if (currentView === 'userDetails') {
      return <BuyerDetails Formik={Formik} setCurrentView={setCurrentView} />
    } else if (currentView === 'supplierDetails') {
      return <SupplierDetails Formik={Formik} setCurrentView={setCurrentView} />
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
