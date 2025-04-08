import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logotipo = () => {
    return (
        <View>
            <Text style={styles.tituloEven}>
                Even
                <Text style={styles.tituloTec}>Tec</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tituloEven: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#CD5C5C',
    },
    tituloTec: {
        color: '#4682B4',
    },
});

export default Logotipo;