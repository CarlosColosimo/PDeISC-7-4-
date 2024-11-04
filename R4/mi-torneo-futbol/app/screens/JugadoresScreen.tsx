import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import JugadorCard from '../components/JugadorCard';

// Definir la interfaz para el jugador
interface Jugador {
    id: number;
    nombre: string;
    edad: number;
    posicion: string;
    numero: number;
    equipo: string;
}

const JugadoresScreen: React.FC = () => {
    const [jugadores, setJugadores] = useState<Jugador[]>([]); // Definir el estado como un array de jugadores

    useEffect(() => {
        axios.get('http://localhost:3000/jugadores')
            .then(response => {
                setJugadores(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={jugadores}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <JugadorCard jugador={item} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default JugadoresScreen;
