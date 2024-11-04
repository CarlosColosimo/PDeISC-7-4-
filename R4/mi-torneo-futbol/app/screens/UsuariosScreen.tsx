import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import UsuarioCard from '../components/UsuarioCard';

// Definir la interfaz para el usuario
interface Usuario {
    id: number;
    nombre: string;
    rol: string;
    email: string;
}

const UsuariosScreen: React.FC = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]); // Definir el estado como un array de usuarios

    useEffect(() => {
        axios.get('http://localhost:3000/usuarios')
            .then(response => {
                setUsuarios(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <UsuarioCard usuario={item} />
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

export default UsuariosScreen;
