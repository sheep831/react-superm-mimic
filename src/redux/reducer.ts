import { ProductAction } from "./action";

export interface ProductState {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const defaultState: ProductState[] = JSON.parse(localStorage.getItem("cart") || "[]");

export function productReducer(state = defaultState, action: ProductAction):ProductState[] {
    if (action.type === 'ADD_TO_CART') {
        const itemInCart = state.filter((item) => item.id === action.payload.id)[0]
        if (itemInCart) {
            itemInCart!.quantity ++; 
            localStorage.setItem('cart', JSON.stringify([...state]))
            return [...state];
        } else {
            localStorage.setItem('cart', JSON.stringify([...state, {...action.payload, quantity: 1}]))
             return [...state, {...action.payload, quantity: 1}]
        }
    } else
    if (action.type === 'INCREMENT_QUANTITY') {
        const item = state.filter((item) => item.id === action.payload)[0];
            item!.quantity ++;
            return [...state]
        
    } else
    if (action.type === 'DECREMENT_QUANTITY') {
        const item = state.filter((item) => item.id === action.payload)[0];
        if (item!.quantity === 1) {
            state.filter((item) => item.id !== action.payload)
            return [...state]
        } else {
            item!.quantity--;
            return [...state]
        }
    } else
    if (action.type === 'DELETE_PRODUCT_IN_CART') {
        const itemIndex = state.findIndex((item) => item.id === action.payload);
        state.splice(itemIndex, 1);
        localStorage.setItem('cart', JSON.stringify([...state]))
        return [...state]
    } else {
        return state
    }
}