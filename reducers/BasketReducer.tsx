import {BasketItemType, BasketType, ProductType} from '../global/reducer.types';

type BasketAction =
  | {type: 'ADD_PRODUCT'; payload: {id: number, price: number;}}
  | {type: 'REMOVE_PRODUCT'; payload: {id: number, price: number;}};

const BasketReducer = (prevState: BasketType, action: BasketAction) => {
  const IN_BASKET_PRODUCT = prevState.basket.find(
    a => a.id === action.payload.id,
  );

  switch (action.type) {
    case 'ADD_PRODUCT':
      if (IN_BASKET_PRODUCT) {
        return {
          ...prevState,
          basket: [
            ...prevState.basket.map((item: BasketItemType) => {
              if (item.id === action.payload.id) {
                // IF PRODUCT ALREADY IN BASKET
                return {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: (item.quantity + 1) * action.payload.price
                };
              } else {
                return {...item};
              }
            }),
          ],
        };
      } else {
        return {
          ...prevState,
          basket: [...prevState.basket, {id: action.payload.id, quantity: 1, totalPrice: action.payload.price}],
        };
      }

    case 'REMOVE_PRODUCT':
      if (IN_BASKET_PRODUCT && IN_BASKET_PRODUCT.quantity > 1) {
        return {
          ...prevState,
          basket: [
            ...prevState.basket.map((item: BasketItemType) => {
              if (item.id === action.payload.id) {
                // IF PRODUCT ALREADY IN BASKET
                return {
                  ...item,
                  quantity: item.quantity - 1,
                  totalPrice: (item.quantity - 1) * action.payload.price
                };
              } else {
                return {...item};
              }
            }),
          ],
        };
      } else {
        return {
          ...prevState,
          basket: [
            ...prevState.basket.filter(item => item.id !== action.payload.id),
          ],
        };
      }
    default:
      return prevState;
  }
};

export default BasketReducer;
