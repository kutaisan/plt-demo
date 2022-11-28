import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonType} from '../../global/component.types';

export default function C2AButton(props: ButtonType) {
  const {title, onPress,containerStyle = {}, titleStyle = {}} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    borderRadius: 15,
    padding: 15,
  },
  title: {
    color: 'white'
  }
});
