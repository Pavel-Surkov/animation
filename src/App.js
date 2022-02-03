import React from 'react'
import MainLayout from './layouts/MainLayout/MainLayout'
import { BrowserRouter } from 'react-router-dom'
import './App.less'

//TODO Adding theme along with <themeprovider />
//TODO Adding Redux

const App = () => (
  <>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </>
)

export default App
