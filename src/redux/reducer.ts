import { ProductAction } from "./action";

export interface ProductState {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const defaultState: ProductState[] = [{
    id: 1,
    name: "cheese",
    price: 10,
    quantity: 5,
    image: "cheese.png",
}, {
    id: 2,
    name: "Milk",
    price: 5,
    quantity: 5,
    image: "milk.png",
}]

export function productReducer(state = defaultState, action: ProductAction):ProductState[] {
    if (action.type === 'ADD_TO_CART') {
        const itemInCart = state.find((item) => item.id === action.payload.id)
        if (itemInCart) {
            itemInCart.quantity ++;
            return state
        } else {
             return [...state, {...action.payload, quantity: 1}]
        }
    } else
    if (action.type === 'INCREMENT_QUANTITY') {
        const item = state.find((item) => item.id === action.payload);
            item!.quantity ++;
            return [...state, item!]
        
    } else
    if (action.type === 'DECREMENT_QUANTITY') {
        const item = state.find((item) => item.id === action.payload);
        if (item!.quantity === 1) {
            state.filter((item) => item.id !== action.payload)
            return state
        } else {
            item!.quantity--;
            return [...state, item!]
        }
    } else
    if (action.type === 'DELETE_PRODUCT_IN_CART') {
        const itemIndex = state.findIndex((item) => item.id === action.payload);
        state.splice(itemIndex, 1);
        return state
    } else {
        return state
    }
}