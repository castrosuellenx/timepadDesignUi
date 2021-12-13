import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import colors from '../config/colors';
import More from '../assets/svg/more.svg';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task</Text>
      <TouchableOpacity style={styles.containSvg}>
        <More height={'100%'} width={'100%'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '4%',
    marginTop: '3%',
  },
  title: {
    color: colors.black,
    fontFamily: 'Rubik Medium',
    fontSize: 24,
  },
  containSvg: {
    width: 24,
    height: 24,
  },
});
