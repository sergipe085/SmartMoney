import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import EntrySummaryChart from './EntrySummaryChart'
import EntrySummaryList from './EntrySummaryList'

const EntrySummary = () => {
    return (
        <View style={styles.container}>
            <EntrySummaryChart></EntrySummaryChart>
            <EntrySummaryList></EntrySummaryList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    }
});

export default EntrySummary;
