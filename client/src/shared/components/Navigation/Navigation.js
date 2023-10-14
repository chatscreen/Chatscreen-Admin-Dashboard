import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//fontawesome icons
import { faComment, faBan, faQrcode } from "@fortawesome/free-solid-svg-icons";

//logo (kfc placeholder)
import KFC_Logo from "../../../images/ChatscreenLogo.png";

//styled elements
import {
  Nav,
  Logo,
  NavItems,
  NavItem,
  NavLink,
  NavTitle,
  IconContainer,
} from "./NavigationElements";

// just a basic side menu with links to the pages, usually the location logo is stored at the top

const Navigation = () => {
  return (
    <Nav>
      {/* <Logo src={KFC_Logo} alt="logo" /> */}
      <NavItems>
        <NavItem>
          <NavLink to="/">
            <IconContainer>
              <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
            </IconContainer>
            <NavTitle>CHAT</NavTitle>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contentFilter">
            <IconContainer>
              <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>
            </IconContainer>
            <NavTitle>CONTENT FILTER</NavTitle>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/qrCode">
            <IconContainer>
              <FontAwesomeIcon icon={faQrcode}></FontAwesomeIcon>
            </IconContainer>
            <NavTitle>QR CODE</NavTitle>
          </NavLink>
        </NavItem>
      </NavItems>
    </Nav>
  );
};

export default Navigation;
