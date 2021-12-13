import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import colors from '../config/colors';
import Desktop from '../assets/svg/desktop.svg';
import Play from '../assets/svg/play.svg';

export default function Task() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.icon}>
          <View style={styles.svgContain}>
            <Desktop width={'60%'} height={'60%'} />
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.detailsTop}>
            <Text style={styles.name}>UI Design</Text>
            <Text style={styles.time}>00:42:21</Text>
          </View>

          <View style={styles.detailsBottom}>
            <View style={{flexDirection: 'row', marginLeft: '4%'}}>
              <View style={styles.tagBox}>
                <Text style={styles.tagName}>Work</Text>
              </View>

              <View style={styles.projectBox}>
                <Text style={styles.projectName}>Rasion Project</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.playButton}>
              <Play width="100%" height="100%" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    marginVertical: '2%',
    backgroundColor: colors.lightGrey,
  },
  inner: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  icon: {
    width: '14%',
  },
  svgContain: {
    width: '100%',
    height: 45,
    borderRadius: 25,
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    width: '85%',
    justifyContent: 'center',
  },
  detailsTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2%',
  },
  name: {
    color: colors.defaultBlack,
    fontSize: 14,
    fontFamily: 'Rubik Medium',
    marginLeft: '4%',
  },
  time: {
    color: colors.gray2,
    fontSize: 12,
    fontFamily: 'Rubik Medium',
  },
  tagBox: {
    backgroundColor: '#FFEFF1',
    borderRadius: 5,
  },
  tagName: {
    color: colors.pink,
    fontSize: 12,
    fontFamily: 'Rubik Regular',
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  projectBox: {
    backgroundColor: '#F5EEFC',
    borderRadius: 5,
    marginLeft: '6%',
  },
  projectName: {
    color: colors.purple,
    fontSize: 12,
    fontFamily: 'Rubik Regular',
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  playButton: {
    width: '10%',
    height: 25,
  },
});
