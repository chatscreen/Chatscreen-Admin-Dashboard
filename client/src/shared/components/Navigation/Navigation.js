import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation } from "react-router-dom"

// Fontawesome icons
import {
  faBan,
  faQrcode,
  faGear,
  faBullhorn,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons"
import {
  faStar as farStar,
  faComment,
  faCalendar,
  faChartBar,
  faNewspaper,
} from "@fortawesome/free-regular-svg-icons"

// Logo (KFC placeholder)
import KFC_Logo from "../../../images/ChatscreenLogo.png"

// Styled elements
import {
  Nav,
  Logo,
  NavItems,
  NavItem,
  NavLink,
  NavTitle,
  IconContainer,
} from "./NavigationElements.js"

const Navigation = () => {
  const location = useLocation()
  const activeLink = location.pathname

  return (
    <Nav>
      <Logo src={KFC_Logo} alt='logo' />
      <NavItems>
        <NavItem>
          <NavLink to='/' className={activeLink === "/" ? "active" : ""}>
            <IconContainer>
              <FontAwesomeIcon icon={faComment} />
            </IconContainer>
            <NavTitle>CHAT</NavTitle>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to='/contentFilter'
            className={activeLink === "/contentFilter" ? "active" : ""}>
            <IconContainer>
              <FontAwesomeIcon icon={faBan} />
            </IconContainer>
            <NavTitle>CONTENT FILTER</NavTitle>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to='/rewards'
            className={activeLink === "/rewards" ? "active" : ""}>
            <IconContainer>
              <FontAwesomeIcon icon={farStar} />
            </IconContainer>
            <NavTitle>REWARDS</NavTitle>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to='/events'
            className={activeLink === "/events" ? "active" : ""}>
            <IconContainer>
              <FontAwesomeIcon icon={faCalendar} />
            </IconContainer>
            <NavTitle>EVENTS</NavTitle>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to='/polls'
            className={activeLink === "/polls" ? "active" : ""}>
            <IconContainer>
              <FontAwesomeIcon icon={faChartBar} />
            </IconContainer>
            <NavTitle>POLLS</NavTitle>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to='/advertisements'
            className={activeLink === "/advertisements" ? "active" : ""}>
            <IconContainer>
              <FontAwesomeIcon icon={faBullhorn} />
            </IconContainer>
            <NavTitle>ADVERTISEMENTS</NavTitle>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to='/qrCode'
            className={activeLink === "/qrCode" ? "active" : ""}>
            <IconContainer>
              <FontAwesomeIcon icon={faQrcode} />
            </IconContainer>
            <NavTitle>QR CODE</NavTitle>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to='/breaking-news'
            className={activeLink === "/qrCode" ? "active" : ""}>
            <IconContainer>
              <FontAwesomeIcon icon={faNewspaper} />
            </IconContainer>
            <NavTitle>BREAKING NEWS</NavTitle>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to='/settings'
            className={activeLink === "/qrCode" ? "active" : ""}>
            <IconContainer>
              <FontAwesomeIcon icon={faPuzzlePiece} />
            </IconContainer>
            <NavTitle>FEATURES</NavTitle>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to='/settings'
            className={activeLink === "/qrCode" ? "active" : ""}>
            <IconContainer>
              <FontAwesomeIcon icon={faGear} />
            </IconContainer>
            <NavTitle>SETTINGS</NavTitle>
          </NavLink>
        </NavItem>

        <NavItem></NavItem>
      </NavItems>
    </Nav>
  )
}

export default Navigation
