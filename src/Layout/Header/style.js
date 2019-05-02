import styled from '@emotion/styled'
import { css } from '@emotion/core'

const HeaderStyle = styled.header`
  position: fixed;
  z-index: 10;
  left: 0;
  top:0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.headerSize};
  font: ${({ theme }) => theme.fontPrimary.bold};
  padding-left: 4vw;
  padding-right: 4vw;
  box-shadow: ${({ fixed, theme }) => (fixed ? `0px 13px 10px -10px ` : `0px 0px -10px -10px `) + theme.primaryColor};
  background: ${({ theme }) => `linear-gradient(to right, ${theme.primaryColor} 0%, ${theme.primaryColor} 25%, ${theme.onPrimary} 75%)`};
  background-size: 400% 100%;
  background-position: ${({ fixed }) => fixed ? 'right top' : 'left bottom'};
  transition: background 0.5s ease-in, box-shadow 1.5s ease-out;
  & a {
    text-decoration: none;
    color: ${({ theme, fixed }) => fixed ? theme.primaryColor : theme.onPrimary};
    transition: color 1.5s;
  }
`

export default HeaderStyle
