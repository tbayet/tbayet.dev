import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

const deploy = keyframes`
  0% {
    transform: skewX(80deg);
    border-top-right-radius: 65vw 35vw;
    width: 0%;
  }
  80%: {
    border-top-right-radius: 45vw 35vw;
    transform: skewX(30deg);
  }
  100% {
    transform: skewX(0deg);
    border-top-right-radius: 0 0;
    width: 100%;
  }
`
const undeploy = keyframes`
  0% {
    transform: skewX(0deg);
    border-top-right-radius: 0 0;
    width: 100%;
  }
  20%: {
    transform: skewX(30deg);
    border-top-right-radius: 45vw 35vw;
  }
  100% {
    transform: skewX(80deg);
    border-top-right-radius: 65vw 35vw;
    width: 0%;
  }
`
const open = keyframes`
  0% { margin-left: -500vw }
  100% { margin-left: 0vw }
`
const close = keyframes`
  0% { margin-left: 0vw }
  100% { margin-left: -500vw }
`

export const ButtonsOverlay = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.primaryColor};
  ${({ toggle }) => toggle ? css`
    animation: ${deploy} 1s ease-in-out forwards;
  ` : css`
    width: 100%;
    animation: ${undeploy} 0.5s ease-in-out forwards 0.5s;
  `}
`

export const RoundButton = styled.button`
  &:focus {
    outline:0;
  }
  opacity: 0.5;
  transition: transform 0.5s ease-in-out, opacity 0.5s;
  &:hover {
    transform: rotate(300deg);
    box-shadow: 0px 0px 10px 5px black;
    opacity: 1;
  }
  &:active {
    opacity: 0.2;
    box-shadow: 0px 0px 0px 0px black;
  }
  cursor: pointer;
  z-index: 2;
  flex: 0 0 80px;
  display: block;
  height: 80px;
  width: 80px;
  margin-left: 5vw;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0px 0px 5px 1px black; 
  border: 2px solid black;
`

export const StyledButton = styled.a`
  font-family: ${({ theme }) => theme.fontContent.secondary};
  text-decoration: none;
  display: inline-flex;
  background-color: rgba(255, 255, 255, 0.2);
  color: rgba(0, 0, 0, 0.7);
  height: 50px;
  min-width: 120px;
  margin-left: calc(5px + 3vw);
  margin-right: calc(5px + 3vw);
  justify-content: center;
  align-items: center;
  background-clip: content-box;
  box-sizing: border-box;
  border-top-left-radius: 80px 10px;
  border-top-right-radius: 80px 10px;
  border-bottom-left-radius: 80px 10px;
  border-bottom-right-radius: 80px 10px;
  border-bottom: solid 5px rgba(0, 0, 0, 0.9);
  transition: border 0.3s, border-radius 0.3s, padding-top 0.3s, background-color 0.3s, color 0.3s;
  &:hover {
    border-top-left-radius: 80px 15px;
    border-top-right-radius: 80px 15px;
    padding-top: 4px;
    border-bottom: solid 1px rgba(0, 0, 0, 1);
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
  }
  &:active {
    border-top-left-radius: 80px 15px;
    border-top-right-radius: 80px 15px;
    color: rgba(255, 255, 255, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
    padding-top: 5px;
    box-shadow: inset 0px 2px 4px 1px black;
    border-bottom: solid 0px black;
  }
`

export const FooterTransitionStyle = styled.div`
  margin-top: -1px;
  z-index: 1;
  flex: 1 1 auto;
  height: 200px;
  background-image: ${({ background }) => `url(${background})`};
  background-color: ${({ theme }) => theme.primaryColor};
  background-size: 100% 200px;
  background-repeat: no-repeat;
  background-position: top;
  transform: rotateY(180deg);
`

const FooterStyle = styled.footer`
  position: absolute;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryColor};
  font: ${({ theme }) => theme.fontPrimary.bold};
  right: 0;
  left: 0;
  & > .footer_container {
    position: relative;
    margin-top: -200px;
    height: 200px;
    display: flex;
    align-items: center;
    & > div:last-of-type {
      flex: 1 1 auto;
      height: 100%;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-left: -500vw;
      ${({ toggle }) => toggle ? css`
        animation: ${open} 1s ease-in-out forwards 0.5s;
      ` : css`
        animation: ${close} 0.5s ease-in-out;
      `}
    }
  }
`

export default FooterStyle
