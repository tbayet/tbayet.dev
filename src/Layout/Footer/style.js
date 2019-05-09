import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const StyledButton = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  min-width: 120px;
  text-align: center;
  border-top-left-radius: 80px 10px;
  border-top-right-radius: 80px 10px;
  border-bottom-left-radius: 80px 10px;
  border-bottom-right-radius: 80px 10px;
  border-bottom: solid 5px rgba(0, 0, 0, 0.9);
  transition: border-bottom 0.3s, margin-top 0.3s, background-color 0.3s, color 0.3s;
  &:hover {
    margin-top: calc(20px + 4px);
    border-bottom: solid 1px rgba(0, 0, 0, 1);
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
  }
  &:active {
    color: rgba(255, 255, 255, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
    margin-top: calc(20px + 5px);
    box-shadow: inset 0px 2px 0px 0px black;
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
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    & > div {
      margin-top: -180px;
      height: 130px;
      flex: 0 1;
      z-index: 1;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-end;
    }
  }
`

export default FooterStyle
