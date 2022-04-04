import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginValues } from "components/molecules/LoginForm/LoginForm";
import { IRegisterValues } from "components/molecules/RegisterForm/RegisterForm";
import { emailLogin, emailRegister, googleSignIn, logout } from "services/authService";

export const signIn = createAsyncThunk(
  'auth/register',
  async (payload: IRegisterValues) => {
    const user = await emailRegister(payload)
    return user
  }
)

export const logIn = createAsyncThunk(
  'auth/login',
  async (payload: ILoginValues) => {
    const user = await emailLogin(payload)
    return user
  }
)

export const googleLogIn = createAsyncThunk(
  'auth/google',
  async () => {
    const user = await googleSignIn()
    return user
  }
)

export const logOut = createAsyncThunk(
  'auth/logout',
  async () => {
    await logout()
  }
)