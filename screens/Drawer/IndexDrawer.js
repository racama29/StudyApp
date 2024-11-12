import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './../styles';

export default function DrawerScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Usa el Drawer Navigator de arriba a la derecha</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicio')}>
          <Text style={styles.buttonText}>Volver a Inicio</Text>
      </TouchableOpacity>
    </View>
  );
}
