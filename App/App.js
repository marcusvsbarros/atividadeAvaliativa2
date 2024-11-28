import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CadastroScreen from './screens/CadastroScreen';
import ConsultaScreen from './screens/ConsultaScreen';
import AtualizacaoScreen from './screens/AtualizacaoScreen';
import DeleteScreen from './screens/DeleteScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Cadastro de Usuário' }} />
        <Stack.Screen name="Consulta" component={ConsultaScreen} options={{ title: 'Consulta de Usuário' }} />
        <Stack.Screen name="Alteração" component={AtualizacaoScreen} options={{ title: 'Atualização de Usuário' }} />
        <Stack.Screen name="Apagar" component={DeleteScreen} options={{ title: 'Apagar Usuário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
