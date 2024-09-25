import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Mundo</Text>
    </View>
  );
}

function NewTabScreen() {
  return (
    <View style={styles.newTabContainer}>
      <Text style={styles.newTabText}>Nueva Pestaña</Text>
    </View>
  );
}

// Asumiendo que no estás envolviendo esto en otro NavigationContainer
export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Nueva Pestaña" component={NewTabScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  newTabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  newTabText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
