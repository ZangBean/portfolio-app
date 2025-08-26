import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../redux/slices/projectsSlice.js'

export const store = configureStore({
  reducer: { projects: projectsReducer },
})

