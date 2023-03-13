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
  console.log(`connected with id: ${socket.id}`);
});

const InputMessage = (props) => {
  const [message, setMessage] = useState("Default value");

  const ref = useRef(null);

  //sends the message to the server
  const handleClick = () => {
    socket.emit("custom-event", {
      message: message,
      name: "Admin",
      // this is a placehoder for additional info
      //locationId: "my location id",
    });
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
