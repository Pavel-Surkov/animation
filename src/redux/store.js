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
// const store = compose(
//   applyMiddleware(sagaMiddleware),
//   composeWithDevTools()
//   //   window.devToolsExtension && window.devToolsExtension()
// )(createStore)(rootReducer)

const devTools =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : null

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), composeWithDevTools(), devTools)
)

sagaMiddleware.run(rootSaga)

export default store
