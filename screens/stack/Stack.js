import React from 'react';
import { Text, ScrollView } from 'react-native';
import styles from '../styles';

export default function StackScreen() {
  return (
    <ScrollView overScrollMode="never" style={styles.container}>
      <Text style={styles.instructions}>En React Native, un Stack Navigator es una herramienta que ayuda a organizar la navegación en 
        una aplicación de una manera sencilla y visual, como si se tratara de un "montón" de pantallas apiladas unas 
        sobre otras (de ahí el nombre "stack", que significa pila en inglés).</Text>
      <Text style={styles.title}>Ejemplo para entender el Stack Navigator:</Text>
      <Text style={styles.exampleText}>1. Supón que tienes una aplicación con tres pantallas: Inicio, Perfil y Detalles.</Text>
      <Text style={styles.exampleText}>2. Cuando estás en la pantalla de Inicio y vas a Perfil, el navegador "pone" la pantalla de Perfil encima de Inicio.</Text>
      <Text style={styles.exampleText}>3. Si luego vas a Detalles, ahora tienes una pila que va de Inicio a Perfil y finalmente a Detalles.</Text>
      <Text style={styles.exampleText}>4. Para regresar, puedes "sacar" la pantalla actual (es decir, Detalles) y verás de nuevo la pantalla de Perfil.</Text>
      <Text style={styles.exampleText}>5. Si sigues retrocediendo, vuelves al inicio de la aplicación, en la pantalla de Inicio.</Text> 
    </ScrollView>
  );
}
