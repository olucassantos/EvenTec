import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CampoTexto = ({ titulo, textoTemporario, valor, aoAlterarTexto }) => {
    return (
        <View>
            <Text>{titulo}</Text>

            <View>
                <TextInput
                    placeholder={textoTemporario}
                    style={estilos.campoTexto}
                    onChangeText={aoAlterarTexto}
                    value={valor}
                />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    campoTexto: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        fontSize: 16,
        padding: 10,
        marginBottom: 10,
    }
});

export default CampoTexto;