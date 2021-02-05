import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import BalancePanelLabel from './BalancePanelLabel'
import BalancePanelChart from './BalancePanelChart'

const BalancePanel = () => {
    return (
        <View style={styles.container}>
            <BalancePanelLabel></BalancePanelLabel>
            <BalancePanelChart></BalancePanelChart>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    }
});

export default BalancePanel;
