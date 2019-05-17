import styled from '@emotion/styled'

export const ModalContentStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60vw;
  & p, & li {
    font-family: ${({ theme }) => theme.fontContent.primary};
    font-size: calc(0.6rem + 0.3vw);
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
