import { Products } from "./utils/model";

export default function (): Products[] {
  const products: Products[] = [
    {
      id: 1,
      name: "Cheese",
      description: "200g cheese block",
      price: 10,
      image: "cheese.png",
      storage: "Store in a cool place (between 5°C and 15°C)",
      detail: "200g cheese block sold at",
      nutrition: { protein: 25, fat: 33, carbohydrates: 1.3, salt: 1 },
    },
    {
      id: 2,
      name: "Milk",
      description: "200ml milk bottle",
      price: 5,
      image: "milk.png",
      storage: "Store in the fridge",
      detail: "200ml milk bottle sold at",
      nutrition: { protein: 16, fat: 15, carbohydrates: 11, salt: 0.44 },
    },
    {
      id: 3,
      name: "Tomato",
      description: "1 piece of tomato",
      price: 2.75,
      image: "tomato.png",
      storage: "Store in a cool place, away from the sun.",
      detail: "1 piece of tomato sold at",
      nutrition: { protein: 1, fat: 0.2, carbohydrates: 4, salt: 0 },
    },
    {
      id: 4,
      name: "Pineapple",
      description: "500g pineapple",
      price: 3.25,
      image: "pineapple.png",
      storage: "Store in a cool place, away from the sun.",
      detail: "500g pineapple sold at",
      nutrition: { protein: 1, fat: 2, carbohydrates: 22, salt: 0 },
    },
  ];

  return products;
}
