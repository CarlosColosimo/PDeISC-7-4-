// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './(tabs)/Login';
import UserProfile from './(tabs)/UserProfile';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="UserProfile" component={UserProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
