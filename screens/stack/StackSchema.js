import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function StackSchemaScreen() {
  return (
    <ScrollView overScrollMode="never" contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejemplo de Configuración del Stack Navigator</Text>

      <Text style={styles.text}>
        Para implementar un Stack Navigator, sigue estos pasos:
      </Text>

      {/* Bloque de código */}
      <View style={styles.codeBlock}>
        <Text style={styles.code}>
        {`
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
    </NavigationContainer>
);
}`
        }
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  codeBlock: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 5,
  },
  code: {
    fontFamily: 'monospace', // Asegura un tipo de letra monoespaciada
    fontSize: 10,
    color: '#333',
  },
});
