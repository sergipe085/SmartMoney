import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BalanceLabel = () => {
    return (
        <View>
            <Text>Saldo Atual</Text>
            <Text>$2.453,98</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default BalanceLabel
