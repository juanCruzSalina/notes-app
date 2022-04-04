import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';
import { googleLogIn, logIn, logOut, signIn } from "./authAsyncActions";

export interface IAuthData {
  displayName: string | null,
  uid: string
}

interface IAuthSlice {
  user: IAuthData | undefined,
  logging: boolean
}

const initialState: IAuthSlice = {
  user: undefined,
  logging: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getData: (state, { payload }: PayloadAction<IAuthData> ) =>{
      state.user = payload
    },
    clearData: (state) => {
      state.user = undefined
    }
  },
  extraReducers: (builder) => {

    // Email registration
    builder.addCase(signIn.pending, (state) => {
      state.logging = true
    })
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.user = payload
      state.logging = false
    })

    // Google
    builder.addCase(googleLogIn.pending, (state) => {
      state.logging = true
    })
    builder.addCase(googleLogIn.fulfilled, (state, { payload }) => {
      state.user = payload
      state.logging = false
    })

    // Loging
    builder.addCase(logIn.pending, (state) => {
      state.logging = true
    })
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.user = payload
      state.logging = false
    })

    // Logout
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = undefined
    })
  }
})

export const { getData, clearData } = authSlice.actions
export const authManager = (state: RootState) => state.auth;
export default authSlice.reducer