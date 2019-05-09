import styled from '@emotion/styled'
import { css } from '@emotion/core'
// import leftBrace from '../../../images/leftBrace.svg'
// import rightBrace from '../../../images/rightBrace.svg'

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
