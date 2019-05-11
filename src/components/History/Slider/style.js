import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

const imageAnimation = keyframes`
  0% {
    width: 100%;
  }
  20% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
`

export const StyledBrace = styled.span`
  & > svg {
    fill: ${({ theme }) => theme.primaryColor};
    height: ${({ height }) => height + 'px'};
    &:hover {
      cursor: pointer;
      height: ${({ height }) => height * 1.2 + 'px'};
      fill-opacity: 0.8;
    }
    &:active {
      stroke: white;
      fill-opacity: 1.2;
    }
    transition: height 0.5s, fill-opacity 0.5s;
  }
`
export const AnimateStyle = styled.div`
  z-index: 1;
  content: '';
  position: absolute !important;
  ${({ dir }) => dir === 1 ? css`
    left: 0;
  ` : css`
    right: 0;
  `}
  bottom:0;
  top:0;
  background-color: ${({ theme }) => theme.backgroundColor};
  ${({ animate }) => animate && css`
    animation: ${imageAnimation} 0.5s ease-in;
  `}
`

export const SlideStyle = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  border: solid 1px transparent;
  align-items: center;
  align-content: center;
  justify-content: center;
  ${({ index, current }) => css`
    transform: translate(${(index - current) * 100}%, 0);
    transition: transform 0.5s;
    z-index: ${index === current ? 2 : 0};
  `}
  & > * {
    position: relative;
  }
`

export const ContainerStyle = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`

const SliderStyle = styled.div`
  flex: 0.8 1 auto;
  height: 100%;
  &:last-of-type ${SlideStyle} {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: ${({ theme }) => theme.sm}) {
    &:last-of-type ${SlideStyle} {
      display: none;
    }
  }
  &:first-of-type {
    flex: 0.2 1 auto;
    min-width: 150px;
    height: 50%;
  }
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`

export default SliderStyle
