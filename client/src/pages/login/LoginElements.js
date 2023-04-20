import styled from "styled-components";

export const LoginContainer = styled.div`
  background: #ffffff;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
`;

export const StyledForm = styled.form`
  background-color: #ffffff
  border-radius: 5px;
  width: 279px;
  margin: auto;
  position: relative;
  top: 17%;
`;

export const Logo = styled.h1`
  font-family: roboto;
  font-size: 40px;
  width: 279px;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 55px;
  text-align: center;
`;

export const LoginTitle = styled.p`
  color: #a9b0be;
  text-align: center;
  padding-bottom: 45px;
  font-family: roboto;
  font-style: bold;
  line-height: 18px;
`;

export const StyledLabel = styled.label`
  font-family: roboto;
  font-weight: thin;
  display: block;
  padding: 10px;
  color: ${(props) => (props.invalid ? "red" : "#a9b0be")};
`;

export const StyledInput = styled.input`
  font-family: roboto;
  width: 100%;
  padding: 10px;
  border: none;
`;

export const StyledButton = styled.button`
  box-shadow: none !important;
  font-family: roboto;
  font-style: bold;
  line-height: 18px;
  background-color: #5f6fee;
  height: 48px;
  font-size: 18px;
  border-radius: 24px;
  border-color: #5f6fee;
  color: white;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
`;
export const Alerts = styled.div`
  justify-content: center;
  width: 100%;
  text-align: center;
`;

export const StyledAlert = styled.div`
  margin-top: 10px;
  font-family: roboto;
  font-size: 12px;
  padding: 10px;
  color: red;
`;

export const Input = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #a9b0be;
`;

export const InputImage = styled.div`
  color: #000
  height: 100%;
  width: auto;
  margin-left: 5px;
  margin-right: 20px;
  padding-bottom: 10px;
  padding: 10px;
`;
