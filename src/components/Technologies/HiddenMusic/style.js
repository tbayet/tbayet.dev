import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const HitzakStyle = styled.div`
  text-align: center;
  min-width: 250px;
  flex: 1;
  padding-left: 3vw;
  padding-right: 3vw;
  & iframe {
    width: 80%;
    height: 28vw;
  }
`
export const MAOStyle = styled.div`
  margin-top: 20px;
  border-top: solid 1px #555;
  align-self: center;
  flex: 0.5;
  min-width: 250px;
  & figure {
    margin: 0;
    & > audio {
      margin-top: 10px;
      display: block;
      width: 100%;
      border: solid 1px #555;
      background-color: #EEE;
    }
  }
  & ul {
    border: solid 1px #555;
    padding: 0;
  }
  & li {
    padding: 5px;
    text-align: center;
    list-style: none;
    cursor: pointer;
    background-color: #EEE;
    &:not(:first-of-type) {
      border-top: solid 1px #555;
    }
    &:hover {
      background-color: #CCC;
    }
    &:active {
      background-color: #AAA;
    }
  }
`

const HiddenMusicStyle = styled.div`
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #DDD;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1vw;
  padding-left: 5vw;
  padding-right: 5vw;
`

export default HiddenMusicStyle
