import 'react-native-gesture-handler'; // MUST BE AT THE TOP
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { CarProvider } from './src/context/CarContext';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <CarProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <AppNavigator />
      </NavigationContainer>
    </CarProvider>
  );
}