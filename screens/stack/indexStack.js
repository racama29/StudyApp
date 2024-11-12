import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './../styles';

export default function IndexStackScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Stack Navigator</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('¿Que es el Stack Navigator?')}>
        <Text style={styles.buttonText}>¿Que es?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Estructura')}>
        <Text style={styles.buttonText}>Estructura</Text>
      </TouchableOpacity>
    </View>
  );
}
