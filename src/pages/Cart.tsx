import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../css/Cart";
import { ProductButton } from "../css/HomeStyle";
import { ProductState } from "../redux/reducer";
import { RootState } from "../store";

export default function Cart() {
  const empty = false;

  const productsArray = useSelector((state: RootState) => state.product);

  const totalPrice = productsArray
    .map((product) => product.price * product.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <Container>
      <div>
        <h1>Your Cart</h1>
        {empty ? (
          <p>You have not added any product to your cart yet.</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th style={{ width: "25%" }}>Product</th>
                  <th style={{ width: "20%" }}>Unit Price</th>
                  <th style={{ width: "10%" }}>Quantity</th>
                  <th style={{ width: "25%" }}>Total</th>
                </tr>
              </thead>
              <tbody>
              {productsArray.map((item: ProductState) => (
                <>
                  
                    <tr>
                      <td>
                        <img
                          src={require(`../img/${item.image}`)}
                          width="30"
                          height="30"
                        />
                        <p>{item.name}</p>
                      </td>
                      <td>
                        <strong>${item.price}</strong>
                      </td>
                      <td>{item.quantity}</td>
                      <td>${item.quantity * item.price}</td>
                    </tr>
                </>
              ))}
  </tbody>
              <tfoot>
                <tr>
                  <th colSpan={2}></th>
                  <th className="cart">Total</th>
                  <th className="cart">${totalPrice}</th>
                </tr>
              </tfoot>
            </table>
            <form>
              <p>
                Enter your email and then click on pay and your products will be
                delivered to you on the same day!
                <br />
                <em>
                  Enter your own Stripe Publishable Key in Cart.js for the
                  checkout to work
                </em>
              </p>
              <label className="label">
                Email<span>*</span>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input"
                    required
                  />
                </div>
              </label>
              <ProductButton>Pay</ProductButton>
            </form>
          </>
        )}
      </div>
    </Container>
  );
}
