// screens/LocalStorageScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LocalStorageScreen() {
  const [name, setName] = useState('');
  const [storedName, setStoredName] = useState('');

  useEffect(() => {
    loadName();
  }, []);

  const saveName = async () => {
    await AsyncStorage.setItem('userName', name);
    setStoredName(name);
  };

  const loadName = async () => {
    const savedName = await AsyncStorage.getItem('userName');
    if (savedName) {
      setStoredName(savedName);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ingresa tu nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Guardar" onPress={saveName} />
      <Text>Nombre Guardado: {storedName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});
