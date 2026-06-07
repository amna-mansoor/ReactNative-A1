import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CarItem({ car, onMarkSold, onDelete }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: car.image || 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=500&q=80' }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{car.company} {car.name}</Text>
          <Text style={[styles.status, car.status === 'Sold' ? styles.sold : styles.available]}>
            {car.status}
          </Text>
        </View>
        <Text style={styles.details}>Year: {car.year}</Text>
        <Text style={styles.price}>${car.price}</Text>
        
        <View style={styles.actions}>
          {car.status === 'Available' && (
            <TouchableOpacity style={styles.btnSold} onPress={() => onMarkSold(car.id)}>
              <Text style={styles.btnText}>Mark Sold</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.btnDelete} onPress={() => onDelete(car.id)}>
            <Ionicons name="trash-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 15, marginVertical: 10, marginHorizontal: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 5, overflow: 'hidden' },
  image: { width: '100%', height: 180 },
  infoContainer: { padding: 15 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  status: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 5, fontSize: 12, fontWeight: 'bold', overflow: 'hidden' },
  available: { backgroundColor: '#e6f4ea', color: '#1e8e3e' },
  sold: { backgroundColor: '#fce8e6', color: '#d93025' },
  details: { color: '#666', marginBottom: 5 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#2b6cb0', marginBottom: 15 },
  actions: { flexDirection: 'row', justifyContent: 'flex-end', gap: 10 },
  btnSold: { backgroundColor: '#2b6cb0', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 8 },
  btnDelete: { backgroundColor: '#e53e3e', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  btnText: { color: '#fff', fontWeight: 'bold' }
});