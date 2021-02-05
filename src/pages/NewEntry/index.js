import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

import BalanceLabel from "../../components/BalanceLabel"

const NewEntry = () => {
    return (
        <View style={styles.container}>
            <BalanceLabel></BalanceLabel>

            <View>
                <TextInput style={styles.input}></TextInput>
                <TextInput style={styles.input}></TextInput>
                <Button title="GPS"></Button>
                <Button title="Camera"></Button>
            </View>

            <View>
                <Button title="Adicionar"></Button>
                <Button title="Cancelar"></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 20,
    },
});

export default NewEntry;
