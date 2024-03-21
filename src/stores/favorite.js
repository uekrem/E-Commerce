import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}

const favorite = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      state.list = action.payload
    },
    resetFavorite : (state) =>{
      state.list = [];
    },
  },
})

export const { setFavorite, resetFavorite } = favorite.actions

export default favorite.reducer