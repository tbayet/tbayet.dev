import styled from '@emotion/styled'

export const ModalContentStyle = styled.div`
  position: relative;
  width: calc(300px + 30vw);
  max-width: 90vw;
  height: calc(400px + 40vh);
  max-height: 90vh;
  & p, & li {
    font-family: ${({ theme }) => theme.fontContent.primary};
    font-size: calc(0.6rem + 0.4vw);
  }
  & > div:last-of-type {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.98);
    padding-left: 2vw;
    padding-right: 2vw;
    left: 0;
    bottom: 0;
    right: 0;
    border-top: solid 3px black;
  }
`

const ModalTriggerStyle = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  transition: filter 0.2s, transform 0.2s;
  &:hover {
    transform: scale(1.05, 1.02);
    filter: grayscale(0%);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95, 0.95);
  }
  & > .modal_picture {
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

export default ModalTriggerStyle
