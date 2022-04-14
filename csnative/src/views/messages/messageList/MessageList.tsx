import React from 'react';

import { Button, Text, View } from 'react-native';

import { paths } from '../../../paths';

export default function MessageList({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>message list screen</Text>
            <Button
                title="Message focus"
                onPress={() => navigation.navigate(paths.messages.components.messageFocus.name)}
            />
        </View>
    );
}