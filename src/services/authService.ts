import { auth } from 'config/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { ILoginValues } from 'components/molecules/LoginForm/LoginForm'
import { IRegisterValues } from '../components/molecules/RegisterForm/RegisterForm'
import { IAuthData } from 'features/auth/authSlice'

// Google Provider
const provider = new GoogleAuthProvider()

// Email registration
export const emailRegister = async ({email, password, username}: IRegisterValues) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(userCredential.user, {
    displayName: username,
    photoURL: 'https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg'
  })
  const { displayName, uid } = auth.currentUser!
  return {
    displayName,
    uid
  } as IAuthData
}

// Email Login
export const emailLogin = async ({ email, password }: ILoginValues) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  const { displayName, uid } = userCredential.user
  return {
    displayName,
    uid
  } as IAuthData
}

// Google Register/Login
export const googleSignIn = async () => {
  const userCredential = await signInWithPopup(auth, provider)
  const { displayName, uid } = userCredential.user
  return {
    displayName,
    uid
  } as IAuthData
}

// Logout
export const logout = async () => {
  await signOut(auth)
}