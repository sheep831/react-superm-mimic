import styled from "styled-components";

export const Container = styled.div`
  background: var(--bkg-color);
  margin: 0 auto;
  max-width: 900px;
  padding-top: 40px;
  & img {
    border-radius: 30px;
  }
`;

export const ProductButton = styled.div`
    background: var(--theme-color);
    color: white;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    padding: 13px 40px;
    &:hover {
        background: var(--theme-color-light);
    }
    `;

    export const Layout = styled.div`
    grid-gap: 20px;
    display: block;
    grid-template-columns: 1fr auto;
    padding-top: 40px;
    place-items: center;
    `