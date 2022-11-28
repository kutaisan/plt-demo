import React from 'react';
import {View, Text} from 'react-native';
import { PriceTextType } from '../../global/component.types';

export default function PriceText(props: PriceTextType) {
  const {price, containerStyle = {}, textStyle = {}} = props;
  return (
    <View style={containerStyle}>
      <Text
        style={[
          {
            textAlign: 'right',
            fontSize: 18,
            color: 'red',
            fontWeight: 'bold',
          },
          textStyle,
        ]}>
        £{price.toFixed(2).replace(/,/g, '.')}
      </Text>
    </View>
  );
}
