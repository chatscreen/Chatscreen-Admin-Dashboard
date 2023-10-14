import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { io } from "socket.io-client";

//fontawesome icons
import { faImage } from "@fortawesome/free-solid-svg-icons";

import {
  InputContainer,
  Input,
  InputText,
  InputImage,
  SendButton,
} from "./InputMessageElements";

const socket = io("http://localhost:5001");

socket.on("connect", () => {
  console.log(`input is connected with id: ${socket.id}`);
});

const InputMessage = () => {
  const [message, setMessage] = useState("Default value");

  const ref = useRef(null);

  //sends the message to the server
  const handleClick = () => {
    const text = message;
    const sender = localStorage.userId;
    socket.emit("custom-event", text, sender);
  };

  return (
    <InputContainer>
      <Input>
        <InputText
          ref={ref}
          defaultValue={"Enter some text.."}
          onChange={(event) => setMessage(event.target.value)}
        />
        <InputImage>
          <FontAwesomeIcon
            style={{ height: "100%" }}
            icon={faImage}
          ></FontAwesomeIcon>
        </InputImage>
      </Input>
      <SendButton onClick={handleClick}>Send</SendButton>
    </InputContainer>
  );
};

export default InputMessage;
