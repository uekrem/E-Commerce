import { configureStore } from '@reduxjs/toolkit'
import productHierarchyReducer from "./stores/productHierarchy"
import authR from "./stores/auth"
import personalSpaces from './stores/personalSpaces'

export const store = configureStore({
  reducer: {
    productHierarchy: productHierarchyReducer,
    authR,
    personalSpaces,
  },
})