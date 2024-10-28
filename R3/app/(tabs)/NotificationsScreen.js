// screens/NotificationsScreen.js
import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function NotificationsScreen() {
  useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, []);

  const sendNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Hola!',
        body: 'Esta es una notificación de prueba.',
      },
      trigger: { seconds: 2 },
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Enviar Notificación" onPress={sendNotification} />
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
