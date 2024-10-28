// screens/HomeScreen.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Autenticación Biométrica" onPress={() => navigation.navigate('BiometricAuth')} />
      <Button title="Cámara" onPress={() => navigation.navigate('Camera')} />
      <Button title="Geolocalización" onPress={() => navigation.navigate('Geolocation')} />
      <Button title="Compartir App" onPress={() => navigation.navigate('ShareApp')} />
      <Button title="Giroscopio" onPress={() => navigation.navigate('Gyroscope')} />
      <Button title="Notificaciones PUSH" onPress={() => navigation.navigate('Notifications')} />
      <Button title="Almacenamiento Local" onPress={() => navigation.navigate('LocalStorage')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
