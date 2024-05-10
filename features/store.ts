// store.ts
import { configureStore } from '@reduxjs/toolkit';
// import notesReducer from './features/notes/notesSlice';
import notesReducer from './notes/notesSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer
  }
});
