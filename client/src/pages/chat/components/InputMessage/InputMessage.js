import { useRef, useState } from "react"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { io } from "socket.io-client"

//fontawesome icons
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons"

import {
  Emojis,
  Input,
  InputContainer,
  InputImage,
  InputText,
  SendButton,
} from "./InputMessageElements"

// socket io is connected on port 5001, its used to update the client when the server is updated
const socket = io("http://localhost:5001")

const InputMessage = () => {
  const [message, setMessage] = useState("Default value")

  const ref = useRef(null)

  //sends the message to the server, using the 'custom-event' emit label, in the chat controller in the server you can see this referenced
  const handleClick = () => {
    const text = message
    const sender = localStorage.userId
    socket.emit("custom-event", text, sender)
  }

  return (
    <InputContainer>
      <Input>
        <Emojis>
          <FontAwesomeIcon icon={faFaceSmile} />
        </Emojis>
        <InputText
          ref={ref}
          defaultValue={"Enter some text.."}
          onChange={(event) => setMessage(event.target.value)}
        />
        <InputImage>
          <FontAwesomeIcon
            style={{ height: "100%" }}
            icon={faImage}></FontAwesomeIcon>
        </InputImage>
      </Input>
      <SendButton onClick={handleClick}>Send</SendButton>
    </InputContainer>
  )
}

export default InputMessage
