import React from 'react';
import {
  View,
  Text,
  FlatListProps,
  ListRenderItem,
  Image,
  TouchableOpacity,
} from 'react-native';
import { ProductListItemType } from '../../global/component.types';
import AddRemoveButtonGroup from './AddRemoveButtonGroup';
import PriceText from './PriceText';

export default function ProductListItem(props: ProductListItemType) {
  const {
    item,
    handleAddProduct,
    handleRemoveProduct,
    getProductQuantity,
    handleProductPress,
  } = props;
  const {id, name, img, price, colour} = item;

  const quantity: number = getProductQuantity(id);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 15,
        overflow: 'hidden',
      }}>
      <TouchableOpacity
        onPress={() => handleProductPress(id)}
        style={{flex: 1, flexDirection: 'row', paddingHorizontal: 10}}>
        <Image
          source={{uri: img}}
          style={{height: 60, width: 60}}
          resizeMode="contain"
        />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{flex: 1, fontSize: 16}} numberOfLines={2}>
            {name}
          </Text>
          <PriceText price={item.price}/>
        </View>
      </TouchableOpacity>
      <AddRemoveButtonGroup
        id={item.id}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        quantity={quantity}
        price={item.price}
      />
    </View>
  );
}
