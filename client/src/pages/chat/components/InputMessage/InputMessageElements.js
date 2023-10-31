import styled from "styled-components"

export const InputContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 5rem;
  background-color: #f1f1f1;
  bottom: 0;
  border: 2px solid #dedede;
  padding: 0.4rem;
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  justify-items: end;
  margin-bottom: 0.07rem;
`
export const Emojis = styled.div`
  /* Center the emoji horizontally and vertically */
  display: flex;
  align-items: center;
  justify-content: center;
  /* This padding will need to be changed when the emoji face is updated */
  padding: 0.3rem;
  padding-left: 0.8rem;
  padding-right: 1rem;
`

export const Input = styled.div`
  height: 97%;
  width: 100%;
  padding: 6px;
  background-color: #ffffff;
  border: 1px solid #c3c3c3;
  display: flex;
  border-radius: 0.4rem;
`

export const InputText = styled.input`
  height: 3.4rem;
  width: 99%;
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  outline-width: none;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.2);
  padding-left: 1rem;
  padding-right: 5rem;
  font-size: 1.6rem;
  color: #b9beca;
  :focus {
    outline-width: 0;
  }
`

export const InputImage = styled.div`
  color: #9b9b9b;
  height: 100%;
  width: auto;
  margin-left: 5px;
  padding: 0.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  // margin-right: 1.5px;
`

export const SendButton = styled.h1`
  margin: auto;
  // color: #cbcbcb;
  color: #4a4a4a;
  font-weight: 300;
  cursor: pointer;
`
