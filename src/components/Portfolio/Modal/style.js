import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  ${({ open }) => open && css`
    z-index: 20;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.95);
    color: white;
  `}
`

const ModalStyle = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  & > .modal_picture {
    ${({ open }) => open ? css`
    
    ` : css`
      &:hover {
        filter: blur(3px);
        cursor: pointer;
      }
      &:active {
        transform: scale(0.95, 0.95);
      }
    `}
    position: relative;
    width: 100%;
    height: 100%;
    & > div {
      height: 100%;
      width: 100%;
    }
  }

  & > .modal_description {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right:0;
    height: 300px;
  }
`

export default ModalStyle
