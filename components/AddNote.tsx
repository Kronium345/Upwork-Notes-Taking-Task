// AddNote.tsx
import React, { useState, useCallback } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/notes/notesSlice';

export default function AddNote() {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleAddNote = useCallback(() => {
    if (note.trim()) {
      dispatch(addNote({ id: Date.now(), content: note }));
      setNote('');
    }
  }, [note, dispatch]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={setNote}
        placeholder="Type a new note..."
      />
      <Button title="Save Note" onPress={handleAddNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
});
