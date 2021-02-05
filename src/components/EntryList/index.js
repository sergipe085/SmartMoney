import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import EntryListItem from './EntryListItem'

const EntryList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ultimos Lancamentos</Text>

            <FlatList
            data={[
                {key: "Padaria Asa Branca: $10"},
                {key: "Supermercado Isadora: $110"},
                {key: "Posto Ipiranga: $900"},
            ]}
            renderItem = {({item}) => <Text style={styles.entry}>{item.key}</Text>}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    entry: {
        fontSize: 14,
    },
});

export default EntryList;
