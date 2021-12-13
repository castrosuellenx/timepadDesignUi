import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import colors from '../config/colors';
import Desktop from '../assets/svg/desktop.svg';
import Barbell from '../assets/svg/barbell.svg';
import CodeSlash from '../assets/svg/code-slash.svg';
import Book from '../assets/svg/book.svg';
import Play from '../assets/svg/play.svg';

export default function Task({icon, desc, time, tag, project}) {
  // Funções para simular escolha do usuário
  const getIcon = () => {
    switch (icon) {
      case 'desktop':
        return <Desktop width={'55%'} height={'55%'} />;

      case 'barbell':
        return <Barbell width={'55%'} height={'55%'} />;

      case 'codeSlash':
        return <CodeSlash width={'55%'} height={'55%'} />;

      case 'book':
        return <Book width={'55%'} height={'55%'} />;

      default:
        return;
    }
  };

  const getIconColor = () => {
    switch (icon) {
      case 'desktop':
        return colors.purple;

      case 'barbell':
        return colors.orange;

      case 'codeSlash':
        return colors.pink;

      case 'book':
        return colors.green;

      default:
        return colors.lightGrey;
    }
  };

  const getTagBoxColor = () => {
    switch (tag) {
      case 'Work':
        return '#FFEFF1';

      case 'Personal':
        return colors.gray6;

      default:
        return colors.lightGrey;
    }
  };

  const getTagNameColor = () => {
    switch (tag) {
      case 'Work':
        return colors.pink;

      case 'Personal':
        return colors.gray3;

      default:
        return colors.defaultBlack;
    }
  };

  const getProjectBoxColor = () => {
    switch (project) {
      case 'Rasion Project':
        return '#F5EEFC';

      case 'Workout':
        return '#FEF5ED';

      case 'Coding':
        return '#FFEFF1';

      case 'Reading':
        return '#E6FCF4';

      default:
        return colors.lightGrey;
    }
  };

  const getProjectNameColor = () => {
    switch (project) {
      case 'Rasion Project':
        return colors.purple;

      case 'Workout':
        return colors.orange;

      case 'Coding':
        return colors.pink;

      case 'Reading':
        return colors.green;

      default:
        return colors.defaultBlack;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.icon}>
          <View
            style={[styles.desktopContain, {backgroundColor: getIconColor()}]}>
            {getIcon()}
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.detailsTop}>
            <Text style={styles.name}>{desc}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>

          <View style={styles.detailsBottom}>
            <View style={styles.detailsInner}>
              <View
                style={[styles.tagBox, {backgroundColor: getTagBoxColor()}]}>
                <Text style={[styles.tagName, {color: getTagNameColor()}]}>
                  {tag}
                </Text>
              </View>

              <View
                style={[
                  styles.projectBox,
                  {backgroundColor: getProjectBoxColor()},
                ]}>
                <Text
                  style={[styles.projectName, {color: getProjectNameColor()}]}>
                  {project}
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.playButton}>
              <View style={styles.playContain}>
                <Play width="100%" height="100%" />
              </View>
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
    backgroundColor: colors.defaultWhite,
  },
  inner: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  icon: {
    width: '13%',
    height: '100%',
  },
  desktopContain: {
    flex: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    width: '87%',
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
  detailsInner: {
    flex: 9,
    flexDirection: 'row',
    marginLeft: '4%',
  },
  tagBox: {
    borderRadius: 5,
  },
  tagName: {
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
    flex: 1,
  },
  playContain: {
    flex: 1,
  },
});
