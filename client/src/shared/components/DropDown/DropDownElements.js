import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DropDownContainer = styled.nav`
  height: 55px;
  padding: 0 10px;
  display: flex;
  justify-content: right;
  float: right;
`

export const DropDownHeader = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  cursor: pointer;
  z-index: 1;
`

export const UserName = styled('p')`
  font-family: Roboto, Arial, sans-serif;
  font-size: 18px;
  color: #4a4a4a;
  vertical-align: middle;
  line-height: 55px;
`

export const IconContainer = styled.div`
  font-size: 20px;
  color: #4a4a4a;
  width: 40px;
  text-align: center;
`

export const ProfieImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 15px;
`

export const DropDownList = styled.ul`
  flex-direction: column;
  // float: right;
  padding: 0px 20px;
  margin: 55px 0px;
  width: 250px;
  height: 95px;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 2.5px 2.5px 2.5px #d8d8d8;
  font-size: 1rem;
  position: absolute;
  // left: 0;
  right: 10px;
  z-index: 3;
`

export const ListItem = styled.li`
  font-family: Roboto, Arial, sans-serif;
  list-style: none;
  line-height: 30px;
  border-bottom: 1px solid #e5e5e5;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #484848;
  &:hover {
    color: #d8d8d8;
  }
`
