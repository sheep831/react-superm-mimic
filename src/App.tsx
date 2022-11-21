import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import {
  Logo,
  LinkDiv,
  BarList,
  NavItem,
  NavBar,
} from "./css/AppStyle";
import GlobalStyle from "./css/Global";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import ProductNutrition from "./pages/ProductNutrition";
import ProductStorage from "./pages/ProductStorage";
import NotFound from "./pages/NotFound";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const numberOfItemsInCart = useSelector((state:RootState) => state.product.length);
  // const [cart, setCart] = useState<number>(0);
  
  // function updateCart() {
  //   setCart(numberOfItemsInCart);
  //   console.log(numberOfItemsInCart);
    
  // }
  
  return (
    <>
      <GlobalStyle />
      <NavBar>
        <Logo to="/"><div>Super M</div></Logo>
        <BarList>
          <NavItem>
            <LinkDiv to="/">Home</LinkDiv>
          </NavItem>
          <NavItem>
            <LinkDiv to="/about">About Us</LinkDiv>
          </NavItem>
          <NavItem>
            <LinkDiv to="/product">Products</LinkDiv>
          </NavItem>
          <NavItem>
            <LinkDiv to="/cart">Cart ({numberOfItemsInCart})</LinkDiv>
          </NavItem>
        </BarList>
      </NavBar>

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="product" element={<Product 
        // onChange={() => updateCart()}
        />} />
          <Route path="product/:id" element={<ProductDetails />} >
            <Route path="nutrition" element={<ProductNutrition />} />
            <Route path="storage" element={<ProductStorage />} />
          </Route>
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
