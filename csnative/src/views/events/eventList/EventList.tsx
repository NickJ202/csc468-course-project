import React from 'react';

import { Button, Text, View } from 'react-native';

import { paths } from '../../../paths';

export default function EventList({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>event list screen</Text>
            <Button
                title="Event sign in"
                onPress={() => navigation.navigate(paths.events.components.eventSignIn.name)}
            />
            <Button
                title="Event cancel"
                onPress={() => navigation.navigate(paths.events.components.eventCancel.name)}
            />
            <Button
                title="Event redeem"
                onPress={() => navigation.navigate(paths.events.components.eventRedeem.name)}
            />
        </View>
    );
}