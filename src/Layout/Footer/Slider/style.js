import styled from '@emotion/styled'
import { css } from '@emotion/core'
import leftBrace from '../../../images/leftBrace.svg'
import rightBrace from '../../../images/rightBrace.svg'

export const SlideStyle = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  & > * {
    width: 100%;
    height: 100%;
  }
  ${({ index, current }) => css`
    transform: translate(${(index - current) * 100}%, 0);
    transition: transform 0.5s;
  `}
`

export const ContainerStyle = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  & > span {
    width: 40px;
    height: 100%;
    &:first-of-type {
      background: url(${leftBrace});
      background-size: 120% 60%;
      background-position: center;
      background-repeat: no-repeat;
      &:hover {
        cursor: pointer;
        background-size: 120% 80%;
      }
    }
    &:last-of-type {
      background: url(${rightBrace});
      background-size: 240% 60%;
      background-position: right;
      background-repeat: no-repeat;
      &:hover {
        cursor: pointer;
        background-size: 240% 80%;
      }
    }
    transition: background-size 0.5s;
  }
`

const SliderStyle = styled.div`
  flex: 0.8 1 auto;
  height: 100%;
  &:first-of-type {
    flex: 0.2 1 auto;
    height: 50%;
  }
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`

export default SliderStyle
