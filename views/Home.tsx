import React, {useContext, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, Alert} from 'react-native';
import ProductListItem from '../components/products/ProductListItem';
import { BasketContext } from '../contexts/BasketContext';
import {DatabaseContext} from '../contexts/DatabaseContext';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native'
import { instance } from '../services/instance';

export default function Home() {
  const {state, dispatch} = useContext(DatabaseContext);
  const {state: basketState, dispatch: basketDispatch} = useContext(BasketContext);
  const [loading, setLoading] = useState<boolean>(false);

  const navigation: NavigationProp<ParamListBase> = useNavigation();
  
  const getProducts = async () => {
    try {
      setLoading(true);
      const products = await instance.get('products');
      dispatch({type: 'SET_DATABASE', payload: {products: products.data}});
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleProductPress = (id: number) => {
      navigation.navigate("ProductDetails", {
          id
      })
  }

  const handleAddProduct = (id: number, price: number) => {
    basketDispatch({type:'ADD_PRODUCT', payload: { id, price }})
  };

  const handleRemoveProduct = (id: number, price: number) => {
    basketDispatch({type:'REMOVE_PRODUCT', payload: { id, price }})
  };

  const getProductQuantity = (id: number): number => {
    const product = basketState.basket.find(item => item.id === id)
    if(product){
        return product.quantity;
    } else {
        return 0;
    }
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
      onRefresh={getProducts}
      refreshing={loading}
        contentContainerStyle={{padding: 30}}
        style={{flex: 1}}
        renderItem={({item, index}) => (
          <ProductListItem
            item={item}
            index={index}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            getProductQuantity={getProductQuantity}
            handleProductPress={handleProductPress}
          />
        )}
        data={state.products}
      />
    </SafeAreaView>
  );
}
