import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Basket from '../views/Basket';
import HomeNavigation from './HomeNavigation';
import {BasketContext} from '../contexts/BasketContext';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  const {state: basketState} = useContext(BasketContext);

  const badge = basketState.basket.reduce((acc, prod) => {
    return acc + prod.quantity;
  }, 0);

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{tabBarBadge: badge !== 0 ? badge : undefined}}
      />
    </Tab.Navigator>
  );
}
