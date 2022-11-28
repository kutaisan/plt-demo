// CREATED ONE SINGLE FILE FOR REDUCER TYPES FOR SMALL APPLICATION

export interface ProductType {
    id: number;
    colour: string;
    name: string;
    price: number;
    img: string;
}

export interface DatabaseType {
    products: ProductType[]
}

export interface BasketItemType {
    id: number;
    quantity: number;
    totalPrice: number;
}

export interface BasketType {
    basket: BasketItemType[];
}