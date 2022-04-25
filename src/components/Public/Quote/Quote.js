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
  const handleQuotes = () => {
    if (quoteView === 'getStarted') {
      return <GetStarted setQuoteView={setQuoteView} />
    } else if (quoteView === 'selectCategory') {
      return <SelectCategory setQuoteView={setQuoteView} />
    } else if (quoteView === 'projectDescription') {
      return <ProjectDescription setQuoteView={setQuoteView} />
    } else if (quoteView === 'selectQuantity') {
      return <SelectQuantity setQuoteView={setQuoteView} />
    } else if (quoteView === 'launchDate') {
      return <LaunchDate setQuoteView={setQuoteView} />
    } else if (quoteView === 'uploadDocument') {
      return <UploadDocument setQuoteView={setQuoteView} />
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
