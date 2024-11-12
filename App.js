import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StarScreen from './screens/Start';
import IndexStackScreen from './screens/stack/indexStack';
import StackScreen from './screens/stack/Stack';
import StackSchemaScreen from './screens/stack/StackSchema';
import HomeScreen from './screens/Home';
import IndexDrawerScreen from './screens/Drawer/IndexDrawer';
import DrawerExample from './screens/Drawer/Drawer';
import DrawerSchema from './screens/Drawer/DrawerSchema';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Drawer">
      <Drawer.Screen name="Drawer Navigator" component={IndexDrawerScreen} />
      <Drawer.Screen name="Pagina 1" component={DrawerExample} />
      <Drawer.Screen name="Pagina 2" component={DrawerSchema} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Crear proyecto" component={StarScreen} />
        <Stack.Screen name="Stack Navigator" component={IndexStackScreen} />
        <Stack.Screen name="¿Que es el Stack Navigator?" component={StackScreen} />
        <Stack.Screen name="Estructura" component={StackSchemaScreen} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}