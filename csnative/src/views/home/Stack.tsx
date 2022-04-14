import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Detail } from './detail';
import { Feed } from './feed';

import { stackOptions } from '../../stackOptions';
import { paths } from '../../paths';

const NativeStack = createNativeStackNavigator();

export default function Stack() {
    return (
        <NativeStack.Navigator>
            <NativeStack.Screen
                options={stackOptions}
                name={paths.home.components.feed.name} 
                component={Feed} 
            />
            <NativeStack.Screen 
                options={stackOptions} 
                name={paths.home.components.detail.name} 
                component={Detail} 
            />
        </NativeStack.Navigator>
    );
}