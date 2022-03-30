import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../src/redux/reducers/userReducer'
import CounterReducer from '../CounterSlice'

export default configureStore({
  reducer: {
    counter: CounterReducer,
    user: userReducer,
  },
})
