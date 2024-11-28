import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '@env';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/cadastro`, {
        nome,
        email,
        senha,
      });
      console.log(response.data);
      setNome('');
      setEmail('');
      setSenha('');
    } catch (error) {
      console.error('Erro ao enviar dados: ', error);
    }
  };

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/consulta`);

    } catch (error) {
      console.error('Erro so buscar dados:', error);
    }
  }

  useEffect(()=>{
    fetchUsuarios();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar"
          onPress={handleCadastro}
          color="#5902E5"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 65,
  },
  
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
  },

  buttonContainer: {
    width: 150, 
    height: 50, 
    marginLeft: 100,
  },
});
