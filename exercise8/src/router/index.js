/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIN, SplashScreen } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        option={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIN"
        component={SignIN}
        option={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
