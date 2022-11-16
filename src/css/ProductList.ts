import styled from "styled-components";

export const Outside = styled.div`
  grid-gap: 25px;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: 900px;
  padding: 50px 20px;

  .cardContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
    padding-top: 40px;
  }

  .card {
    &:hover .imageContainer {
      transform: scale(1.01) rotate(-2deg);
    }
    background: #fff;
    border-radius: 25px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 15px 20px;
  }

  .imageContainer {
    position: relative;
    & h3,
    p {
      margin: 0;
    }
    & h3 {
      font-size: 24px;
      font-weight: 400;
    }
    & p {
      font-size: 18px;
      line-height: 30px;
    }
    .product-quantity-container {
      background-color: #fff;
      border-radius: 50%;
      padding: 5px;
      position: absolute;
      right: -15px;
      top: 8px;
    }
    .product-quantity {
      background-color: #2b8379;
      border-radius: 50%;
      color: #fff;
      display: grid;
      font-size: 14px;
      height: 23px;
      place-items: center;
      width: 23px;
    }
  }

  .product-checkout {
    display: grid;
    grid-template-rows: 1fr auto;
    justify-items: end;
    align-items: flex-end;
    position: relative;

    .product-delete {
      background-color: #fff;
      border-color: #c43464;
      color: #970e3d;
      font-size: 14px;
      padding: 5px 10px;
      position: absolute;
      top: 0;
      right: 0;
    }

    .btn-out {
      border: 2px solid #c43464;
      border-radius: 10px;
      box-shadow: 1px 1px 7px #c4c4c4;
      font-weight: bold;

      &:hover {
        background-color: #19a596;
        color: #fff;
        text-decoration: none;
      }
    }
  }

  .product-info {
    padding-left: 25px;
  }

  & img {
    border-radius: 20px;
    padding: 10px;
    background: var(--bkg-color);
    &:hover {
      transition: transform 0.18s ease-out, -webkit-transform 0.18s ease-out;
    }
  }
`;

export const AddCartButton = styled.button`
  background-color: #7fd1c7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 2rem;
  text-align: center;
  border: 2px solid #2b8379;
  border-radius: 10px;
  box-shadow: 1px 1px 7px #c4c4c4;
  padding: 8px 25px;
  color: #2b8379;
  font-weight: 600;
  font-size: 14px;
  &:hover {
    background-color: #2b8379;
    color: #fff;
    text-decoration: none;
  }
`;
