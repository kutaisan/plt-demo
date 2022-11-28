import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import ProductDetails from '../views/ProductDetails';

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}
