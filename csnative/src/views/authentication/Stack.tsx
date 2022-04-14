import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Landing} from './landing';
import {LogIn} from './logIn';

import {SignUp_EmailPassword_1} from './signUp_EmailPassword_1';
import {SignUp_FullName_2} from './signUp_FullName_2';
import {SignUp_Phone_3} from './signUp_Phone_3';
import {SignUp_PhoneConfirm_4} from './signUp_PhoneConfirm_4';
import {SignUp_PhoneVerify_5} from './signUp_PhoneVerify_5';
import {SignUp_Success_6} from './signUp_Success_6';

import {stackOptions} from '../../stackOptions';
import {paths} from '../../paths';

import {theme} from '../../themes';

import {ICON_NAMES} from '../../constants';
import {ForgotPassword_Email_1} from './forgotPassword_Email_1';

const NativeStack = createNativeStackNavigator();

export default function Stack() {
    return (
        <NativeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.viewBackground
                },
                headerShadowVisible: false,
            }}
            // TEMP INITIAL ROUTE NAME
            // initialRouteName={paths.authentication.components.signUp_Phone_3.name}
        >
            <NativeStack.Screen
                options={stackOptions}
                name={paths.authentication.components.landing.name}
                component={Landing}
            />
            <NativeStack.Screen
                options={({navigation}) => ({
                    headerLeft: () => (
                        <Ionicons
                            onPress={() => navigation.navigate(paths.authentication.components.landing.name)}
                            name={ICON_NAMES.CLOSE}
                            size={28}
                            color={theme.colors.primary}
                        />
                    ),
                    title: '',
                    headerBackTitleVisible: false,
                    gestureEnabled: false
                })}
                name={paths.authentication.components.signUp_EmailPassword_1.name}
                component={SignUp_EmailPassword_1}
            />
            <NativeStack.Screen
                options={stackOptions}
                name={paths.authentication.components.signUp_FullName_2.name}
                component={SignUp_FullName_2}
            />
            <NativeStack.Screen
                options={stackOptions}
                name={paths.authentication.components.signUp_Phone_3.name}
                component={SignUp_Phone_3}
            />
            <NativeStack.Screen
                options={stackOptions}
                name={paths.authentication.components.signUp_PhoneConfirm_4.name}
                component={SignUp_PhoneConfirm_4}
            />
            <NativeStack.Screen
                options={stackOptions}
                name={paths.authentication.components.signUp_PhoneVerify_5.name}
                component={SignUp_PhoneVerify_5}
            />
            <NativeStack.Screen
                options={stackOptions}
                name={paths.authentication.components.signUp_Success_6.name}
                component={SignUp_Success_6}
            />
            <NativeStack.Screen
                options={stackOptions}
                name={paths.authentication.components.forgotPassword_Email_1.name}
                component={ForgotPassword_Email_1}
            />
            <NativeStack.Screen
                options={({navigation}) => ({
                    headerLeft: () => (
                        <Ionicons
                            onPress={() => navigation.navigate(paths.authentication.components.landing.name)}
                            name={ICON_NAMES.CLOSE}
                            size={28}
                            color={theme.colors.primary}
                        />
                    ),
                    title: '',
                    headerBackTitleVisible: false,
                    gestureEnabled: false
                })}
                name={paths.authentication.components.logIn.name}
                component={LogIn}
            />
        </NativeStack.Navigator>


    );
}