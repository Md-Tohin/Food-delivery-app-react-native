import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Colors } from '~/contants'

const SplashScreen = () => {
  return (
    <View>
        <StatusBar barStyle={'light-content'} backgroundColor={Colors.DEFAULT_GREEN} translucent />
      <Text className='text-red-700'>Splash Screen</Text>
    </View>
  )
}

export default SplashScreen
