import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';

export interface IUIState {
  showModal: boolean,
  type: 'new' | 'edit' | null
}

const initialState: IUIState = {
  showModal: false,
  type: null
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers:{
    toggleModal: (state) => {
      state.showModal = !state.showModal
    },
    setAdd: (state) => {
      state.type = 'new'
    },
    setEdit: (state) => {
      state.type = 'edit'
    },
    reset: (state) => {
      state.type = null
    }
  }
})

export const { toggleModal, setAdd, setEdit, reset } = uiSlice.actions;

export const uiState = (state: RootState) => state.ui;

export default uiSlice.reducer