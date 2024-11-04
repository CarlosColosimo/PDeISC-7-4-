import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definir la interfaz para las propiedades del jugador
interface Jugador {
    nombre: string;
    edad: number;
    posicion: string;
    numero: number;
    equipo: string;
}

interface JugadorCardProps {
    jugador: Jugador;
}

const JugadorCard: React.FC<JugadorCardProps> = ({ jugador }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.nombre}>{jugador.nombre}</Text>
            <Text style={styles.info}>Edad: {jugador.edad}</Text>
            <Text style={styles.info}>Posición: {jugador.posicion}</Text>
            <Text style={styles.info}>Número: {jugador.numero}</Text>
            <Text style={styles.info}>Equipo: {jugador.equipo}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    nombre: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    info: {
        fontSize: 16,
        color: '#666',
    },
});

export default JugadorCard;
