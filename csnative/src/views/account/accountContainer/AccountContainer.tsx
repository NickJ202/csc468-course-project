import React from 'react';

import { Button, Text, View } from 'react-native';

import { paths } from '../../../paths';

export default function AccountContainer({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>feed screen</Text>
            <Button
                title="address manage"
                onPress={() => navigation.navigate(paths.account.components.addressManage.name)}
            />
            <Button
                title="event redeem"
                onPress={() => navigation.navigate(paths.account.components.eventRedeemList.name)}
            />
            <Button
                title="personal info manage"
                onPress={() => navigation.navigate(paths.account.components.personalInfoManage.name)}
            />
        </View>
    );
}