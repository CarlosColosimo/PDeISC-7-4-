import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A1CEDC', // Puedes ajustar el color de fondo si lo deseas
  },
  title: {
    fontSize: 32, // Puedes ajustar el tamaño de la fuente
    fontWeight: 'bold', // Puedes ajustar el peso de la fuente
  },
});
