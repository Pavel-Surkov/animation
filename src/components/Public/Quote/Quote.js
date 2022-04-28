import React, { useState } from 'react'

import classes from './Quote.module.scss'

import Navigation from '../../../constant/public/Navigation/Navigation'
import Footer from '../../../constant/public/Footer/Footer'

import GetStarted from './GetStarted/GetStarted'
import SelectCategory from './SelectCategory/SelectCategory'
import ProjectDescription from './ProjectDescription/ProjectDescription'
import SelectQuantity from './SelectQuantity/SelectQuantity'
import LaunchDate from './LaunchDate/LaunchDate'
import UploadDocument from './UploadDocument/UploadDocument'
import PreSignUp from './PreSignUp/PreSignUp'
import PostQuoteSubmit from './PostQuoteSubmit/PostQuoteSubmit'
import PostSignUp from './PostSignUp/PostSignUp'

const Quote = () => {
  const [quoteView, setQuoteView] = useState('getStarted')
  const [category, setCategory] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [budget, setBudget] = useState('')
  const [launchDate, setLaunchDate] = useState('')
  const [imageUploaded, setImageUploaded] = useState('')
  const [documentUploaded, setDocumentUploaded] = useState('')
  const handleQuotes = () => {
    if (quoteView === 'getStarted') {
      return <GetStarted setQuoteView={setQuoteView} />
    } else if (quoteView === 'selectCategory') {
      return (
        <SelectCategory setQuoteView={setQuoteView} setCategory={setCategory} />
      )
    } else if (quoteView === 'projectDescription') {
      return (
        <ProjectDescription
          setQuoteView={setQuoteView}
          setProjectDescription={setProjectDescription}
        />
      )
    } else if (quoteView === 'selectQuantity') {
      return (
        <SelectQuantity
          setQuoteView={setQuoteView}
          setQuantity={setQuantity}
          setBudget={setBudget}
        />
      )
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
      return <PreSignUp setQuoteView={setQuoteView} />
    } else if (quoteView === 'postSignUp') {
      return <PostSignUp setQuoteView={setQuoteView} />
    } else if (quoteView === 'postQuoteSubmit') {
      return <PostQuoteSubmit />
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
