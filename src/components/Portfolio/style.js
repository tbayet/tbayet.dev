import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

const appear = keyframes`
  0% { opacity: 0}
  100% { opacity: 1}
`

export const Modal = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: none;
  ${({ open }) => open && css`
    display: block;
    animation: ${appear} 0.5s forwards;
  `}
  & > div {
    z-index: 100;
    padding: 5vw;
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
`

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

  & > .table_top {
    flex: 0 0 100%;
    height: 300px;
    background:  linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 1%, rgba(0,0,0,0.0) 100%);
  }
  & > .table_layer {
    background-color: #8c8c8c;
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
          /* background-color: white; */
        }
      }
    }
  }
  & > .table_end {
    background-color: #8c8c8c;
    margin-top: -1px;
    flex: 1 1 auto;
    height: 150px;
    background-image: ${({ transitionBackground }) => `url(${transitionBackground})`};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: top;
    transform: rotateX(180deg);
  }
`

export default PortfolioStyle
