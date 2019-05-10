import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const HistoryDesc = styled.div`
  flex: 1 1 auto;
  margin-left: calc(5px + 4%);
  margin-right: calc(5px + 4%);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
  & > span {
    text-align: right;
    flex: 1 1 auto;
    font-style: italic;
    font-size: calc(0.5rem + 1vw);
    font-family: ${({ theme }) => theme.fontTitle.secondary};
  }
  & > h3 {
    font-family: ${({ theme }) => theme.fontTitle.primary};
    flex: 1 1 auto;
    font-size: calc(1rem + 1.5vw);
    margin: auto;
  }
  & > div {
    font-family: ${({ theme }) => theme.fontContent.primary};
    flex: 1 1 100%;
    font-size: calc(0.8rem + 0.5vw);
  }
`

const HistoryStyle = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  height: 400px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: calc(100px + 2%);
  margin-bottom: calc(140px + 2%);
`

export default HistoryStyle
