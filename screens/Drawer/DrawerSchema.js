import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function DrawerSchema() {
  return (
    <ScrollView overScrollMode="never" contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejemplo de Configuración del Drawer Navigator</Text>

      <Text style={styles.text}>
        Para implementar un Drawer Navigator, sigue estos pasos:
      </Text>

      {/* Bloque de código */}
      <View style={styles.codeBlock}>
        <Text style={styles.code}>
        {`
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IndexDrawerScreen from './screens/Drawer/IndexDrawer';
import DrawerExample from './screens/Drawer/Drawer';
import DrawerSchema from './screens/Drawer/DrawerSchema';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Drawer">
      <Drawer.Screen name="Drawer Navigator" component={IndexDrawerScreen} />
      <Drawer.Screen name="Pagina 1" component={DrawerExample} />
    </Drawer.Navigator>
  );
}
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
