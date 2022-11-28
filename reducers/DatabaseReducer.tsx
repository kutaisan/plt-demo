import { DatabaseType, ProductType } from '../global/reducer.types';

type DatabaseAction =
  | {type: 'SET_DATABASE'; payload: {products: ProductType[]}};

const DatabaseReducer = (prevState: DatabaseType, action: DatabaseAction) => {
  switch (action.type) {
    case 'SET_DATABASE':
      return {
        ...prevState,
        products: [...action.payload.products],
      };
    default:
      return prevState;
  }
};

export default DatabaseReducer;
