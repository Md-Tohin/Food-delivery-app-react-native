import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPasswordScreen, HomeScreen, RegisterPhoneScreen, SigninScreen, SignupScreen, SplashScreen, WelcomeScreen } from '~/screens';
import { useDispatch, useSelector } from 'react-redux';
import { GeneralAction } from '~/actions';

const Stack = createNativeStackNavigator();
const Navigators = () => {
  const {isAppLoading, token, isFirstTimeUse} = useSelector(
    state => state?.generalState
  )
  const dispatch = useDispatch();

  useEffect(() => {   
    dispatch(GeneralAction.appStart()); 
  }, []);
  
  return (    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAppLoading ? (
          <Stack.Screen name="splash" component={SplashScreen} />
        ) : !token || token === null || token === '' ? (
          <>
            {isFirstTimeUse && (
              <Stack.Screen name="welcome" component={WelcomeScreen} />
            )}
            <Stack.Screen name="signin" component={SigninScreen} />
            <Stack.Screen name="signup" component={SignupScreen} />
            <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="registerPhone" component={RegisterPhoneScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="home" component={HomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
