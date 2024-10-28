// app/_layout.tsx

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

// Definir el tipo del componente
const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {children} {/* Renderiza las pantallas que gestiona el router */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Layout;
