import React from 'react';

import { Button, Text, View } from 'react-native';

import { paths } from '../../../paths';

export default function Feed({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>feed screen</Text>
            <Button
                title="Event detail"
                onPress={() => navigation.navigate(paths.home.components.detail.name)}
            />
        </View>
    );
}