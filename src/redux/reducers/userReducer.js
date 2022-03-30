import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
  name: 'store',
  initialState: {
    userLoggedIn: false,
    user: '',
    userType: '',
    quote: null,
  },
  reducers: {
    userLoggedIn: (state) => {
      state.userLoggedIn = true
    },
    userLoggedOut: (state) => {
      state.userLoggedIn = false
    },
    userDataStatus: (state, action) => {
      state.user = action.payload
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

    userLoggedStatus: (state, action) => {
      state.userLoggedIn = action.payload
    },
    userData: (state, action) => {
      state.user = action.payload
    },
    userType: (state, action) => {
      state.userType = action.payload
    },
    quoteData: (state, action) => {
      state.quote = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  userLoggedIn,
  userLoggedOut,
  userDataStatus,
  userType,
  quoteData,
} = userReducer.actions

export default userReducer.reducer
