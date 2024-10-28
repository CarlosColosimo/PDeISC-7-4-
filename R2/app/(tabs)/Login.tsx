// /tabs/Login.tsx

import React from 'react';
import { Button, View, Text } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { useAuthRequest } from 'expo-auth-session';
import { NavigationProp } from '@react-navigation/native'; // Importa NavigationProp

// Define la interfaz para las props
interface Props {
  navigation: NavigationProp<any>; // Puedes especificar el tipo más exacto si tienes tus rutas definidas
}

const Login: React.FC<Props> = ({ navigation }) => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: 'TU_CLIENT_ID_DE_GOOGLE.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      // Maneja el token aquí, guarda en el estado o envíalo a tu backend
      console.log('Token de ID:', id_token);
      // Navega al perfil del usuario
      navigation.navigate('UserProfile');
    }
  }, [response]);

  return (
    <View>
      <Text>Iniciar sesión</Text>
      <Button
        disabled={!request}
        title="Iniciar sesión con Google"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
};

export default Login;
