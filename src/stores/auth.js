import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import jsCookie from 'js-cookie';

const initialState = {
  user: [],
  isLoading: false,
  isAuthenticated: false,
}

export const fetchLoginUser = createAsyncThunk(
  'authR/fetchLoginUser',
  async ({email, password}) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  }
)

export const fetchLogoutUser = createAsyncThunk(
  'authR/fetchLogoutUser',
  async () => {
    await signOut(auth)
  }
)

const authR = createSlice({
  name: 'authR',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      let {user, isAuthenticated} = action.payload;
      state.user = user;
      state.isAuthenticated = isAuthenticated;
    },
    userLogOut: (state) => {
      state.user = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      jsCookie.set("auth", JSON.stringify([auth.currentUser]));
      toast.success('Successfully Login');
      state.user = action.payload;
    })
    builder.addCase(fetchLoginUser.pending, (state) => {
      state.isAuthenticated = false;
      state.isLoading = true;
    })
    builder.addCase(fetchLoginUser.rejected, (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      toast.error('Failed Login')
    })
    builder.addCase(fetchLogoutUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      toast.success('Successfully Logout')
      state.user = [];
    })
    builder.addCase(fetchLogoutUser.pending, (state) => {
      state.isLoading = true;
      state.isAuthenticated = true;
    })
    builder.addCase(fetchLogoutUser.rejected, (state) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      toast.error('Failed Logout')
    })
  }
})

export const { userLogin, userLogOut } = authR.actions

export default authR.reducer