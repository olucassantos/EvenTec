import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native';
import Logotipo from '../components/Logotipo';
import CampoTexto from '../components/CampoTexto';
import Botao from '../components/Botao';
import { router } from 'expo-router';

// Importa a função do firebase para fazer o cadastro do usuário
import { cadastrarUsuario } from '../servicos/autenticacao.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estaCarregando, setEstaCarregando] = useState(false);

    const realizarCadastro = async () => {
        // Verifica se os campos estão preenchidos
        if (!nome || !email || !senha || !telefone) {
            Alert.alert("Erro", "Preencha todos os campos!");
            window.alert("Preencha todos os campos!");
            return;
        }

        // Desativa o botão de cadastro enquanto o cadastro está sendo processado
        setEstaCarregando(true);
        
        try {
            // Cria a função de cadastro do usuário no firebase
            const credencialUsuario = await createUserWithEmailAndPassword(auth, email, senha);
            const usuario = credencialUsuario.user;

            // Verifica se o usuário foi criado com sucesso
            if (usuario) {
                // Salva os outro dados
                await setDoc();
            }
        } catch (erro) {

        }
    };

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
                acaoClique={realizarCadastro}
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