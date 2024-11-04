import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definir la interfaz para las propiedades del partido
interface Partido {
    equipos: string;
    fecha: string;
    lugar: string;
    resultado: string;
}

interface PartidoCardProps {
    partido: Partido;
}

const PartidoCard: React.FC<PartidoCardProps> = ({ partido }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.info}>Equipos: {partido.equipos}</Text>
            <Text style={styles.info}>Fecha: {partido.fecha}</Text>
            <Text style={styles.info}>Lugar: {partido.lugar}</Text>
            <Text style={styles.resultado}>Resultado: {partido.resultado}</Text>
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
    info: {
        fontSize: 16,
        color: '#666',
    },
    resultado: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
});

export default PartidoCard;
