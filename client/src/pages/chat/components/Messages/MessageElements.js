import styled from "styled-components"

export const MessageContainer = styled.div`
  background: #f5f6f7;
  height: 80vh;
  overflow-y: auto;
  --scrollbar-width: 8px;
  --mask-height: 32px;
  padding-bottom: var(--mask-height);
  --mask-image-content: linear-gradient(
    to bottom,
    transparent,
    black var(--mask-height),
    black calc(100% - var(--mask-height)),
    transparent
  );
  --mask-size-content: calc(100% - var(--scrollbar-width)) 100%;
  --mask-image-scrollbar: linear-gradient(black, black);
  --mask-size-scrollbar: var(--scrollbar-width) 100%;
  mask-image: var(--mask-image-content), var(--mask-image-scrollbar);
  mask-size: var(--mask-size-content), var(--mask-size-scrollbar);
  mask-position:
    0 0,
    100% 0;
  mask-repeat: no-repeat, no-repeat;
`
export const Message = styled.div`
  color: blue;
  padding-top: 8px;
  display: flex;
`

export const AdminMessage = styled.div`
  color: blue;
  padding-top: 8px;
  display: flex;
  position: relative;
  right: -470px;
`
export const UserImage = styled.img`
  height: 58px;
  width: 58px;
  border-radius: 50%;
  margin-left: 30px;
  box-sizing: border-box;
  box-shadow: 2.5px 2.5px 2.5px #d8d8d8;
`

export const SpeechBubble = styled.div`
  width: 50%;
  margin: 0 25px 25px 25px;
  background: #fff;
  padding: 0px 15px 15px 15px;
  color: #20242c;
  position: relative;
  border-radius: 5px;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 2.5px 2.5px 2.5px #d8d8d8;
  font-size: 1rem;
  font-weight: light;
`

export const AdminSpeechBubble = styled.div`
  width: 50%;
  margin: 0 25px 25px 25px;
  background: #5f6fee;
  padding: 0px 15px 15px 15px;
  color: #fff;
  position: relative;
  border-radius: 5px;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: 2.5px 2.5px 2.5px #d8d8d8;
  font-size: 1rem;
  }
`
export const SpeechBubbleTriangle = styled.div`
  height: 16px;
  background: #fff;
  transform: skewX(40deg);
  position: relative;
  right: 25px;
  margin-top: -2px;
  z-index: 3;
  border-top: 2px solid #e5e5e5;
  border-left: 2px solid #e5e5e5;
  font-size: 1rem;
  font-weight: light;
`

export const AdminSpeechBubbleTriangle = styled.div`
  height: 16px;
  background: #5f6fee;
  transform: skewX(-40deg);
  position: relative;
  left: 25px;
  margin-top: -2px;
  z-index: 3;
  border-top: 2px solid #e5e5e5;
  border-right: 2px solid #e5e5e5;
`

export const NameText = styled.h3`
  font-size: 1rem;
  padding: 0px;
  margin: 0px;
  color: #5f6fee;
  font-weight: bold;
`
export const MessageText = styled.p`
  font-family: sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #4a4a4a;
`

export const AdminMessageText = styled.p`
  font-family: sans-serif;
  font-weight: 400;
  font-style: normal;
`

export const AdminNameText = styled.h3`
  font-size: 1rem;
  padding: 0px;
  margin: 0px;
  color: #fff;
  font-weight: bold;
  font-layout: right;
`

export const CountEllipsis = styled.h1`
  letter-spacing: 4px;
  font-weight: bold;
  color: #4a4a4a;
  margin-top: 12px;
  padding: 0px;
`
