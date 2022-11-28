import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import AddRemoveButtonGroup from '../components/products/AddRemoveButtonGroup';
import PriceText from '../components/products/PriceText';
import {BasketContext} from '../contexts/BasketContext';
import {ProductType} from '../global/reducer.types';
import {instance} from '../services/instance';

export default function ProductDetails() {
  const [product, setProduct] = useState<ProductType | null>(null);
  const {state: basketState, dispatch: basketDispatch} =
    useContext(BasketContext);
    const route: RouteProp<{ params: { id: number }}> = useRoute()

  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const {id} = route.params;

  const getProductDetail = async () => {
    try {
      const productDetailResponse = await instance.get(`products/${id}`);
      const product = productDetailResponse.data;
      setProduct(product);
    } catch (e) {
      navigation.goBack();
    } finally {
    }
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  const handleAddProduct = (id: number, price: number) => {
    basketDispatch({type: 'ADD_PRODUCT', payload: {id, price}});
  };

  const handleRemoveProduct = (id: number, price: number) => {
    basketDispatch({type: 'REMOVE_PRODUCT', payload: {id, price}});
  };

  const getProductQuantity = () => {
    const product = basketState.basket.find(item => item.id === id);
    if (product) {
      return product.quantity;
    } else {
      return 0;
    }
  };

  const quantity = getProductQuantity();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1, paddingHorizontal: 30}}>
        {!product ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={{flex: 1, alignItems: 'center'}}>
            <View style={{flex: 1 / 2}}>
              <Image
                source={{uri: product?.img}}
                style={{width: 136, height: 250}}
              />
            </View>
            <Text numberOfLines={1} style={{textAlign: 'center', fontSize: 18}}>
              {product?.name}
            </Text>
            <Text>Colour: {product?.colour}</Text>
            <PriceText price={product?.price!} />
          </View>
        )}
      </ScrollView>
      {product && (
        <AddRemoveButtonGroup
          id={product.id}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          quantity={quantity}
          price={product.price}
        />
      )}
    </SafeAreaView>
  );
}
