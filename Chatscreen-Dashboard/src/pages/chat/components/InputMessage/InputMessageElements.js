import styled from 'styled-components'

export const InputContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: #f1f1f1;
  bottom: 0;
  border: 1px solid #cbcbcb;
  padding: 5px;
  display: flex;
  align-items: center;
`

export const Input = styled.div`
  height: 100%;
  width: 90%;
  padding: 5px;
  background-color: #cbcbcb;
  display: flex;
  align-items: center;
  border-radius: 5px;
  // justify-content: center;
`

export const InputText = styled.input`
  height: 100%;
  width: 99%;
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  outline-width: none;
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
