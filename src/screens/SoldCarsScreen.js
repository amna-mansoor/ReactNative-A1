import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import CarList from '../components/CarList';
import { CarContext } from '../context/CarContext';

export default function SoldCarsScreen() {
  const { cars, deleteCar } = useContext(CarContext);
  const soldCars = cars.filter(car => car.status === 'Sold');

  return (
    <View style={styles.container}>
      <CarList data={soldCars} onDelete={deleteCar} />
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#f0f2f5' } });