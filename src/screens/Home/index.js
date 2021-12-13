import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import Header from '../../components/Header';
import TimerCard from '../../components/TimerCard';
import List from '../../components/List';

import colors from '../../config/colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.lightGrey} barStyle="dark-content" />
      <Header />
      <TimerCard />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
});
