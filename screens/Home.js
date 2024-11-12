import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Esta aplicación se ha creado para estudiar el primer examen de Interfaces</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Crear proyecto')}>
        <Text style={styles.buttonText}>Crear proyecto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Stack Navigator')}>
        <Text style={styles.buttonText}>Stack Navigator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Drawer')}>
        <Text style={styles.buttonText}>Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}
