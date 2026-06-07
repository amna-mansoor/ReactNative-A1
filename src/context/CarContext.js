import React, { createContext, useState } from 'react';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
const [cars, setCars] = useState([
    { 
      id: '1', 
      name: 'Civic', 
      company: 'Honda', 
      price: '25000', 
      year: '2023', 
      status: 'Available', 
      image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: '2', 
      name: 'Corolla', 
      company: 'Toyota', 
      price: '22000', 
      year: '2022', 
      status: 'Sold', 
      image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: '3', 
      name: '911 Carrera', 
      company: 'Porsche', 
      price: '114000', 
      year: '2023', 
      status: 'Available', 
      image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: '4', 
      name: 'G-Class', 
      company: 'Mercedes', 
      price: '139000', 
      year: '2022', 
      status: 'Available', 
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: '5', 
      name: 'S-Class', 
      company: 'Mercedes', 
      price: '111000', 
      year: '2023', 
      status: 'Sold', 
      image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=500&q=80' 
    },
  ]);

  const addCar = (car) => {
    setCars([...cars, { ...car, id: Date.now().toString(), status: 'Available' }]);
  };

  const updateCar = (id, updatedCar) => {
    setCars(cars.map(car => car.id === id ? { ...car, ...updatedCar } : car));
  };

  const deleteCar = (id) => {
    setCars(cars.filter(car => car.id !== id));
  };

  const markAsSold = (id) => {
    setCars(cars.map(car => car.id === id ? { ...car, status: 'Sold' } : car));
  };

  return (
    <CarContext.Provider value={{ cars, addCar, updateCar, deleteCar, markAsSold }}>
      {children}
    </CarContext.Provider>
  );
};