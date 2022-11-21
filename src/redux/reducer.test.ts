import { productReducer, ProductState } from './reducer';

const cheese = {
    id: 1,
    name: "Cheese",
    description: "200g cheese block",
    price: 10,
    image: "cheese.png",
    storage: "Store in a cool place (between 5°C and 15°C)",
    detail: "200g cheese block sold at",
    nutrition: { protein: 25, fat: 33, carbohydrates: 1.3, salt: 1 },
  }

describe('Product Reducer',()=>{
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
   
    it("should delete the item in cart",()=>{
        const finalState = productReducer(initialState, {type: 'DELETE_PRODUCT_IN_CART', payload: 1})
        expect(finalState).toEqual([]);
    });
});