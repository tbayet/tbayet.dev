import styled from '@emotion/styled'
import { css } from '@emotion/core'

const TechnologiesStyle = styled.div`
  margin-top: 10vw;
  flex: 1 1 auto;
  color: ${({ theme }) => theme.onBackground};
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  justify-content: center;
  & #cards_container {
    overflow: hidden;
    z-index: 1;
    position: relative;
    padding: 5%;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    background: url(${({ background }) => background});
    background-size: cover;
    background-attachment: fixed;
    transition: flex 0.2s linear;
    ${({ hiddenMusic }) => hiddenMusic && css`
      flex: 0 0 0;
      padding: 0;
    `}
  }

  & .card {
    background-color: transparent;
    position: relative;
    height: 40%;
    width: 15%;
    perspective: 1000px;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.02, 1.02) rotate(10deg);
      cursor: pointer;
    }
  }

  & #mac_container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 90%;
  }
  & #mac_screen {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    min-height: 600px;
    border-style: solid;
    border-color: #1a1a1a;
    border-width: 50px 40px 50px 40px;
    border-radius: 30px 30px 0px 0px;
    &:before {
      content: "";
      z-index: 1;
      position: absolute;
      top: -50px;
      left: 0;
      right: 0;
      height: 50px;
      background: radial-gradient(#8c8c8c 0px, #8c8c8c 1px, #404040 3px, #404040 8px, transparent 10px);
      background-position: center center;
      background-size: 50px 50px;
      background-repeat: no-repeat;
    }
  }
  & #mac_foot {
    z-index: 0;
    margin-left: 36%;
    margin-right: 36%;
    margin-bottom: 10px;
    height: 0px;
    border-top: 5px solid #404040;
    border-bottom: 80px solid #8c8c8c;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-radius: 0px 0px 10px 10px;

  }
  & #mac_bottom {
    display: flex;
    position: relative;
    background-color: #bfbfbf;
    height: 110px;
    border-radius: 0px 0px 30px 30px;
    justify-content: center;
    align-items: center;
    & > button {
      display: inline-block;
      text-decoration: none;
      outline: none;
      border: none;
      box-shadow: 0 2px #202020;
      height: 55px;
      width: 55px;
      background: radial-gradient(#404040 12px, #8c8c8c 14px, #8c8c8c 19px, #404040 21px, #404040 30px, transparent 32px);
      background-position: center center;
      background-size: 80px 80px;
      background-repeat: no-repeat;
      border-radius: 50%;
      &:hover {
        cursor: pointer;
        background: radial-gradient(#505050 12px, #acacac 14px, #acacac 19px, #505050 21px, #505050 30px, transparent 32px);
      }
      &:active {
        box-shadow: inset 0px 2px #202020;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.lg}) {
    & #mac_screen {
      min-height: 800px;
    }
    & #mac_container {
      max-width: 1800px;
    }
  }
  /* tablet */
  @media screen and (max-width: ${({ theme }) => theme.md}) {
    & .card {
      height: 30%;
      width: 20%;
    }
    & #mac_screen {
      min-height: 500px;
      border-width: 60px 30px 0px 30px;
      border-radius: 30px 30px 0px 0px;
    }
    & #mac_bottom {
      background-color: black;
      height: 100px;
      border-radius: 0px 0px 30px 30px;
      &:before {
        background: radial-gradient(grey 0px, grey 12px, white 14px, white 19px, grey 21px, grey 30px, transparent 32px);
      }
    }
    & #mac_foot {
      display: none;
    }
  }
  /* smartphone */
  @media screen and (max-width: ${({ theme }) => theme.sm}) {
    & #cards_container {
      flex-direction: column;
      justify-content: flex-start;
      align-content: space-around;
    }
    & .card {
      margin: 1%;
      height: 22%;
      width: 30%;
    }
    & #mac_screen {
      min-height: 500px;
      border-width: 60px 10px 0px 10px;
      border-radius: 30px 30px 0px 0px;
    }
    & #mac_bottom {
      background-color: black;
      height: 80px;
      border-radius: 0px 0px 30px 30px;
      &:before {
        background: radial-gradient(grey 0px, grey 12px, white 14px, white 19px, grey 21px, grey 30px, transparent 32px);
      }
    }
    & #mac_foot {
      display: none;
    }
  }
`

export default TechnologiesStyle
