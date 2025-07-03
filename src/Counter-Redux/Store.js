import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Slices/Counter'

export const store= configureStore({
  reducer: {
    counter: CounterReducer
  }
})