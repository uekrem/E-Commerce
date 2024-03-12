import { createSlice } from '@reduxjs/toolkit'

const productHierarchy = createSlice({
  name: 'productHierarchy',
  initialState:{
    inform:[],
    repeat:true,
    complate:{},
  },
  reducers: {
    setInform: (state, action) => {
      state.inform = action.payload
    },
    setRepeat: (state, action) => {
      state.repeat = action.payload
    },
    setComplate: (state, action) => {
      state.complate = action.payload
    },
  },
})

export const {setInform, setRepeat, setComplate} = productHierarchy.actions

export default productHierarchy.reducer