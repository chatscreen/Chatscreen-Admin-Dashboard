import styled from "styled-components";

import { Link } from "react-router-dom";

//logo

export const Nav = styled.nav`
  background: #fff;
  height: 100vh;
  width: 285px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  border-right: 2.5px solid #d8d8d8;
  box-shadow: 2.5px 2.5px 2.5px #d8d8d8;
`;

export const Logo = styled.img`
  width: 285px;
  margin: auto;
`;

export const NavItems = styled.ul`
  text-decoration: none;
  position: absolute;
  top: 43%;
  width: 283px;
  list-style-type: none;
`;

export const NavItem = styled.li`
  height: 100%;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f5f6f7;
  }
`;

export const NavTitle = styled.h1`
  padding-left: 10px;
  font-family: Roboto, Arial, sans-serif;
  color: #20242c;
  font-size: 23px;
  font-weight: 500;
`;

export const IconContainer = styled.div`
  font-size: 28px;
  color: #20242c;
  width: 40px;
  text-align: center;
`;
