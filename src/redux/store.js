// import { createStore } from 'redux'
// import rootReducer from './rootReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const store = createStore(rootReducer, composeWithDevTools())

// export default store

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './sagas/index'
import { composeWithDevTools } from 'redux-devtools-extension'
const sagaMiddleware = createSagaMiddleware()
const store = compose(
  applyMiddleware(sagaMiddleware),
  composeWithDevTools()
  //   window.devToolsExtension && window.devToolsExtension()
)(createStore)(rootReducer)

sagaMiddleware.run(rootSaga)

export default store
