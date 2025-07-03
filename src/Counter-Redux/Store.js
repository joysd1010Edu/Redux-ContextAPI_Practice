import { configureStore } from '@reduxjs/toolkit'
import { CounterSlice } from './Slices/Counter'

export const store= configureStore({
  reducer: {
    counter: CounterSlice
  }
})