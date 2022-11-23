import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Container, Layout, ProductButton } from "../css/HomeStyle";
import home from "../img/home.jpg";

export default function Home() {
  useEffect(() => {
    (async function () {
      const res = await fetch(
        `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc`
      );

      const result = await res.json();

      console.log(result);
    })();
  }, []);

  return (
    <Container>
      <div className="grid container">
      <div className="row">
        <Layout className="col-md">
          <h1>Online shopping simplified</h1>
          <p>
            Order your groceries from <i>SuperM</i> with our easy to use app,
            and get your products delivered straight to your doorstep.
          </p>
          <NavLink to="/product">
            <ProductButton>Start shopping</ProductButton>
          </NavLink>
        </Layout>
       <img src={home} alt="" width="350" height="240" className="col-md"/></div>
      </div>
    </Container>
  );
}
