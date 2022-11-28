import React from 'react';
import {createContext, useReducer} from 'react';
import { BasketType } from '../global/reducer.types';
import BasketReducer from '../reducers/BasketReducer';

interface IStateContext {
  state: BasketType;
  dispatch: ({type, payload}: {type: string; payload: any}) => void;
}

const initialState = {
  basket: [],
  totalPrice: 0
};

export const BasketContext = createContext({} as IStateContext);

const BasketContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(BasketReducer, initialState);

  return (
    <BasketContext.Provider value={{state, dispatch} as IStateContext}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
