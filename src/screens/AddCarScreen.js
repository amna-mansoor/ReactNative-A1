import React, { useContext } from 'react';
import AddCarForm from '../components/AddCarForm';
import { CarContext } from '../context/CarContext';

export default function AddCarScreen({ navigation }) {
  const { addCar } = useContext(CarContext);

  const handleAddSubmit = (carData) => {
    addCar(carData);
    navigation.navigate('All Cars'); // Go back to list after adding
  };

  return <AddCarForm onSubmit={handleAddSubmit} />;
}