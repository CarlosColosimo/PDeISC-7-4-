// screens/BiometricAuthScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function BiometricAuthScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const authenticate = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Autenticación Biométrica',
    });
    setIsAuthenticated(result.success);
  };

  return (
    <View style={styles.container}>
      <Text>{isAuthenticated ? 'Autenticación exitosa' : 'No autenticado'}</Text>
      <Button title="Autenticar" onPress={authenticate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
