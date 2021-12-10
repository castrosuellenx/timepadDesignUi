import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Task</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  title: {
    color: '#070414',
    fontFamily: 'Rubik Medium',
    fontSize: 24,
  },
  top: {},
});
