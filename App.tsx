/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useMemo, useReducer} from 'react';

import AppNavigation from './navigations/AppNavigation';
import AuthReducer from './reducers/AuthReducer';
import {AuthContext, initialState} from './contexts/AuthContext';
import SplashScreen from './views/SplashScreen';
import DatabaseContextProvider from './contexts/DatabaseContext';
import BasketContextProvider from './contexts/BasketContext';

const App = () => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const authContext = useMemo(
    () => ({
      offLoading: async () => {
        dispatch({type: 'OFF_LOADING'});
      },
      onLoading: async () => {
        dispatch({type: 'SET_LOADING'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <DatabaseContextProvider>
        <BasketContextProvider>
          <NavigationContainer independent={true}>
            {state.isLoading ? <SplashScreen /> : <AppNavigation />}
          </NavigationContainer>
        </BasketContextProvider>
      </DatabaseContextProvider>
    </AuthContext.Provider>
  );
};

export default App;
