import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

const slideIn = keyframes`
  from {
    transform: translate3d(-4000px, 0, 0);
  }
  70% {
    transform: translate3d(-300px, 0, 0);
  }
  90% {
    transform: translate3d(-50px, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`
const slideOut = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  10% {
    transform: translate3d(-50px, 0, 0);
  }
  30% {
    transform: translate3d(-300px, 0, 0);
  }
  to {
    transform: translate3d(-4000px, 0, 0);
  }
`

const PortfolioStyle = styled.div`
  --stair-height: 300px;
  display: flex;
  flex-direction: column;
  margin-top: -200px;
  background-color: #804f07;
  background-image: url("https://www.transparenttextures.com/patterns/wood-pattern.png");

  & > .table_top {
    flex: 0 0 100%;
    height: 300px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 99%, rgba(255, 255, 255, 0.3) 99%);
  }
  & > .table_layer {
    padding: 40px;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    & > .table_stair {
      position: relative;
      height: 0px;
      border-bottom: solid var(--stair-height) rgba(0, 0, 0, 0.6);
      border-right: solid 15vw rgba(0, 0, 0, 0.4);
      & > div {
        position: absolute;
        top: -12px;
        left: 0;
        right: -15vw;
        height: var(--stair-height);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        box-sizing: border-box;
        padding: 20px;
        & > div {
          position: relative;
          box-shadow: 0px 30px 15px -5px black;
          ${({ animating }) => animating ? css`
            transform: translate3d(-4000px, 0, 0);
            animation: ${slideIn} 2s linear forwards;
            &:nth-of-type(1) {
              animation-delay: 0s;
            }
            &:nth-of-type(2) {
              animation-delay: -0.2s;
            }
            &:nth-of-type(3) {
              animation-delay: -0.4s;
            }
            &:nth-of-type(4) {
              animation-delay: -0.6s;
            }
          ` : css`
            transform: translate3d(0, 0, 0);
            animation: ${slideOut} 1s linear forwards;
            &:nth-of-type(4) {
              animation-delay: 0.6s;
            }
            &:nth-of-type(3) {
              animation-delay: 0.4s;
            }
            &:nth-of-type(2) {
              animation-delay: 0.2s;
            }
            &:nth-of-type(1) {
              animation-delay: 0s;
            }
          `}
          &:after {
            content: "";
            z-index: 0;
            box-shadow: 0px 4px 13px 7px rgba(0, 0, 0, 0.5);
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            right: 0;
          }
          flex: 0.2 1 auto;
          background-color: white;
        }
      }
    }
  }
  & > .table_end {
    margin-top: -1px;
    flex: 1 1 auto;
    height: 150px;
    background-image: ${({ theme }) => `url("data:image/svg+xml;utf8, <svg width='64' height='16' xmlns='http://www.w3.org/2000/svg'><path d='M0 0 C52 0 32 16 64 16 L64 16 L58 16 L0 16 Z' fill='${theme.backgroundColor}' /></svg>")`};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: top;
  }
`

export default PortfolioStyle
