import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {AuthenticationStack} from '../views/authentication';
import {HomeStack} from '../views/home';
import {EventsStack} from '../views/events';
import {SearchStack} from '../views/search';
import {MessagesStack} from '../views/messages';
import {AccountStack} from '../views/account';

import {paths} from '../paths';
import {theme} from '../themes';

import {ICON_NAMES} from '../constants';

const Tab = createBottomTabNavigator();

function getIconName(routeName: string) {
    switch (routeName) {
        case paths.home.name:
            return ICON_NAMES.HOME;
        case paths.events.name:
            return ICON_NAMES.EVENTS;
        case paths.search.name:
            return ICON_NAMES.SEARCH;
        case paths.messages.name:
            return ICON_NAMES.MESSAGES;
        case paths.account.name:
            return ICON_NAMES.ACCOUNT;
    }
}

export default function Routes() {
    const authenticated = false;
    return authenticated ?
        (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({color}) => {
                            return <Ionicons name={getIconName(route.name)} size={24} color={color}/>;
                        },
                        tabBarActiveTintColor: theme.colors.tabBarActive,
                        tabBarInactiveTintColor: theme.colors.tabBarInactive,
                        headerShown: false,
                        tabBarShowLabel: false
                    })}
                >
                    <Tab.Screen name={paths.home.name} component={HomeStack}/>
                    <Tab.Screen name={paths.events.name} component={EventsStack}/>
                    <Tab.Screen name={paths.search.name} component={SearchStack}/>
                    <Tab.Screen name={paths.messages.name} component={MessagesStack}/>
                    <Tab.Screen name={paths.account.name} component={AccountStack}/>
                </Tab.Navigator>
            </NavigationContainer>
        ) :
        (
            <NavigationContainer>
                <AuthenticationStack/>
            </NavigationContainer>
        )
}