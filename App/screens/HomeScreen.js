import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Ir para Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
        color="#5902E5"
      />
      <Button
        title="Ir para Consulta"
        onPress={() => navigation.navigate('Consulta')}
        color="#02DAC5"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
})

