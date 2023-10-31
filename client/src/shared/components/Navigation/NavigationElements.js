import styled from "styled-components"
import { Link } from "react-router-dom"

export const Nav = styled.nav`
  background: #fff;
  height: 100vh;
  min-width: 17%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  border-right: 2.5px solid #d8d8d8;
  box-shadow: 2.5px 2.5px 2.5px #d8d8d8;
  display: grid;
  grid-template-rows: auto 1fr; /* Logo at the top, links fill the remaining space */
`

export const Logo = styled.img`
  width: 285px;
  margin: auto;
`

export const NavItems = styled.ul`
  list-style-type: none;
  display: grid;
  grid-auto-rows: min-content;
  gap: 1px;
`

export const NavItem = styled.li`
  height: 100%;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 1.2rem 1.5rem;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f5f6f7;
  }

  &.active {
    background-color: #f5f6f7;
  }
`

export const NavTitle = styled.h1`
  padding-left: 10px;
  font-family: Roboto, Arial, sans-serif;
  color: #20242c;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
`

export const IconContainer = styled.div`
  font-size: 28px;
  color: #20242c;
  width: 40px;
  text-align: center;
`
