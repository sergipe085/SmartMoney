import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BalanceLabel = () => {
    return (
        <View>
            <Text style={styles.label}>Saldo Atual</Text>
            <Text style={styles.value}>$2.453,98</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 12,
    },
    value: {
        fontSize: 18,
    }
});

export default BalanceLabel
