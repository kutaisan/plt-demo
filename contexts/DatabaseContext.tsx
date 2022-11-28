import React from 'react';
import {createContext, useReducer} from 'react';
import { DatabaseType } from '../global/reducer.types';
import DatabaseReducer from '../reducers/DatabaseReducer';

interface IStateContext {
  state: DatabaseType;
  dispatch: ({type, payload}: {type: string; payload: any}) => void;
}

const initialState = {
  products: []
};

export const DatabaseContext = createContext({} as IStateContext);

const DatabaseContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(DatabaseReducer, initialState);

  return (
    <DatabaseContext.Provider value={{state, dispatch} as IStateContext}>
      {props.children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseContextProvider;
