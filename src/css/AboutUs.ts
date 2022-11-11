import styled from "styled-components";

export const AboutUS = styled.div`
  background: var(--bkg-color);
  margin: 0 auto;
  padding-top: 0 20px;
  max-width: 900px;
  & img {
    border-radius: 30px;
    aspect-ratio: auto 350 / 240;
  }
`;

export const HomeLayout = styled.div`
grid-gap: 20px;
display: block;
grid-template-columns: 1fr auto;
padding-top: 40px;
place-items: center;
`