import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listBasket: []
}

const basket = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.listBasket = action.payload
    },
    resetBasket : (status) =>{
      status.listBasket = [];
    }
  },
})

export const { setBasket, resetBasket } = basket.actions

export default basket.reducer