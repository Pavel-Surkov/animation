import { createSlice } from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
  name: 'store',
  initialState: {
    userLoggedIn: false,
    user: '',
    userType: '',
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
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
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, userLoggedIn, userDataStatus, userType } =
  CounterSlice.actions

export default CounterSlice.reducer
