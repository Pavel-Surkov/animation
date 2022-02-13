import { combineReducers } from 'redux'

// import { POST_LOGOUT } from './../constants/auth'

// import auth from './auth'

// import commonReducer from './common'

const appReducer = combineReducers({
  //   auth,
  //   common: commonReducer,
})

const rootReducer = (state, action) => {
  //   if (action.type === POST_LOGOUT) {
  //     // TO RESET STATE ON LOGOUT
  //     state = {
  //       auth: { authChecked: false },
  //     }
  //   }

  return appReducer(state, action)
}

export default rootReducer
