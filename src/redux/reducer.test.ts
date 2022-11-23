import { productReducer, ProductState } from './reducer';

const cheese = {
    id: 1,
    name: "Cheese",
    price: 10,
    quantity: 1,
    image: "cheese.png",
  }

describe('add product to empty cart',()=>{
    let initialState: ProductState[];

    beforeAll(()=>{
        initialState = [];
    })

    it("should add to cart and before that no this item in cart",()=>{
        const finalState = productReducer(initialState, {type: 'ADD_TO_CART', payload: cheese});
        expect(finalState).toEqual([{
            id: 1,
            name: "Cheese",
            price: 10,
            quantity: 1,
            image: "cheese.png",
        }]);
    });
   
    it("should delete the item in cart",()=>{
        const finalState = productReducer(initialState, {type: 'DELETE_PRODUCT_IN_CART', payload: 1})
        expect(finalState).toEqual([]);
    });
});

describe('add same product to cart',()=>{
    let initialState: ProductState[];

    beforeAll(()=>{
        initialState = [{
            id: 1,
            name: "Cheese",
            price: 10,
            quantity: 1,
            image: "cheese.png",
          }];
    })

    it("should add to cart and before that this item is already in cart",()=>{
        const finalState = productReducer(initialState, {type: 'ADD_TO_CART', payload: cheese});
        expect(finalState).toEqual([{
            id: 1,
            name: "Cheese",
            price: 10,
            quantity: 2,
            image: "cheese.png",
        }]);
    });
});