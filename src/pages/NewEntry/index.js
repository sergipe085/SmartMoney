import React from 'react'
import { View, StyleSheet } from 'react-native'

import BalanceLabel from "./components/BalaceLabel"

const NewEntry = () => {
    return (
        <View style={styles.container}>
            <BalanceLabel></BalanceLabel>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default NewEntry;
