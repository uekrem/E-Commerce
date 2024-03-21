import { createSlice } from '@reduxjs/toolkit'

const productHierarchy = createSlice({
  name: 'productHierarchy',
  initialState:{
    inform:[],
  },
  reducers: {
    setInform: (state, action) => {
      state.inform = action.payload
    },
  },
})

export const {setInform} = productHierarchy.actions

export default productHierarchy.reducer