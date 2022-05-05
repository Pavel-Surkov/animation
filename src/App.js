import React from 'react';
import MainLayout from './layouts/MainLayout/MainLayout';
import { BrowserRouter } from 'react-router-dom';
import './App.less';
import './App.scss';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </Provider>
  </>
);

export default App;
