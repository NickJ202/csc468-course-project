import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feed } from './feed';
import { Detail } from './detail';

import { stackOptions } from '../../stackOptions';
import { paths } from '../../paths';

const NativeStack = createNativeStackNavigator();

export default function Stack() {
    return (
        <NativeStack.Navigator>
            <NativeStack.Screen
                options={stackOptions}
                name={paths.search.components.feed.name} 
                component={Feed} 
            />
            <NativeStack.Screen 
                options={stackOptions} 
                name={paths.search.components.detail.name} 
                component={Detail} 
            />
        </NativeStack.Navigator>
    );
}