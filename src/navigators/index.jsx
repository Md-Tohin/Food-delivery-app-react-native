import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPasswordScreen, RegisterPhoneScreen, SigninScreen, SignupScreen, SplashScreen, WelcomeScreen } from '~/screens';

const Stack = createNativeStackNavigator();
const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="signin" component={SigninScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="registerPhone" component={RegisterPhoneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
