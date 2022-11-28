// CREATED ONE SINGLE FILE FOR COMPONENT TYPES FOR SMALL APPLICATION

import { TextStyle, ViewStyle } from "react-native";
import { ProductType } from "./reducer.types";

// BUTTONS
// ERROR
export interface ButtonType {
    title: string;
    onPress: () => void;
    containerStyle? : ViewStyle;
    titleStyle? : TextStyle;
}
  
// PRODUCTS
export interface AddRemoveButtonGroupType {
    handleAddProduct: (id: number, price: number) => void;
    handleRemoveProduct: (id: number, price: number) => void;
    quantity: number;
    id: number;
    price: number;
}

export interface PriceTextType {
    price: number;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
}

export interface ProductListItemType {
    item: ProductType;
    index: number;
    handleAddProduct: (id: number, price: number) => void;
    handleRemoveProduct: (id: number, price:number) => void;
    getProductQuantity: (id: number) => number;
    handleProductPress: (id: number) => void;
}