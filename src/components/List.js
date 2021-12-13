import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import Task from './Task';

import colors from '../config/colors';
import RightArrow from '../assets/svg/right-arrow.svg';

import tasks from '../data/tasks';

export default function List() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Today</Text>
          <TouchableOpacity>
            <Text style={styles.more}>See All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Task
              icon={item.icon}
              desc={item.desc}
              time={item.time}
              tag={item.tag}
              project={item.project}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '2%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2%',
  },
  title: {
    color: colors.black,
    fontFamily: 'Rubik Medium',
    fontSize: 20,
  },
  more: {
    color: colors.black,
    fontFamily: 'Rubik Regular',
    fontSize: 16,
  },
});
