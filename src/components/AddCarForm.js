import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function AddCarForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');

  const handleAdd = () => {
    if (!name || !company || !price || !year) {
      alert("Please fill in all required fields");
      return;
    }
    onSubmit({ name, company, price, year, image });
    setName(''); setCompany(''); setPrice(''); setYear(''); setImage('');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Car Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Company (e.g., Toyota)" value={company} onChangeText={setCompany} />
      <TextInput style={styles.input} placeholder="Price ($)" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Model Year" value={year} onChangeText={setYear} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Image URL (Optional)" value={image} onChangeText={setImage} />
      
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Car to Inventory</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  input: { backgroundColor: '#f7fafc', borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 8, padding: 15, marginBottom: 15, fontSize: 16 },
  button: { backgroundColor: '#2b6cb0', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});