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
import { ref } from 'yup'
import SupplierDetails from './SupplierDetails/SupplierDetails'
const SignUp = () => {
  const [currentView, setCurrentView] = useState('accountType')
  const [accountType, setAccountType] = useState('buyer')

  const Formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      phone: 0,
      name: '',
      businessName: '',
    },
    validationSchema: yup.object({
      businessName: yup
        .string()
        .required('Business name is required.')
        .matches(
          /^[A-Za-z]+$/,
          'Numbers and Special Characters are not allowed.'
        )
        .min(2, 'Name should be more then 2 Characters')
        .max(50, 'Name should be less then 50 Characters'),
      name: yup
        .string()
        .required('Name is required.')
        .matches(
          /^[A-Za-z]+$/,
          'Numbers and Special Characters are not allowed.'
        )
        .min(2, 'Name should be more then 2 Characters')
        .max(50, 'Name should be less then 50 Characters'),
      email: yup.string().email('Invalid email.').required('Email is Required'),
      phone: yup
        .string()
        .matches(
          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
          'Invalid Format'
        ),
      password: yup
        .string()

        .required('Password is required.'),
      confirmPassword: yup
        .string()
        .oneOf([ref('password')], 'Passwords do not match')
        .required('Password is required.'),
    }),
  })
  const handleSignUpView = () => {
    if (currentView === 'accountType') {
      return <AccountType Formik={Formik} setCurrentView={setCurrentView} />
    } else if (currentView === 'userDetails') {
      return (
        <BuyerDetails
          setAccountType={setAccountType}
          Formik={Formik}
          setCurrentView={setCurrentView}
        />
      )
    } else if (currentView === 'supplierDetails') {
      return (
        <SupplierDetails
          setAccountType={setAccountType}
          Formik={Formik}
          setCurrentView={setCurrentView}
        />
      )
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
