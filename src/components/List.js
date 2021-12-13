import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Task from './Task';

import colors from '../config/colors';
import RightArrow from '../assets/svg/right-arrow.svg';

export default function List() {
  return (
    <View style={styles.listPanel}>
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Today</Text>
        <TouchableOpacity>
          <Text style={styles.listMore}>See All</Text>
        </TouchableOpacity>
      </View>

      <Task />
      <Task />
      <Task />
      <Task />
    </View>
  );
}

const styles = StyleSheet.create({
  listPanel: {
    width: '90%',
    alignSelf: 'center',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2%',
  },
  listTitle: {
    color: colors.black,
    fontFamily: 'Rubik Medium',
    fontSize: 20,
  },
  listMore: {
    color: colors.black,
    fontFamily: 'Rubik Regular',
    fontSize: 16,
  },
});
