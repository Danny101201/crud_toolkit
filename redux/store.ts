import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from './taskSlice'

const store = configureStore({
  reducer: {
    task: taskSliceReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store