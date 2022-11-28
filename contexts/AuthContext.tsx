import React, {createContext} from 'react';

export const initialState = {
  isLoading: true,
};

interface IContextProps {
  offLoading: () => void;
  onLoading: () => void;
}

export const AuthContext = createContext({} as IContextProps);
