import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CarContext } from '../context/CarContext';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardScreen() {
  // Access the global car data
  const { cars } = useContext(CarContext);

  // Calculate inventory statistics
  const totalCars = cars.length;
  const availableCars = cars.filter(car => car.status === 'Available').length;
  const soldCars = cars.filter(car => car.status === 'Sold').length;

  // Calculate total revenue from sold cars
  const totalRevenue = cars
    .filter(car => car.status === 'Sold')
    .reduce((sum, car) => sum + parseFloat(car.price || 0), 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Inventory Overview</Text>

      <View style={styles.statsContainer}>
        {/* Total Cars Card */}
        <View style={[styles.statCard, { borderTopColor: '#2b6cb0' }]}>
          <Ionicons name="car-sport" size={32} color="#2b6cb0" />
          <Text style={styles.statValue}>{totalCars}</Text>
          <Text style={styles.statLabel}>Total Cars</Text>
        </View>

        {/* Available Cars Card */}
        <View style={[styles.statCard, { borderTopColor: '#38a169' }]}>
          <Ionicons name="checkmark-circle" size={32} color="#38a169" />
          <Text style={styles.statValue}>{availableCars}</Text>
          <Text style={styles.statLabel}>Available</Text>
        </View>

        {/* Sold Cars Card */}
        <View style={[styles.statCard, { borderTopColor: '#e53e3e' }]}>
          <Ionicons name="pricetag" size={32} color="#e53e3e" />
          <Text style={styles.statValue}>{soldCars}</Text>
          <Text style={styles.statLabel}>Sold</Text>
        </View>
      </View>

      {/* Revenue Card */}
      <View style={styles.revenueContainer}>
        <Text style={styles.revenueLabel}>Total Revenue Generated</Text>
        <Text style={styles.revenueValue}>${totalRevenue.toLocaleString()}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f2f5', 
    padding: 20 
  },
  headerTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#1a202c', 
    marginBottom: 20 
  },
  statsContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between' 
  },
  statCard: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderTopWidth: 4,
  },
  statValue: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#2d3748', 
    marginVertical: 8 
  },
  statLabel: { 
    fontSize: 14, 
    color: '#718096', 
    fontWeight: '600' 
  },
  revenueContainer: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#38a169'
  },
  revenueLabel: { 
    fontSize: 16, 
    color: '#718096', 
    marginBottom: 5, 
    fontWeight: '600' 
  },
  revenueValue: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#38a169' 
  },
});