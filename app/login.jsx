import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

// Importando o componente de navegação
import Logotipo from '../components/Logotipo';
import CampoTexto from '../components/CampoTexto';
import Botao from '../components/Botao';

const Login = () => {
    return (
        <View style={estilos.telaLogin}>
            <Logotipo />

            <View style={estilos.caixaCampos}>
                <CampoTexto 
                    titulo="Telefone"
                    textoTemporario={"Digite seu telefone"}
                />

                <CampoTexto 
                    titulo="Senha"
                    textoTemporario={"Qual sua senha?"}
                />
            </View>

            <Botao 
                titulo="Entrar"
                acaoClique={() => router.push('/cadastro')}
                estaCarregando={false}
            />

        </View>
    );
}

const estilos = StyleSheet.create({
    telaLogin: {
        flex: 1,
        backgroundColor: '#DDDDDD',
        padding: 20,
    },
    caixaCampos: {
        borderWidth: 1,
        borderColor: '#cecece',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
        boxShadow: '0 0 9px rgba(0, 0, 0, 0.2)',
    }
});

export default Login;