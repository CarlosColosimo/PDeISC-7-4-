// /tabs/UserProfile.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleUpdateProfile = () => {
    // Maneja la actualización del perfil aquí
    console.log('Nombre:', name);
    console.log('Ubicación:', location);
    console.log('Teléfono:', phone);
    console.log('Foto:', photo);
  };

  return (
    <View>
      <Text>Actualizar Perfil</Text>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <Button title="Seleccionar Foto" onPress={pickImage} />
      {photo && <Image source={{ uri: photo }} style={{ width: 100, height: 100 }} />}
      <TextInput
        placeholder="Ubicación"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        placeholder="Teléfono"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Actualizar Perfil" onPress={handleUpdateProfile} />
    </View>
  );
};

export default UserProfile;
