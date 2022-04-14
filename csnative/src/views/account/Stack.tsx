import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AccountContainer } from './accountContainer';
import { AddressManage } from './addressManage';
import { EventRedeemList } from './eventRedeemList';
import { PersonalInfoManage } from './personalInfoManage';
import { Preferences } from './preferences';

import { stackOptions } from '../../stackOptions';
import { paths } from '../../paths';

const NativeStack = createNativeStackNavigator();

export default function Stack() {
    return (
        <NativeStack.Navigator>
            <NativeStack.Screen
                options={stackOptions}
                name={paths.account.components.accountContainer.name}
                component={AccountContainer} 
            />
            <NativeStack.Screen
                options={stackOptions}
                name={paths.account.components.addressManage.name}
                component={AddressManage} 
            />
            <NativeStack.Screen
                options={stackOptions}
                name={paths.account.components.eventRedeemList.name}
                component={EventRedeemList} 
            />
            <NativeStack.Screen
                options={stackOptions}
                name={paths.account.components.personalInfoManage.name}
                component={PersonalInfoManage} 
            />
            <NativeStack.Screen
                options={stackOptions}
                name={paths.account.components.preferences.name}
                component={Preferences} 
            />
        </NativeStack.Navigator>
    );
}