import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Definir la interfaz para las propiedades del componente
interface Equipo {
    escudo: string;
    nombre: string;
    jugadores: string[];
}

interface EquipoCardProps {
    equipo: Equipo;
}

const EquipoCard: React.FC<EquipoCardProps> = ({ equipo }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: equipo.escudo }} style={styles.image} />
            <Text style={styles.nombre}>{equipo.nombre}</Text>
            <Text style={styles.jugadores}>Jugadores: {equipo.jugadores.join(', ')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    },
    nombre: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    jugadores: {
        fontSize: 16,
        color: '#666',
    },
});

export default EquipoCard;
