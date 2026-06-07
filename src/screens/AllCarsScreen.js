import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import CarList from '../components/CarList';
import { CarContext } from '../context/CarContext';

export default function AllCarsScreen() {
  const { cars, markAsSold, deleteCar } = useContext(CarContext);
  const availableCars = cars.filter(car => car.status === 'Available');

  return (
    <View style={styles.container}>
      <CarList data={availableCars} onMarkSold={markAsSold} onDelete={deleteCar} />
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#f0f2f5' } });