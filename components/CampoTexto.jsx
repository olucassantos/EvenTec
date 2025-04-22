import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CampoTexto = ({ titulo, textoTemporario }) => {
    return (
        <View>
            <Text>{titulo}</Text>

            <View>
                <TextInput
                    placeholder={textoTemporario}
                    style={estilos.campoTexto}
                />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    campoTexto: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
        padding: 5,
        marginBottom: 10,
    }
});

export default CampoTexto;