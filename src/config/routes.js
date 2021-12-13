import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';

import Time from '../assets/svg/time.svg';
import Add from '../assets/svg/add.svg';
import PieChartOutline from '../assets/svg/pie-chart-outline.svg';
import colors from './colors';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderTopColor: 'transparent',
          backgroundColor: colors.defaultWhite,
        },
      }}>
      <Tab.Screen
        name="Timer"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <Time width={25} height={25} />,
        }}
      />

      <Tab.Screen
        name="Main"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <Add width={30} height={30} />,
        }}
      />

      <Tab.Screen
        name="Report"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <PieChartOutline width={25} height={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
