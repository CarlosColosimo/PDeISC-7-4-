// screens/GyroscopeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Gyroscope } from 'expo-sensors';

export default function GyroscopeScreen() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Gyroscope.addListener((gyroscopeData) => setData(gyroscopeData));
    Gyroscope.setUpdateInterval(1000); // Actualiza cada segundo

    return () => Gyroscope.removeAllListeners();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Giroscopio:</Text>
      <Text>x: {data.x.toFixed(2)}</Text>
      <Text>y: {data.y.toFixed(2)}</Text>
      <Text>z: {data.z.toFixed(2)}</Text>
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
