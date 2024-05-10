import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, View, StyleSheet } from 'react-native';
import { deleteNote } from '../features/notes/notesSlice';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

export default function NoteListView() {
  const notes = useSelector((state: any) => state.notes);
  const dispatch = useDispatch();

  const memoizedNoteList = useMemo(() => {
    // For example, sorting notes by creation time before rendering
    return [...notes].sort((a, b) => b.id - a.id);
  }, [notes]);

  return (
    <View style={styles.container}>
      <AddNote />
      <FlatList
        data={memoizedNoteList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NoteItem note={item} onDelete={() => dispatch(deleteNote(item.id))} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
