import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Separator from '~/components/Separator'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, Fonts, Images } from '~/contants'
import { Display } from '~/utils'
import { ToggleButton } from '~/components'
import { AuthenticationService } from '../services';
import LottieView from 'lottie-react-native';

const inputStyle = (state) => {
    switch (state) {
        case 'valid':
            return {
                ...styles.inputContainer,
                borderColor: Colors.SECONDARY_GREEN,
                borderWidth: 1
            }
        case 'invalid' : {
          return {
            ...styles.inputContainer,
            borderColor: Colors.DEFAULT_RED,
            borderWidth: 1,
          }
        }    
        default:
            return styles.inputContainer
    }
}

const showMarker = (state) => {
    switch (state) {
        case 'valid':
            return <AntDesign
              name = "checkcircleo"
              color = {Colors.SECONDARY_GREEN}
              size = {18}
              style = {{marginLeft: 5}}
            />
        case 'invalid' : {
          return <AntDesign
              name = "closecircleo"
              color = {Colors.DEFAULT_RED}
              size = {18}
              style = {{marginLeft: 5}}
            />
        }    
        default:
            return null
    }
}


const SigninScreen = ({navigation}) => {
  
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const login = () => {
      let user = { email, password };
      console.log(user);
      setIsLoading(true);
      AuthenticationService.login(user).then((response) => {
        setIsLoading(false);
        console.log(response);
        if (!response?.status) {
          setErrorMessage(response?.message);
        }
      });
    };

  return (
    <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.DEFAULT_WHITE} translucent />
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>
            <Ionicons name="chevron-back-outline" size={30} onPress={() => navigation.goBack()} />
            <Text style={styles.headerTitle}>Sign In</Text>
        </View>
        <Text style={styles.title}>Welcome to</Text> 
        <Text style={styles.content}>Enter your username and password, and enjoy ordering food.</Text>
        
        <Separator height={15} />

        <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
                <Feather name="mail" size={22} color={Colors.DEFAULT_GREY} style={{marginRight: 10}} />
                <TextInput placeholder='Email' placeholderTextColor={Colors.DEFAULT_GREY} selectionColor={Colors.DEFAULT_GREY} style={styles.inputText} onChangeText={(text) => setEmail(text)} />
            </View>
        </View>
        <Separator height={15} />
        <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
                <Feather name="lock" size={22} color={Colors.DEFAULT_GREY} style={{marginRight: 10}} />
                <TextInput secureTextEntry={isPasswordShow ? false : true} placeholder='Password' placeholderTextColor={Colors.DEFAULT_GREY} selectionColor={Colors.DEFAULT_GREY} style={styles.inputText} onChangeText={(text) => setPassword(text)} />
                <Feather name={isPasswordShow ? "eye" : "eye-off" } size={22} color={Colors.DEFAULT_GREY} style={{marginRight: 10}} onPress={() => setIsPasswordShow(!isPasswordShow)} />
            </View>
        </View>

        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

        <Separator height={15} />

        <View style={styles.forgotPasswordContainer}>
            <View style={styles.toggleContainer}>
                <ToggleButton size={0.5} />
                <Text style={styles.rememberMeText}>Remember me</Text>
            </View>
            <Text onPress={() => navigation.navigate('forgotPassword')} style={styles.forgotPasswordText}>Forgot Password</Text>
        </View>

        <TouchableOpacity style={styles.signinButton} onPress={() => login()}>
            
            {isLoading ? (
                      <LottieView source={Images.LOADING} autoPlay loop style={{ width: 50, height: 50 }} />
                    ) : (
                      <Text style={styles.signinButtonText}>Sign In</Text>
                    )}
        </TouchableOpacity>

        <View style={styles.signupContainer}>
            <Text style={styles.accountText}>{"Don't have an Account?"}</Text>
            <Text style={styles.signupText} onPress={() => navigation.navigate('signup')}>Sign Up</Text>
        </View>

        <Text style={styles.orText}>OR</Text>
        <Separator height={15} />
        <TouchableOpacity style={styles.facebookButton}>
            <View style={styles.socialButtonsContainer}>
                <View style={styles.signinButtonLogoContainer}>
                    <Image source={Images.FACEBOOK} style={styles.signinButtonLogo} />                    
                </View>
                <Text style={styles.socialSigninButtonText}>Connect with Facebook</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
            <View style={styles.socialButtonsContainer}>
                <View style={styles.signinButtonLogoContainer}>
                    <Image source={Images.GOOGLE} style={styles.signinButtonLogo} />                    
                </View>
                <Text style={styles.socialSigninButtonText}>Connect with Google</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE    
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content:{
    fontSize: 16,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DARK_THREE,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  inputContainer:{
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center'
  },
  inputSubContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputText:{
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: Colors.DEFAULT_BLACK,
    flex: 1,
  },
  forgotPasswordContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rememberMeText: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREY,
    fontFamily: Fonts.POPPINS_MEDIUM
  },
  forgotPasswordText: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_BOLD
  },
  signinButton:{
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signinButtonText:{
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM
  },
  signupContainer: {
    marginHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  accountText:{
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM
  },
  signupText:{
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5
  },
  orText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5,
    textAlign: 'center'
  },
  facebookButton:{
    backgroundColor: Colors.FABEBOOK_BLUE,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  googleButton:{
    backgroundColor: Colors.GOOGLE_BLUE,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signinButtonLogo: {
    height: 18,
    width: 18,
  },
  signinButtonLogoContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 2,
    borderRadius: 3,
    position: 'absolute',
    left: 25,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialSigninButtonText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
  
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
   errorMessage: {
      fontSize: 12,
      lineHeight: 12 * 1.4,
      color: Colors.DEFAULT_RED,
      fontFamily: Fonts.POPPINS_MEDIUM,
      marginHorizontal: 20,
      marginTop: 5,
    },

})


export default SigninScreen
