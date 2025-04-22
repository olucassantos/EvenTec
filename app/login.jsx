import React from 'react'
import { View, Text } from 'react-native';
import { router } from 'expo-router';
// Importando o componente de navegação
import Logotipo from '../components/Logotipo';
import CampoTexto from '../components/CampoTexto';
import Botao from '../components/Botao';

const Login = () => {
    return (
        <View>
            <Logotipo />

            <CampoTexto 
                titulo="Telefone"
                textoTemporario={"Digite seu telefone"}
            />

            <CampoTexto 
                titulo="Senha"
                textoTemporario={"Qual sua senha?"}
            />

            <Botao 
                titulo="Entrar"
                acaoClique={() => router.push('/cadastro')}
                estaCarregando={false}
            />

        </View>
    );
}

export default Login;