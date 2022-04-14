import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MessageList } from './messageList';
import { MessageFocus } from './messageFocus';

import { stackOptions } from '../../stackOptions';
import { paths } from '../../paths';

const NativeStack = createNativeStackNavigator();

export default function Stack() {
    return (
        <NativeStack.Navigator>
            <NativeStack.Screen
                options={stackOptions}
                name={paths.messages.components.messageList.name} 
                component={MessageList} 
            />
            <NativeStack.Screen 
                options={stackOptions} 
                name={paths.messages.components.messageFocus.name} 
                component={MessageFocus} 
            />
        </NativeStack.Navigator>
    );
}