import React from 'react';

import { Button, Text, View } from 'react-native';

import { paths } from '../../../paths';

export default function Feed({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>search feed screen</Text>
            <Button
                title="search detail"
                onPress={() => navigation.navigate(paths.search.components.detail.name)}
            />
        </View>
    );
}