import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UsuarioProps {
    usuario: {
        nombre: string;
        rol: string;
        email: string;
    };
}

const UsuarioCard: React.FC<UsuarioProps> = ({ usuario }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.nombre}>{usuario.nombre}</Text>
            <Text style={styles.info}>Rol: {usuario.rol}</Text>
            <Text style={styles.info}>Email: {usuario.email}</Text>
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

export default UsuarioCard;
