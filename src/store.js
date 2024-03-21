import { configureStore } from '@reduxjs/toolkit'
import productHierarchyReducer from "./stores/productHierarchy"
import authR from "./stores/auth"
import favoriteReduce from './stores/favorite'
import basketReduce from "./stores/basket"

export const store = configureStore({
  reducer: {
    productHierarchy: productHierarchyReducer,
    authR,
    favorite: favoriteReduce,
    basket: basketReduce,
  },
})