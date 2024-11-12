import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './../styles';

export default function Drawer({navigation}) {
  return (
    <View>
      <Text style={styles.text}>Esta pagina no hace nada, solo sirve para enseñarte el que esta pagina es diferente a la anterior</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicio')}>
          <Text style={styles.buttonText}>Volver a Inicio</Text>
      </TouchableOpacity>
    </View>
  )
}
