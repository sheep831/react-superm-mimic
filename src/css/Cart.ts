import styled from "styled-components";

export const Container = styled.div`
  background: var(--bkg-color);
  margin: 0 auto;
  max-width: 900px;
  padding: 0 20px;

  img {
    border-radius: 30px;
  }

  h1 {
    font-size: 36px;
    margin: 0.67em 0;
    font-weight: 600;
  }

  table {
    text-align: center;
    border-collapse: collapse;
    width: 100%;

    .cart {
      background-color: #970e3d;
      color: #fff;
    }

    th {
      padding: 15px;
    }

    p {
      text-transform: capitalize;
    }

    td:first-child {
        align-items: center;
        display: flex;
        gap: 15px;
        padding-left: 20px;
    }

    tbody tr:nth-child(odd) {
      background-color: #f2ecee;
    }

    tbody tr:nth-child(2n) {
      background-color: #fff;
    }

    tbody {
      border: 1px solid #fff;
      font-size: 18px;
    }

    thead {
      background-color: #970e3d;
      border: 1px solid #fff;
      border-top: 0;
      color: #fff;

      th:first-child {
        text-align: left;
      }
    }
  }

  form {
    padding-top: 30px;
  }

  .label {
    display: block;
    font-weight: 500;
  }

  span {
    color: #19a596;
    font-weight: 700;
    padding: 0 1px;
    text-decoration: none;
  }

  .input {
    background-color: #fff;
    border: none;
    border-left: 7px solid #d9cfd3;
    font-size: 16px;
    margin-bottom: 1.5em;
    margin-top: 1em;
    min-width: 200px;
    padding: 0.75em 0.5em;
    transition: border-left-color 0.16s;

    &:focus {
      border-left: 7px solid #2b8379;
      outline: none;
    }
  }
`;
