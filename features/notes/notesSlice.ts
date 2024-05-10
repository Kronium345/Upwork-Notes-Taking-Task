// notesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Note {
  id: number;
  content: string;
}

const initialState: Note[] = [];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      return state.filter(note => note.id !== action.payload);
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
