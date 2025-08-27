import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, Images } from '~/contants'
import { Display } from '~/utils'

const WelcomeCard = ({title, content, image}) => {
  return (
    <View style={styles.container}>
      <Image source={Images[image]} resizeMode='contain' style={styles.image} />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Display.setWidth(100),
    },
    image: {
        height: Display.setHeight(30),
        width: Display.setWidth(60),
        marginBottom: 16,
    },
    titleText: {
        fontSize: 24,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        textAlign: 'center',
        paddingBottom: 16,
    },
    contentText:{
        fontSize: 18,
        fontFamily: Fonts.POPPINS_LIGHT,
        textAlign: 'center',
        marginHorizontal: 20
    }
})

export default WelcomeCard
