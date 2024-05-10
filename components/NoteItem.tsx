// NoteItem.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface NoteItemProps {
  note: { id: number; content: string };
  onDelete: (id: number) => void;
}

export default function NoteItem({ note, onDelete }: NoteItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{note.content}</Text>
      <Button title="Delete" onPress={() => onDelete(note.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  text: {
    flex: 1,
  },
});
