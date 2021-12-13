import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../config/colors';
import RightArrow from '../assets/svg/right-arrow.svg';

export default function TimerCard() {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.time}>00:42:21</Text>
        <View style={styles.containSvg}>
          <RightArrow height={'100%'} width={'100%'} />
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.tagLine}>
          <Text style={styles.tagName}>Work</Text>
        </View>

        <View style={styles.project}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[colors.purpleRadial, '#B482E5', '#F1E8FA']}
            style={styles.projectColor}>
            <View style={styles.projectColorCircle} />
          </LinearGradient>
          <Text style={styles.projectName}>Rasion Project</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '15%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.defaultWhite,
    borderRadius: 10,
    marginVertical: '5%',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  time: {
    color: colors.defaultBlack,
    fontFamily: 'Rubik Medium',
    fontSize: 32,
  },
  containSvg: {
    width: 24,
    height: 24,
  },
  details: {
    flexDirection: 'row',
    marginLeft: '5%',
  },
  tagLine: {
    borderColor: colors.pink,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  tagName: {
    color: colors.pink,
    fontSize: 12,
    fontFamily: 'Rubik Regular',
    paddingVertical: 4,
    paddingHorizontal: 7,
  },
  project: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
  },
  projectColor: {
    width: 14,
    height: 14,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5%',
  },
  projectColorCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.defaultWhite,
  },
  projectName: {
    color: colors.defaultBlack,
    fontSize: 16,
    fontFamily: 'Rubik Regular',
  },
});
