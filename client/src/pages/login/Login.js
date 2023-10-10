import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import {
  LoginContainer,
  Logo,
  LoginTitle,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlert,
  StyledLabel,
  Input,
  InputImage,
  Alerts,
} from "./LoginElements";

const Login = ({ setAuth }) => {
  const [passwordInvalid, setPasswordInvalid] = useState(true);
  const [userInvalid, setUserInvalid] = useState(true);
  const [inputs, setInputs] = useState({
    user: "",
    pwd: "",
  });

  const { user, pwd } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { user, pwd };
      const response = await fetch("http://localhost:5000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      //logging parseRes
      console.log(parseRes);

      localStorage.setItem("token", parseRes.accessToken);
      if (parseRes.roles.includes(5150)) {
        setAuth(true);
      }
      if (!parseRes.roles.includes(5150)) {
        setUserInvalid(false);
      }
      setPasswordInvalid(true);
    } catch (err) {
      console.error(err.message);
      setPasswordInvalid(false);
    }
  };

  return (
    <LoginContainer>
      <StyledForm onSubmit={onSubmitForm}>
        <Logo>Chat Screen</Logo>
        <LoginTitle>Admin Dashboard</LoginTitle>
        <Input>
          <StyledLabel>Username</StyledLabel>
          <StyledInput
            type="text"
            name="user"
            value={user}
            onChange={(e) => onChange(e)}
          />
          <InputImage>
            <FontAwesomeIcon
              style={{ height: "100%" }}
              icon={faUser}
              color={"#a9b0be"}
            ></FontAwesomeIcon>
          </InputImage>
        </Input>
        <Input>
          <StyledLabel invalid={!passwordInvalid}>Password</StyledLabel>
          <StyledInput
            type="password"
            name="pwd"
            value={pwd}
            onChange={(e) => onChange(e)}
          />
          <InputImage>
            <FontAwesomeIcon
              style={{ height: "100%" }}
              icon={faLock}
              color={"#a9b0be"}
            ></FontAwesomeIcon>
          </InputImage>
        </Input>
        <Alerts>
          {!passwordInvalid && <StyledAlert>Password is invalid.</StyledAlert>}
          {!userInvalid && (
            <StyledAlert>User must have Admin Privelages.</StyledAlert>
          )}
        </Alerts>
        <StyledButton type="submit" disabled={!user || !pwd}>
          LOGIN
        </StyledButton>
      </StyledForm>
    </LoginContainer>
  );
};

export default Login;
