import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Slices/Counter'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store= configureStore({
  reducer: {
    counter: CounterReducer
  }
})