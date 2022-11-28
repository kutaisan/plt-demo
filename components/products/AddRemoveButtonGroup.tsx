import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { AddRemoveButtonGroupType } from '../../global/component.types';

export default function AddRemoveButtonGroup(props: AddRemoveButtonGroupType) {
  const {quantity, handleRemoveProduct, handleAddProduct, id, price} = props;
  return (
    <View>
      {quantity ? (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => handleRemoveProduct(id, price)}
            style={{
              flex: 2 / 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 15,
              backgroundColor: 'red',
            }}>
            <Text style={{color: 'white'}}>-</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1 / 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{quantity}</Text>
          </View>
          <TouchableOpacity
            onPress={() => handleAddProduct(id, price)}
            style={{
              flex: 2 / 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 15,
              backgroundColor: 'green',
            }}>
            <Text style={{color: 'white'}}>+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => handleAddProduct(id, price)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 15,
              backgroundColor: 'green',
            }}>
            <Text style={{color: 'white'}}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
