import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../features/store'; // Update this path if necessary
import NoteListView from '../components/NoteListView';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NoteListView />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content to the top
    alignItems: 'stretch', // Stretch children across the width of the screen
    backgroundColor: '#F5FCFF',
    padding: 20, // Add padding around the screen
  },
});

