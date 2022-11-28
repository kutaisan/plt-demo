import React, {useContext, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import C2AButton from '../components/buttons/clickToAction';
import {AuthContext} from '../contexts/AuthContext';
import {DatabaseContext} from '../contexts/DatabaseContext';
import {instance} from '../services/instance';

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setError] = useState<boolean>(false);
  const [info, setInfo] = useState<string>('');
  const {offLoading} = useContext(AuthContext);
  const {dispatch} = useContext(DatabaseContext);

  const getProducts = async () => {
    try {
      setLoading(true);
      setInfo('Loading...');
      const products = await instance.get('products');
      dispatch({type: 'SET_DATABASE', payload: {products: products.data}});
      offLoading();
    } catch (e) {
      setError(true);
      setInfo('An error occurred :/');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {loading && <ActivityIndicator />}
        <Text>{info}</Text>
      </View>
      {hasError && (
        <C2AButton
          containerStyle={{backgroundColor: 'red'}}
          title="Retry"
          onPress={getProducts}
        />
      )}
    </SafeAreaView>
  );
}
