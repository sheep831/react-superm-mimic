import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../css/Cart";
import { ProductButton } from "../css/HomeStyle";
import { ProductState } from "../redux/reducer";
import { RootState } from "../store";

export default function Cart() {
  const empty = true;

  const name = useSelector((state: RootState) =>
    state.product.map((item: ProductState) => item.name)
  );
  const price = useSelector((state: RootState) =>
    state.product.map((item: ProductState) => item.price)
  );
  const image = useSelector((state: RootState) =>
    state.product.map((item: ProductState) => item.image)
  );
  const quantity = useSelector((state: RootState) =>
    state.product.map((item: ProductState) => item.quantity)
  );

  return (
    <Container>
      <h1>Your Cart</h1>
      {empty ? (
        "1"
      ) : (
        <>
          <div>
            <div className="title box"></div>
            <div className="box"></div>
            <div className="sum-up title box"></div>
          </div>
          <p></p>
          <p></p>
          <p>
            Email<span>*</span>
          </p>
          <input type="text" placeholder="Email" />
          <div>
            <ProductButton>Pay</ProductButton>
          </div>
        </>
      )}
    </Container>
  );
}
