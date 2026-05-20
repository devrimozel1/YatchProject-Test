import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import MainScreen from '../screens/TabBarScreens/MainScreen';
import HomeIcon from "../logos/Homepage.png"
import ReservationIcon from "../logos/Rezervations.png"
import FavoritesIcon from "../logos/Favorites.png"
import ProfileIcon from "../logos/Account.png"
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Rezervations from '../screens/TabBarScreens/Rezervations';
import Favorites from '../screens/TabBarScreens/Favorites';
import Profile from '../screens/TabBarScreens/Profile';

function TabNavigator() {

    const Tab = createBottomTabNavigator();

    return (

        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Anasayfa') {
                    iconName = HomeIcon;
                } else if (route.name === 'Rezervasyonlar') {
                    iconName = ReservationIcon;
                } else if (route.name === 'Favoriler') {
                    iconName = FavoritesIcon;
                } else if (route.name === 'Profil') {
                    iconName = ProfileIcon;
                }

                return <Image source={iconName} style={{ width: size, height: size, tintColor: color, resizeMode: "contain" }} />;
            },
            tabBarActiveTintColor: '#1366B2',
            tabBarInactiveTintColor: 'gray',
        })}
        >
            <Tab.Screen name="Anasayfa" component={MainScreen} />
            <Tab.Screen name="Rezervasyonlar" component={Rezervations} />
            <Tab.Screen name="Favoriler" component={Favorites} />
            <Tab.Screen name="Profil" component={Profile} />

        </Tab.Navigator>
    )
}

export default TabNavigator