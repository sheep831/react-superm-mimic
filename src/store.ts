import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./redux/reducer";

const reducers = combineReducers({
    product: productReducer
})

export type RootState = ReturnType<typeof reducers>;

export const store = configureStore({
    reducer: reducers
})