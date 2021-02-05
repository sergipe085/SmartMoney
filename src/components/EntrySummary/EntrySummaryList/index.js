import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const EntrySummaryList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categoria</Text>

            <FlatList 
                data={[
                    {key: "Alimentacao: $201"},
                    {key: "Combustivel: $12"},
                    {key: "Aluguel: $120"},
                    {key: "Lazer: $250"},
                    {key: "Outros: $1200"},
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

export default EntrySummaryList;
