import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import C2AButton from '../components/buttons/clickToAction';
import PriceText from '../components/products/PriceText';
import ProductListItem from '../components/products/ProductListItem';
import {BasketContext} from '../contexts/BasketContext';
import {DatabaseContext} from '../contexts/DatabaseContext';

export default function Basket() {
  const {state} = useContext(DatabaseContext);
  const {state: basketState, dispatch: basketDispatch} =
    useContext(BasketContext);

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const basketProducts = state.products.filter(product =>
    basketState.basket.some(b => b.id === product.id),
  );

  const handleProductPress = (id: number) => {
    navigation.navigate('ProductDetails', {
      id,
    });
  };

  const handleAddProduct = (id: number, price: number) => {
    basketDispatch({type: 'ADD_PRODUCT', payload: {id, price}});
  };

  const handleRemoveProduct = (id: number, price: number) => {
    basketDispatch({type: 'REMOVE_PRODUCT', payload: {id, price}});
  };

  const getProductQuantity = (id: number): number => {
    const product = basketState.basket.find(item => item.id === id);
    if (product) {
      return product.quantity;
    } else {
      return 0;
    }
  };

  const totalPrice = state.products.reduce((acc, item) => {
    basketState.basket.map(product => {
      if (product.id === item.id) {
        acc += product.totalPrice;
      }
    });
    return acc;
  }, 0);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, paddingHorizontal: 30}}
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
        ListEmptyComponent={() => (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <C2AButton
              title="Go find a few products to add here!"
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        )}
        data={basketProducts}
      />
      {!!basketProducts.length && (
        <View style={{padding: 10}}>
          <Text style={{textAlign: 'right'}}>Total Price</Text>
          <PriceText price={totalPrice} />
        </View>
      )}
    </SafeAreaView>
  );
}
