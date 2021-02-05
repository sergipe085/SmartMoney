import React from 'react'
import { View, Picker, Button, StyleSheet } from 'react-native'

import BalanceLabel from './../../components/BalanceLabel'
import EntrySummary from './../../components/EntrySummary'
import EntryList from './../../components/EntryList'

const Report = () => {
    return (
        <View>
            <BalanceLabel></BalanceLabel>
            <View>
                <Picker>
                    <Picker.Item label="Todas Categorias"></Picker.Item>
                </Picker>
                <Picker>
                    <Picker.item label="Últimos 7 dias"></Picker.item>
                </Picker>
            </View>
            <EntrySummary></EntrySummary>
            <EntryList></EntryList>
            <View>
                <Button title="Salvar"></Button>
                <Button title="Fechar"></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Report;
