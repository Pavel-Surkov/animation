import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './Quote.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import Navigation from '../../../constant/public/Navigation/Navigation'
import Footer from '../../../constant/public/Footer/Footer'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'
import GetStarted from './GetStarted/GetStarted'
import SelectCategory from './SelectCategory/SelectCategory'
import ProjectDescription from './ProjectDescription/ProjectDescription'
import SelectQuantity from './SelectQuantity/SelectQuantity'
import LaunchDate from './LaunchDate/LaunchDate'
import UploadDocument from './UploadDocument/UploadDocument'
import PreSignUp from './PreSignUp/PreSignUp'
import PostQuoteSubmit from './PostQuoteSubmit/PostQuoteSubmit'
import PostSignUp from './PostSignUp/PostSignUp'
import { useParams } from 'react-router-dom'
import { singleQuoteData } from '../../../redux/actions/singleQuote.action'
import { Form } from 'antd'

const Quote = () => {
  const Formik = useFormik({
    initialValues: {
      quantity: '',
      budget: '',
      imageUploaded: '',
      documentUploaded: '',
      name: '',
      email: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid email.').required('Email is Required'),
    }),
  })
  const token = sessionStorage.getItem('token')
  const [quoteView, setQuoteView] = useState('getStarted')
  const [category, setCategory] = useState('')
  const [projectDescription, setProjectDescription] = useState('')

  const [launchDate, setLaunchDate] = useState('')
  const [imageUploaded, setImageUploaded] = useState('')
  const [documentUploaded, setDocumentUploaded] = useState('')
  const [supplierIdExist, setSupplierIdExist] = useState(false)
  const [supplierId, setSupplierId] = useState('')

  let { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (id === 'generic_quote') {
      setSupplierIdExist(false)
      setSupplierId('')
    } else {
      setSupplierIdExist(true)
      setSupplierId(id)
    }
  }, [])

  const handleSubmit = () => {
    debugger
    dispatch(
      singleQuoteData({
        projectName: '',
        productCategory: category,
        color: '',
        description: projectDescription,
        projectStartDate: '',
        projectLaunchDate: launchDate,
        quantity: Formik.values.quantity,
        budget: Formik.values.budget,
        inspirationImages: imageUploaded,
        inspirationDocument: documentUploaded,
        referenceImages: [],
        supplierIdExist: supplierIdExist,
        supplierId: supplierId,
      })
    )
    // history.push({ pathname: '/signup' })
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/quotes/save_quote`,
        {
          projectName: '',
          productCategory: category,
          color: '',
          inspirationImg: imageUploaded,
          description: projectDescription,
          projectStartDate: '',
          projectLaunchDate: launchDate,
          quantity: Formik.values.quantity,
          budget: Formik.values.budget,

          name: Formik.name.values,
          email: Formik.name.email,
          password: '123123',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res)
        setQuoteView('postQuoteSubmit')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleQuotes = () => {
    if (quoteView === 'getStarted') {
      return <GetStarted setQuoteView={setQuoteView} Formik={Formik} />
    } else if (quoteView === 'selectCategory') {
      return (
        <SelectCategory
          setQuoteView={setQuoteView}
          setCategory={setCategory}
          Formik={Formik}
        />
      )
    } else if (quoteView === 'projectDescription') {
      return (
        <ProjectDescription
          setQuoteView={setQuoteView}
          setProjectDescription={setProjectDescription}
          Formik={Formik}
        />
      )
    } else if (quoteView === 'selectQuantity') {
      return <SelectQuantity setQuoteView={setQuoteView} Formik={Formik} />
    } else if (quoteView === 'launchDate') {
      return (
        <LaunchDate setQuoteView={setQuoteView} setLaunchDate={setLaunchDate} />
      )
    } else if (quoteView === 'uploadDocument') {
      return (
        <UploadDocument
          setQuoteView={setQuoteView}
          setImageUploaded={setImageUploaded}
          setDocumentUploaded={setDocumentUploaded}
        />
      )
    } else if (quoteView === 'preSignUp') {
      return <PreSignUp setQuoteView={setQuoteView} Formik={Formik} />
    } else if (quoteView === 'postSignUp') {
      return <PostSignUp handleSubmit={handleSubmit} />
    } else if (quoteView === 'postQuoteSubmit') {
      return <PostQuoteSubmit setQuoteView={setQuoteView} />
    } else {
      return <GetStarted setQuoteView={setQuoteView} />
    }
  }
  return (
    <>
      <Navigation />
      {handleQuotes()}
      <Footer />
    </>
  )
}
export default Quote
