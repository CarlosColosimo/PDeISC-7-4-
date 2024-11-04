import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import EquipoCard from '../components/EquipoCard';

// Definir la interfaz para el equipo
interface Equipo {
    id: number;
    escudo: string;
    nombre: string;
    jugadores: string[];
}

// Definir el componente EquiposScreen
const EquiposScreen: React.FC = () => {
    const [equipos, setEquipos] = useState<Equipo[]>([]); // Definir el estado como un array de equipos

    useEffect(() => {
        axios.get('http://localhost:3000/equipos')
            .then(response => {
                setEquipos(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={equipos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <EquipoCard equipo={item} />
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

export default EquiposScreen;
