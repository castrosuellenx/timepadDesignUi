import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../config/colors';
import RightArrow from '../assets/svg/right-arrow.svg';

export default function TimerCard() {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.timerCard}>
      <View style={styles.boxTimer}>
        <Text style={styles.timerText}>00:42:21</Text>
        <View style={styles.containSvg}>
          <RightArrow height={'100%'} width={'100%'} />
        </View>
      </View>

      <View style={styles.categoryDetails}>
        <View style={styles.categoryTypeLine}>
          <Text style={styles.categoryTypeText}>Work</Text>
        </View>

        <View style={styles.categoryNameContain}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[colors.purpleRadial, '#B482E5', '#F1E8FA']}
            style={styles.categoryNameColor}>
            <View style={styles.categoryNameColorCircle} />
          </LinearGradient>
          <Text style={styles.categoryNameText}>Rasion Project</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  timerCard: {
    width: '90%',
    height: '15%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.defaultWhite,
    borderRadius: 10,
    marginVertical: '5%',
  },
  boxTimer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  timerText: {
    color: colors.defaultBlack,
    fontFamily: 'Rubik Medium',
    fontSize: 32,
  },
  categoryDetails: {
    flexDirection: 'row',
    marginLeft: '5%',
  },
  categoryTypeLine: {
    borderColor: colors.pink,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  categoryTypeText: {
    color: colors.pink,
    fontSize: 12,
    fontFamily: 'Rubik Regular',
    paddingVertical: 4,
    paddingHorizontal: 7,
  },
  categoryNameContain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '6%',
  },
  categoryNameColor: {
    width: 14,
    height: 14,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5%',
  },
  categoryNameColorCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.defaultWhite,
  },
  categoryNameText: {
    color: colors.defaultBlack,
    fontSize: 16,
    fontFamily: 'Rubik Regular',
  },
});
