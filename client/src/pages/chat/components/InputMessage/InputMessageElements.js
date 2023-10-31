import styled from "styled-components"

export const InputContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 4.5rem;
  background-color: #f1f1f1;
  bottom: 0;
  border: 1px solid #dedede;
  padding: 0.2rem;
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  justify-items: end;
`
export const Emojis = styled.div`
  /* This padding will need to changed when the emoji face is updated*/
  padding: 1rem;
`
export const Input = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px;
  background-color: #ffffff;
  border: 1px solid #dedede;
  display: flex;
  border-radius: 0.4rem;
`

export const InputText = styled.input`
  height: 100%;
  width: 99%;
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  outline-width: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding-left: 5px;
  color: #4a4a4a;
  :focus {
    outline-width: 0;
  }
`

export const InputImage = styled.div`
  color: #fff;
  height: 100%;
  width: auto;
  margin-left: 5px;
  // margin-right: 1.5px;
`

export const SendButton = styled.h1`
  margin: auto;
  // color: #cbcbcb;
  color: #4a4a4a;
  font-weight: 300;
  cursor: pointer;
`
