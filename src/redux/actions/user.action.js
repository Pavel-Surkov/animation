import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_DATA_STATUS,
  POST_USER_LOGIN,
} from '../constant/user.constant'

export const userLoggedIn = () => {
  return {
    type: USER_LOGGED_IN,
  }
}

export const userLoggedOut = () => {
  return {
    type: USER_LOGGED_OUT,
  }
}

export const userDataStatus = (userData) => {
  return {
    type: USER_DATA_STATUS,
    userData,
  }
}

export const postUserLogin = (user) => {
  return {
    type: POST_USER_LOGIN,
    user,
  }
}
