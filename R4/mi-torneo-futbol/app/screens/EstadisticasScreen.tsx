import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

// Definir la interfaz para las estadísticas
interface Estadistica {
    equipo: string;
    partidosJugados: number;
    goles: number;
    tarjetasAmarillas: number;
    tarjetasRojas: number;
}

const EstadisticasScreen: React.FC = () => {
    const [estadisticas, setEstadisticas] = useState<Estadistica[]>([]); // Definir el estado como un array de estadísticas

    useEffect(() => {
        axios.get('http://localhost:3000/estadisticas')
            .then(response => {
                setEstadisticas(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estadísticas</Text>
            <Text>{JSON.stringify(estadisticas, null, 2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default EstadisticasScreen;
