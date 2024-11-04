import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      animatedValue.setValue(0);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => animate()); 
    };

    animate();
  }, [animatedValue]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20], 
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hola Mundo
        <Animated.Text style={[styles.emoji, { transform: [{ translateY }] }]}>
          👋
        </Animated.Text>
      </Text>
      <Text style={styles.subtitle}>Esta es mi primera APK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A1CEDC', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold', 
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  emoji: {
    fontSize: 32, 
    marginLeft: 8, 
  },
  subtitle: {
    marginTop: 16,
    fontSize: 24, 
  },
});
