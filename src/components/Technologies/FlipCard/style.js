import styled from '@emotion/styled'
import { css } from '@emotion/core'

const FlipCardStyle = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  ${({ flip }) => flip && css`
    transform: rotateY(180deg);
  `}
  .card_front, .card_back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .card_front {
    overflow: hidden;
    z-index: 2;
    display: flex;
    flex: 1 1 auto;
    background-color: ${({ theme }) => theme.primaryColorHover};
    color: ${({ theme }) => theme.onPrimary};
    & > .card_title {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px;
      background-color: ${({ theme }) => theme.primaryColor};
    }
    & > .card_icon {
      flex: auto;
      margin-left: 20%;
      margin-right: 20%;
      margin-top: -20%;
      background-color: white;
      mask: url(${({ icon }) => icon}) no-repeat center;
      mask-size: 100% 100%;
    }
  }
  .card_back {
    overflow: hidden;
    background-color: ${({ theme }) => theme.primaryColorHover};
    color: ${({ theme }) => theme.onPrimary};
    transform: rotateY(180deg);
    z-index: 1;

    & > .card_title {
      display: flex;
      align-items: center;
      padding: 3px;
      height: 30px;
      & > .card_icon {
        flex: 0 0 30px;
        height: 30px;
        background-color: white;
        mask: url(${({ icon }) => icon}) no-repeat center;
        mask-size: contain;
      }
      & > h4 {
        font-family: ${({ theme }) => theme.fontTitle.primary};
        flex: 0.8 1 auto;
        text-align: center;
      }
    }
    & > .card_content {
      font-family: ${({ theme }) => theme.fontContent.tertiary};
      color: ${({ theme }) => theme.primaryColor};
      position: absolute;
      background-color: #919ca7;
      bottom: 0;
      left: 0;
      right: 0;
      top: 36px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: space-around;
      justify-content: center;
      & > span {
        font-size: 1vw;
        flex: 1 0 100%;
        & > div {
          margin-top: 10px;
        }
        & > span > svg {
          height: 1.2vw;
          width: 1.2vw; 
          vertical-align: -0.2vw;
          margin-right: 0.5vw;
          & path {
            fill: ${({ theme }) => theme.primaryColor};
          }
        }
      }
      & > span:nth-of-type(1) {
        display: none;
      }
    }
  }

  /* Extra large */
  @media screen and (min-width: ${({ theme }) => theme.lg}) {
    .card_front > .card_icon {
      margin-top: -10%;
      margin-left: 30%;
      margin-right: 30%;
    }
  }
  /* Tablet */
  @media screen and (max-width: ${({ theme }) => theme.md}) {
    .card_front > .card_icon {
      margin-left: 30%;
      margin-right: 30%;
      margin-top: -20%;
    }
    .card_back > .card_content > span > span > span {
      display: none;
    }
    .card_back > .card_content > span {
      display: flex;
      justify-content: space-around;
      align-items: center;
      & > span > svg {
        height: 16px;
        width: 16px;
        margin-left: 4px;
        vertical-align: -2px;
      }
    }
  }
  /* Smartphone */
  @media screen and (max-width: ${({ theme }) => theme.sm}) {
    .card_front {
      & > .card_title {
        display: none;
      }
      & > .card_icon {
        margin: 10%;
      }
    }
    .card_back > .card_content > span:not(:nth-of-type(1)) {
      display: none;
    }
    .card_back > .card_content > span:nth-of-type(1) {
      display: block;
      margin-top: 15%;
    }
  }
`

export default FlipCardStyle
