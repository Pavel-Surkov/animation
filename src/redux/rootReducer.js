import { combineReducers } from 'redux'

import userReducer from './reducers/user.reducer'
import singleQuoteReducer from './reducers/singleQuote.reducer'

const rootReducer = combineReducers({
  user: userReducer,
  singleQuote: singleQuoteReducer,
})

export default rootReducer
