import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import uiReducer from 'features/ui/uiSlice'
import authReducer from 'features/auth/authSlice'
import notesReducer from 'features/notes/notesSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    notes: notesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
