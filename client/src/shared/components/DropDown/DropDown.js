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

//const toggleDropDown = () => showInfo1(!setShowInfo1);

export function InfoBox(props) {
  const ref = useRef(null);
  const { onClickOutside } = props;

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

  return (
    <div ref={ref} className="info-box">
      {/*{props.message}*/}
      <DropDownList>
        <ListItem>
          <NavLink to="/profile" onClick={props.onClickOutside}>
            Edit profile
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/about" onClick={props.onClickOutside}>
            Terms of use & Privacy
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/login" onClick={props.onClickOutside}>
            Log Out
          </NavLink>
        </ListItem>
      </DropDownList>
    </div>
  );
}

function Chat() {
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
