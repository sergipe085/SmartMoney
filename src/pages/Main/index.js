import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BalancePanel from "./../../components/BalancePanel";
import EntrySummary from "./../../components/EntrySummary";
import EntryList from "./../../components/EntryList";

const Main = () => {
    return (
        <View style={styles.container}>
            <BalancePanel></BalancePanel>
            <EntrySummary></EntrySummary>
            <EntryList></EntryList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flexex: 1,
        padding: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Main;