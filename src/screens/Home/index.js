import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFF',
  },
  title: {
    color: '#070414',
    fontFamily: 'Rubik Medium',
    fontSize: 24,
  },
});
