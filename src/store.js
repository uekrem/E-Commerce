import { configureStore } from '@reduxjs/toolkit'
import productHierarchyReducer from "./stores/productHierarchy"

export const store = configureStore({
  reducer: {
    productHierarchy: productHierarchyReducer,
  },
})