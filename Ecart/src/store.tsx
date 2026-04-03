// store.js
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./components/Slice"

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})