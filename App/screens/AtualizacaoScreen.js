import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '@env';

const AtualizacaoScreen = () => {

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleAtualizacao = async () => {
    
        if (!id || !nome || !email || !senha) {
            Alert.alert('Erro', 'Todos os camppos são obrigatórios.');
            return;
        }

        try {
            const response = await axios.put(`${API_BASE_URL}/api/atualizacao/${id}`, {
                nome,
                email,
                senha,        
            });
            Alert.alert('Sucesso','Usuário atualizado com sucesso!');
            console.log(response.data);
            setId('');
            setNome('');
            setEmail('');
            setSenha('');
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            Alert.alert('Erro', 'Falha ao atualizar usuário.');
        }
    };

    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.title}> Atualização de Usuário</Text>

            <TextInput
            style={StyleSheet.input}
            placeholder='ID do Usuário'
            value={id}
            onChangeText={setId}
            keyboardType='numeric'
            />

            <TextInput
            style={StyleSheet.input}
            placeholder='Nome'
            value={nome}
            onChangeText={setNome}
            />

            <TextInput
            style={StyleSheet.input}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            keyboardType='email address'
            />

            <TextInput
            style={StyleSheet.input}
            placeholder='Senha'
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            />

            <Button title="Atulizar Usuário" onPress={handleAtualizacao} color="blueviolet" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: '#dddddd',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 16,
      marginBottom: 12,
    },
  });
  
  export default AtualizacaoScreen;