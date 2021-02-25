import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInStep1, SignInStep2, SignInStep3, SignInStep4} from '../screens';
import {StatusBar, View} from 'react-native';

const Stack = createStackNavigator();

export const SignInNavigation = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="step-1" component={SignInStep1} />
        <Stack.Screen name="step-2" component={SignInStep2} />
        <Stack.Screen name="step-3" component={SignInStep3} />
        <Stack.Screen name="step-4" component={SignInStep4} />
      </Stack.Navigator>
    </View>
  );
};