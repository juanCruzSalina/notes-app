import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { INote } from "components/molecules/NoteMiniature/NoteMiniature";
import { addNewNote, fetchNotes, removeNote } from "./notesAsyncActions";

interface INoteSlice {
  currentNote: INote | undefined,
  notes: INote[]
  loading: boolean
}

const initialState: INoteSlice = {
  currentNote: undefined,
  notes: [],
  loading: false
}

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setCurrent: (state, { payload }: PayloadAction<string | undefined>) => {
      state.currentNote = state.notes.find(note => note.id === payload)
    },
    clearNotes: (state) => {
      state.currentNote = undefined
      state.notes = []
    },
    clearCurrent: (state) => {
      state.currentNote = undefined
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchNotes.fulfilled, (state, { payload }) => {
      state.notes = payload
      state.loading = false
    })
    builder.addCase(addNewNote.fulfilled, (state, { payload }) => {
      state.currentNote = payload.note
      state.notes = payload.notes
    })
    builder.addCase(removeNote.fulfilled, (state, { payload }) => {
      state.currentNote =undefined
      state.notes = payload
    })
  }
})

export const { setCurrent, clearNotes, clearCurrent } = noteSlice.actions

export const noteManager = (state: RootState) => state.notes

export default noteSlice.reducer