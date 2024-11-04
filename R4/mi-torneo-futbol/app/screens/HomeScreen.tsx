import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

// Definir la interfaz para las propiedades de navegación
interface HomeScreenProps {
    navigation: NavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenidos a Recetas Mama Coco</Text>
            <Button
                title="Equipos"
                onPress={() => navigation.navigate('Equipos')}
            />
            <Button
                title="Jugadores"
                onPress={() => navigation.navigate('Jugadores')}
            />
            <Button
                title="Partidos"
                onPress={() => navigation.navigate('Partidos')}
            />
            <Button
                title="Estadísticas"
                onPress={() => navigation.navigate('Estadisticas')}
            />
            <Button
                title="Usuarios"
                onPress={() => navigation.navigate('Usuarios')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default HomeScreen;
