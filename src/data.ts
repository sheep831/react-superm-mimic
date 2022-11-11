import { Products } from "./utils/model";

export default function (): Products[] {
  const products: Products[] = [
    {
      id: 1,
      name: "Cheese",
      description: "200g cheese block",
      price: 10,
      image: "cheese.png",
    },
    {
      id: 2,
      name: "Milk",
      description: "200ml milk bottle",
      price: 5,
      image: "milk.png",
    },
    {
      id: 3,
      name: "Tomato",
      description: "1 piece of tomato",
      price: 2.75,
      image: "tomato.png",
    },
    {
      id: 4,
      name: "Pineapple",
      description: "500g pineapple",
      price: 3.25,
      image: "pineapple.png",
    },
  ];

  return products;
}
