import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import BiometricAuthScreen from './BiometricAuthScreen';
import GeolocationScreen from './GeolocationScreen';
import ShareAppScreen from './ShareAppScreen';
import GyroscopeScreen from './GyroscopeScreen';
import NotificationsScreen from './NotificationsScreen';
import LocalStorageScreen from './LocalStorageScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BiometricAuth" component={BiometricAuthScreen} />
        <Stack.Screen name="Geolocation" component={GeolocationScreen} />
        <Stack.Screen name="ShareApp" component={ShareAppScreen} />
        <Stack.Screen name="Gyroscope" component={GyroscopeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="LocalStorage" component={LocalStorageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
