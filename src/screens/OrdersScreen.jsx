import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import OrderCard from '~/components/OrderCard';
import { Colors, Fonts } from '~/contants';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import Separator from '~/components/Separator';
import { Display } from '~/utils';
import { OrderService } from '~/services';
import ApiContents from '~/contants/ApiContents';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { authHeader } from '~/utils/Generator';
import { OrderItem } from '~/components';



const OrdersScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Processing');
    const [orders, setOrders] = useState(null);

    const loadOrders = async () => {
        try {

            const { getToken } = await import("../Store");
            const token = getToken();

            let response = await axios.get(
                `${ApiContents.BACKEND_API.BASE_APP_URL}${ApiContents.BACKEND_API.ORDER}`,
                {
                    headers: authHeader(token),
                },
            );

            // console.log("response: ", response?.data?.data);
            if (response?.status === 200) {
                setOrders(response?.data?.data);
                return {
                    status: true,
                    message: `Order data fetched`,
                    data: response?.data?.data,
                };
            } else {
                return {
                    status: false,
                    message: `Order data not found`,
                };
            }
        } catch (error) {
            console.log("API ERROR:", error);
            return {
                status: false,
                message: `Order data not found`,
            };
        }
    }

    useEffect(() => {
        loadOrders();
    }, []);



    // Sample data
    const myOrders = [
        {
            id: '1',
            name: 'Cheese Burger',
            date: '25 May 2020',
            time: '11:30',
            price: 15.0,
            image: 'https://via.placeholder.com/80',
        },
        {
            id: '2',
            name: 'Chicken Burger',
            date: '25 May 2020',
            time: '12:00',
            price: 18.0,
            image: 'https://via.placeholder.com/80',
        },
    ];

    const handleReorder = (item) => {
        console.log('Reorder:', item.name);
    };

    const handleHelp = (item) => {
        console.log('Help:', item.name);
    };

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={Colors.DEFAULT_WHITE}
                translucent
            />
            <Separator height={StatusBar.currentHeight} />
            <View style={styles.headerContainer}>
                <Ionicons
                    name="chevron-back-outline"
                    size={30}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.headerTitle}>My Orders</Text>
            </View>

            <Separator height={Display.setHeight(3)} />

            {/* Tabs */}
            <View style={styles.tabContainer}>
                {['Processing', 'Confirmed', 'Delivered'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[
                            styles.tabButton,
                            activeTab === tab && styles.activeTab,
                        ]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === tab && styles.activeTabText,
                            ]}
                        >
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Orders List */}
            <FlatList
                data={orders}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <OrderItem item={item} onReorder={handleReorder} onHelp={handleHelp} />
                )}
                contentContainerStyle={{ paddingBottom: 50 }}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign: 'center',
    },

    headerText: {
        fontSize: 22,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        margin: 15,
    },
    tabContainer: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 10,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: Colors.DEFAULT_WHITE,
        marginRight: 5,
        borderRadius: 8,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: Colors.DEFAULT_GREEN,
    },
    tabText: {
        fontSize: 14,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.INACTIVE_GREY,
    },
    activeTabText: {
        color: Colors.DEFAULT_WHITE,
    },
});

export default OrdersScreen;