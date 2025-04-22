import React from 'react'
import { View, Text } from 'react-native';
import Logotipo from '../components/Logotipo';
import CampoTexto from '../components/CampoTexto';
import Botao from '../components/Botao';
import { router } from 'expo-router';

const Cadastro = () => {
    return (
        <View>
            <Logotipo />
            
            <CampoTexto 
                titulo="Nome"
                textoTemporario={"Digite seu nome"}
            />

            <CampoTexto 
                titulo="Telefone"
                textoTemporario={"Digite seu numero de telefone"}
            />

            <CampoTexto 
                titulo="Email"
                textoTemporario={"Informe seu email"}
            />

            <CampoTexto 
                titulo="Senha"
                textoTemporario={"Crie uma senha"}
            />

            <Botao 
                titulo="Cadastrar"
                acaoClique={() => router.push('/login')}
                estaCarregando={false}
            />

        </View>
    );
}

export default Cadastro;