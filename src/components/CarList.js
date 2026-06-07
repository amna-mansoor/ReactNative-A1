import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import CarItem from './CarItem';

export default function CarList({ data, onMarkSold, onDelete }) {
  if (data.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No cars found in this category.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CarItem car={item} onMarkSold={onMarkSold} onDelete={onDelete} />
      )}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
  emptyText: { fontSize: 16, color: '#888' }
});