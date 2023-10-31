import styled from "styled-components"

export const MessageContainer = styled.div`
  padding-left: 7rem;
  background: #f5f6f7;
  height: 77vh;
  overflow-y: auto;
  --scrollbar-width: 8px;
  --mask-height: 70px;
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
  right: -500px;
`
export const UserImage = styled.img`
  height: 58px;
  width: 58px;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 0px 4px 0.3rem #ababab;
`

export const SpeechBubble = styled.div`
  width: 50%;
  margin: 0 25px 25px 25px;
  background: #fff;
  padding: 0px 15px 15px 15px;
  color: #20242c;
  position: relative;
  border-radius: 5px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 3px 0.4rem #ababab;
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
  box-shadow: 0px 3px .4rem #ABABAB;
  font-size: 1rem;
  font-weight: light;
  }
`
export const SpeechBubbleTriangle = styled.div`
  height: 16px;
  background: #ffff;
  transform: skewX(40deg);
  position: relative;
  left: -22px;
  z-index: 3;
`

export const AdminSpeechBubbleTriangle = styled.div`
  height: 16px;
  background: #5f6fee;
  transform: skewX(-40deg);
  position: relative;
  left: 22px;
  z-index: 3;
`

export const NameText = styled.h3`
  font-size: 1rem;
  padding-bottom: 0.5rem;
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
  padding-bottom: 0.5rem;
  margin: 0px;
  color: #fff;
  font-weight: bold;
  font-layout: right;
`

export const CountEllipsis = styled.h1`
  letter-spacing: 4px;
  font-weight: bold;
  color: #4a4a4a;
  margin-top: 3rem;
  padding: 0px;
`
export const LikeCount = styled.div`
  margin-top: 0.5rem;
`
