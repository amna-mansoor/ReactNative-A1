import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import Screens
import DashboardScreen from '../screens/DashboardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AllCarsScreen from '../screens/AllCarsScreen';
import AddCarScreen from '../screens/AddCarScreen';
import SoldCarsScreen from '../screens/SoldCarsScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator (Inside Car Management)
function CarManagementTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'All Cars') iconName = 'car-sport';
          else if (route.name === 'Add Car') iconName = 'add-circle';
          else if (route.name === 'Sold Cars') iconName = 'checkmark-done-circle';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2b6cb0',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="All Cars" component={AllCarsScreen} />
      <Tab.Screen name="Add Car" component={AddCarScreen} />
      <Tab.Screen name="Sold Cars" component={SoldCarsScreen} />
    </Tab.Navigator>
  );
}

// Main Drawer Navigator
export default function AppNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard" screenOptions={{ headerTintColor: '#2b6cb0' }}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{ drawerIcon: ({color}) => <Ionicons name="pie-chart" size={22} color={color} /> }}/>
      <Drawer.Screen name="Car Management" component={CarManagementTabs} options={{ drawerIcon: ({color}) => <Ionicons name="list" size={22} color={color} /> }}/>
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ drawerIcon: ({color}) => <Ionicons name="settings" size={22} color={color} /> }}/>
    </Drawer.Navigator>
  );
}