import {
  USER_LOGGED_OUT,
  USER_LOGGED_IN,
  USER_DATA_STATUS,
  POST_USER_LOGIN,
} from '../constant/user.constant'

const INITIAL_STATE = {
  userLoggedIn: false,
  user: null,
  loading: false,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        userLoggedIn: true,
      }

    case USER_LOGGED_OUT:
      return {
        ...state,
        userLoggedIn: false,
      }

    case USER_DATA_STATUS:
      return {
        ...state,
        user: action.userData,
      }

    case POST_USER_LOGIN:
      return {
        ...state,
        loading: true,
      }

    default:
      return state
  }
}

export default reducer
