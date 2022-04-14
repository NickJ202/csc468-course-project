import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EventList } from './eventList';
import { EventSignIn } from './eventSignIn';
import { EventCancel } from './eventCancel';
import { EventRedeem } from './eventRedeem';

import { stackOptions } from '../../stackOptions';
import { paths } from '../../paths';

const NativeStack = createNativeStackNavigator();

export default function Stack() {
    return (
        <NativeStack.Navigator>
            <NativeStack.Screen 
                options={stackOptions}
                name={paths.events.components.eventList.name} 
                component={EventList}
            />
            <NativeStack.Screen 
                options={stackOptions}
                name={paths.events.components.eventSignIn.name} 
                component={EventSignIn}
            />
            <NativeStack.Screen 
                options={stackOptions}
                name={paths.events.components.eventCancel.name} 
                component={EventCancel}
            />
            <NativeStack.Screen 
                options={stackOptions}
                name={paths.events.components.eventRedeem.name} 
                component={EventRedeem}
            />
        </NativeStack.Navigator>
    );
}