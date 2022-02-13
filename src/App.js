import React from 'react'
import MainLayout from './layouts/MainLayout/MainLayout'
import { BrowserRouter } from 'react-router-dom'
import './App.less'
import store from './redux/store'
import { Provider } from 'react-redux'

//TODO Adding theme along with <themeprovider />
//TODO Adding Redux

const App = () => (
  <>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
    {/* </Provider> */}
  </>
)

export default App
