import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Layout, ProductButton } from "../css/HomeStyle";
import home from "../img/home.jpg";

export default function Home() {
  return (
    <Container>
      <div className="grid">
        <Layout>
          <h1>Online shopping simplified</h1>
          <p>
            Order your groceries from <i>SuperM</i> with our easy to use app,
            and get your products delivered straight to your doorstep.
          </p>
          <NavLink to="/product">
            <ProductButton>Start shopping</ProductButton>
          </NavLink>
        </Layout>
        <img src={home} width="350" height="240" />
      </div>
    </Container>
  );
}
