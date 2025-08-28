import React, { useRef, useState } from 'react'
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WelcomeCard } from '~/components';
import Separator from '~/components/Separator';
import { Colors, Fonts, Images } from '~/contants';
import General from '~/contants/General';
import { Display } from '~/utils';

const pageStyle = isActive => isActive ? styles.page : {...styles.page, backgroundColor: Colors.DEFAULT_GREY}

const Pagination = ({index}) => {
    return (
        <View style={styles.pageContainer}>
            {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) => 
                i === index ? (<View style={pageStyle(true)} key={i} />) : (<View style={pageStyle(false)} key={i} />)
            )}
        </View>
    )
}

const WelcomeScreen = ({navigation}) => {
    const [welcomeListIndex, setWelcomeListIndex] = useState(0);
    const welcomeList = useRef()

    const onViewRef = useRef(({changed}) => {
        setWelcomeListIndex(changed[0].index)
    })

    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

    const pageScroll = () => {
        welcomeList.current.scrollToIndex({
          index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,  
        })
    }
  return (
    <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.DEFAULT_WHITE} translucent />
        <Separator height={StatusBar.currentHeight} />
        <Separator height={Display.setHeight(10)} />
        <View style={styles.welcomeListContainer}>
            <FlatList 
                ref={welcomeList}
                data={General.WELCOME_CONTENTS}
                keyExtractor={item => item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                overScrollMode='never'
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
                renderItem={({item}) => <WelcomeCard {...item} />}
            />
        </View>
        <Separator height={Display.setHeight(2)} />
        <Pagination index={welcomeListIndex} />
        <Separator height={Display.setHeight(10)} />
        {
            welcomeListIndex === 2 ? (
                <TouchableOpacity style={styles.gettingStartedButton} activeOpacity={0.8} onPress={() => navigation.navigate('signin')}>
                    <Text style={styles.gettingStartedButtonText}>Get Started</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity activeOpacity={0.8} style={{marginLeft: 10}} onPress={() => welcomeList.current.scrollToEnd()}>
                        <Text style={styles.buttonText}>SKIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => pageScroll()}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  welcomeListContainer: {
    height: Display.setHeight(60)
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 32,
    marginHorizontal: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Display.setWidth(90)
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 16 * 1.4,
  },
  button: {
    backgroundColor: Colors.LIGHT_GREEN,
    paddingHorizontal: 11,
    paddingVertical: 20,
    borderRadius: 32
  },
  gettingStartedButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2
  },
  gettingStartedButtonText: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
    lineHeight: 20 * 1.4,    
  }
});

export default WelcomeScreen
