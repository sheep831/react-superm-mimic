import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Logo = styled(NavLink)`
text-decoration: none;
font-weight: bold;
color: black;
  font-size: 3em;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const LinkDiv = styled(NavLink)`
  text-decoration: none;
  color: var(--theme-color);
  font-weight: 400;
  justify-content: flex-end;

  & .active {
    font-weight: bold;
  }
  &:hover {
    color: var(--theme-color-light);
  }
`;

export const NavBar = styled.nav`
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const BarList = styled.ul`
  overflow: hidden;
  list-style-type: none;
  padding: 0 20px;
  text-align: center;
  display: inline-block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

export const NavItem = styled.li`
  display: inline-block;
  padding: 0 20px;

  &:nth-child(4) {
    background: #970e3d;
    line-height: 70%;
    border: 0;
    border-radius: 3px;
    & > a {
      color: #fff;
      font-weight: bold;
    }
  }

  & > a {
    display: inline-block;
    min-width: 75px;
    padding: 13px 20px;
    text-align: center;
    text-decoration: none;
    .active {
      font-weight: bold;
    }
  }
  &:hover a {
    color: var(--theme-color-light);
  }
`;
