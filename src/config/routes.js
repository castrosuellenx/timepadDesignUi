import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Timer from '../screens/Timer';
import Report from '../screens/Report';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen name="Report" component={Report} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
