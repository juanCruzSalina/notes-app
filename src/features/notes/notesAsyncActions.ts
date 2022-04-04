import { createAsyncThunk } from "@reduxjs/toolkit";
import { INote } from "components/molecules/NoteMiniature/NoteMiniature";
import { INoteFormValues } from "components/molecules/NotesForm/NotesForm";
import { addNotes, getNotes, deleteNote } from "services/noteServices";

export const fetchNotes = createAsyncThunk<INote[]>(
  'notes/fetch',
  async () => {
    const notes = await getNotes()
    return notes
  }
)

export const addNewNote = createAsyncThunk(
  'notes/add',
  async (payload: INoteFormValues) => {
    const note = await addNotes(payload)
    const notes = await getNotes()
    return {
      note,
      notes
    }
  }
)


export const removeNote = createAsyncThunk(
  'note/delete',
  async (id: string) => {
    await deleteNote(id)
    const notes = getNotes()
    return notes
  }
)