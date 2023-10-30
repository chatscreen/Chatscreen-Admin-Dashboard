import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//fontawesome icons
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

//dummy location profile image
import LocationImage from "../../../images/BarProfile.png";

import {
  DropDownContainer,
  DropDownHeader,
  UserName,
  IconContainer,
  ProfieImage,
  DropDownList,
  ListItem,
  NavLink,
} from "./DropDownElements";

export function InfoBox(props) {
  const ref = useRef(null);
  const { onClickOutside, setAuth } = props;

  // this code needs to be updated, it makes the dropdown toggle open and close, its a bit hard to work with and messy
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!props.show) return null;

  // when the user logs out the localStorage is wiped
  const setAuthFalse = () => {
    setAuth(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  return (
    <div ref={ref} className="info-box">
      <DropDownList>
        <ListItem>
          <NavLink to="/profile" onClick={onClickOutside}>
            Edit profile
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/about" onClick={onClickOutside}>
            Terms of use & Privacy
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            onClick={() => {
              setAuthFalse();
            }}
          >
            Log Out
          </NavLink>
        </ListItem>
      </DropDownList>
    </div>
  );
}

function Chat({ setAuth }) {
  let [showInfo1, setShowInfo1] = useState(false);
  const toggle = () => {
    setShowInfo1(!showInfo1);
  };
  return (
    <div className="container">
      <div className="info-box-wrapper">
        <DropDownContainer>
          <DropDownHeader onClick={toggle}>
            {/* <ProfieImage src={LocationImage} /> */}
            <UserName>Settings</UserName>
            <IconContainer>
              {showInfo1 ? (
                <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              )}
            </IconContainer>
          </DropDownHeader>
        </DropDownContainer>
        <InfoBox
          setAuth={setAuth}
          show={showInfo1}
          onClickOutside={() => {
            setShowInfo1(false);
          }}
        />
      </div>
    </div>
  );
}
export default Chat;
