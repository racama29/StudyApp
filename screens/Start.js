import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import styles from './styles';

export default function StartScreen() {
  return (
    <ScrollView overScrollMode="never" contentContainerStyle={localStyles.container}>
      <Text style={styles.text}>Instrucciones de Instalación y Configuración</Text>

      <Text style={localStyles.instructions}>Si fallan los comandos npm usar --legacy-peer-deps</Text>
      <Text style={localStyles.code}>npx create-expo-app@latest --template blank</Text>
      <Text style={localStyles.code}>npm install @react-navigation/native</Text>
      <Text style={localStyles.code}>npx expo install react-native-screens react-native-safe-area-context</Text>

      <Text style={localStyles.heading}>STACK NAVIGATOR</Text>
      <Text style={localStyles.code}>npm install @react-navigation/native-stack</Text>

      <Text style={localStyles.heading}>DRAWER NAVIGATOR</Text>
      <Text style={localStyles.code}>npm install @react-navigation/drawer</Text>
      <Text style={localStyles.code}>npx expo install react-native-gesture-handler react-native-reanimated</Text>

      <Text style={localStyles.instructions}>Crear gesture-handler.native.js en la raíz:</Text>
      <Text style={localStyles.code}>import 'react-native-gesture-handler';
      </Text>

      <Text style={localStyles.instructions}>Crear gesture-handler.js y añadir en App.js:</Text>
      <Text style={localStyles.code}>import './gesture-handler';</Text>

      <Text style={localStyles.instructions}>Configuración en package.json si falla:</Text>
      <Text style={localStyles.code}>
        {`"dependencies": {
          "@react-navigation/drawer": "^6.7.2",
          "@react-navigation/native": "^6.1.18",
          "@react-navigation/native-stack": "^6.11.0",
          "expo": "~51.0.28",
          "expo-status-bar": "~1.12.1",
          "react": "18.2.0",
          "react-native": "0.74.5",
          "react-native-safe-area-context": "4.10.5",
          "react-native-screens": "4.0.0",
          "react-native-gesture-handler": "~2.16.1",
          "react-native-reanimated": "~3.10.1"
        },`}
      </Text>
      <Text style={localStyles.instructions}>Luego, ejecuta npm update.</Text>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  instructions: {
    fontSize: 16,
    marginVertical: 10,
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 9,
  },
  heading: {
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});