import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import PartidoCard from '../components/PartidoCard';

// Definir la interfaz para el partido
interface Partido {
    id: number;
    equipos: string; // Puedes cambiar el tipo según la estructura de datos real
    fecha: string;
    lugar: string;
    resultado: string;
}

const PartidosScreen: React.FC = () => {
    const [partidos, setPartidos] = useState<Partido[]>([]); // Definir el estado como un array de partidos

    useEffect(() => {
        axios.get('http://localhost:3000/partidos')
            .then(response => {
                setPartidos(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={partidos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <PartidoCard partido={item} />
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

export default PartidosScreen;
