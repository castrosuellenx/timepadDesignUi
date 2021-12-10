import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import colors from '../../config/colors';

import More from '../../assets/svg/more.svg';
import RightArrow from '../../assets/svg/right-arrow.svg';

import Desktop from '../../assets/svg/desktop.svg';
import Play from '../../assets/svg/play.svg';

export default function Home() {
  const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Task</Text>
        <TouchableOpacity style={styles.containSvg}>
          <More height={'100%'} width={'100%'} />
        </TouchableOpacity>
      </View>
    );
  };

  const TimerCard = () => {
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
  };

  const List = () => {
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
  };

  const Task = () => {
    return (
      <View style={styles.taskContainer}>
        <View style={styles.taskInner}>
          <View style={styles.taskIcon}>
            <View style={styles.taskSvgContain}>
              <Desktop width={'60%'} height={'60%'} />
            </View>
          </View>

          <View style={styles.taskDetails}>
            <View style={styles.taskDetailsTop}>
              <Text style={styles.taskName}>UI Design</Text>
              <Text style={styles.taskTime}>00:42:21</Text>
            </View>

            <View style={styles.taskDetailsBottom}>
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
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.lightGrey} barStyle="dark-content" />
      <Header />
      <TimerCard />
      <List />
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  title: {
    color: colors.black,
    fontFamily: 'Rubik Medium',
    fontSize: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '4%',
    marginTop: '3%',
  },
  containSvg: {
    width: 24,
    height: 24,
  },
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
  taskContainer: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    marginVertical: '2%',
    backgroundColor: colors.lightGrey,
  },
  taskInner: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  taskIcon: {
    width: '14%',
  },
  taskSvgContain: {
    width: '100%',
    height: 45,
    borderRadius: 25,
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskDetails: {
    width: '85%',
    justifyContent: 'center',
  },
  taskDetailsTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskDetailsBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2%',
  },
  taskName: {
    color: colors.defaultBlack,
    fontSize: 14,
    fontFamily: 'Rubik Medium',
    marginLeft: '4%',
  },
  taskTime: {
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
