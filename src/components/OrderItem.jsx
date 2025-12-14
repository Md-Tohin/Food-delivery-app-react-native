import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Fonts, Images, Display } from '~/contants';

const OrderItem = ({ item, onReorder, onHelp }) => {
    console.log(item);
    
    return (
        <View style={styles.cardContainer}>

            <View style={styles.infoContainer}>
                <View style={styles.itemInfo}>
                    <View style={styles.itemLeft}>
                        <Text style={styles.foodName}>Order Id: {item?._id}</Text>
                        <Text style={styles.dateText}>Order Date: {item.orderDate} · {item.time}</Text>
                        <Text style={styles.dateText}>Order Status: {item.status}</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.reorderButton} onPress={() => onReorder(item)}>
                        <Text style={styles.buttonText}>view</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.helpButton} onPress={() => onHelp(item)}>
                        <Text style={styles.helpText}>invoice</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: Colors.LIGHT_GREY,
        marginVertical: 7,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 2,
    },
    foodImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'space-between',        
    },
    itemInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    itemLeft: {

    },

    foodName: {
        fontSize: 16,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
    },
    dateText: {
        fontSize: 12,
        color: Colors.INACTIVE_GREY,
    },
    priceText: {
        fontSize: 14,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_YELLOW,
        marginVertical: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    reorderButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginRight: 10,
    },
    buttonText: {
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM,
    },
    helpButton: {
        borderWidth: 1,
        borderColor: Colors.INACTIVE_GREY,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    helpText: {
        color: Colors.INACTIVE_GREY,
        fontFamily: Fonts.POPPINS_MEDIUM,
    },
});

export default OrderItem;