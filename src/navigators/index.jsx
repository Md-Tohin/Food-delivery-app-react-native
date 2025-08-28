import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SigninScreen, SignupScreen, SplashScreen, WelcomeScreen } from '~/screens';

const Stack = createNativeStackNavigator();
const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="signin" component={SigninScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
