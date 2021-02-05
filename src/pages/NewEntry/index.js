import React from 'react'
import { View, Text } from 'react-native'

import BalanceLabel from "./components/BalaceLabel"

const NewEntry = () => {
    return (
        <View>
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
