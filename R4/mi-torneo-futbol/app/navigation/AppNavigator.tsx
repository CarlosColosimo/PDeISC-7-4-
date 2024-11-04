import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EquiposScreen from '../screens/EquiposScreen';
import JugadoresScreen from '../screens/JugadoresScreen';
import PartidosScreen from '../screens/PartidosScreen';

const Stack = createStackNavigator();

type RootStackParamList = {
    Home: undefined; 
    Equipos: undefined; 
    Jugadores: undefined; 
    Partidos: undefined; 
};

const AppNavigator: React.FC = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Equipos" component={EquiposScreen} />
        <Stack.Screen name="Jugadores" component={JugadoresScreen} />
        <Stack.Screen name="Partidos" component={PartidosScreen} />
    </Stack.Navigator>
);

export default AppNavigator;
