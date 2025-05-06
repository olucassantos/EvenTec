import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Logotipo from '../components/Logotipo';
import CampoTexto from '../components/CampoTexto';
import Botao from '../components/Botao';
import { router } from 'expo-router';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estaCarregando, setEstaCarregando] = useState(false);

    return (
        <View style={estilos.telaCadastro}>
            <Logotipo />
            
            <View style={estilos.caixaCampos}>
                <CampoTexto 
                    titulo="Nome"
                    textoTemporario={"Digite seu nome"}
                    aoAlterarTexto={setNome}
                    valor={nome}
                />

                <CampoTexto 
                    titulo="Telefone"
                    textoTemporario={"Digite seu numero de telefone"}
                    aoAlterarTexto={setTelefone}
                    valor={telefone}
                />

                <CampoTexto 
                    titulo="Email"
                    textoTemporario={"Informe seu email"}
                    aoAlterarTexto={setEmail}
                    valor={email}
                />

                <CampoTexto 
                    titulo="Senha"
                    textoTemporario={"Crie uma senha"}
                    aoAlterarTexto={setSenha}
                    valor={senha}
                />
            </View>

            <Botao 
                titulo="Cadastrar"
                acaoClique={() => router.push('/login')}
                estaCarregando={estaCarregando}
            />

        </View>
    );
}

const estilos = StyleSheet.create({
    telaCadastro: {
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

export default Cadastro;