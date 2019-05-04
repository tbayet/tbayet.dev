import styled from '@emotion/styled'
import { css } from '@emotion/core'
import html5back from '../../images/html5back.svg'
import html5front from '../../images/html5front.svg'

export const FooterTransitionStyle = styled.div`
  margin-top: -1px;
  z-index: 1;
  flex: 1 1 auto;
  height: 200px;
  background-image: ${({ background }) => `url(${background})`};
  background-color: ${({ theme }) => theme.primaryColor};
  background-size: 100% 200px;
  background-repeat: no-repeat;
  background-position: top;
  transform: rotateY(180deg);
`

export const CarouselStyle = styled.div`
  flex: 1 1 auto;
  height: 100%;
`

const FooterStyle = styled.footer`
  position: absolute;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryColor};
  font: ${({ theme }) => theme.fontPrimary.bold};
  right: 0;
  left: 0;
  margin-bottom: -200px;
  & > .footer_container {
    position: relative;
    width: 100%;
    top: -250px;
    margin-bottom: -200px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    & > .footer_svg1 {      
      flex: 0 1 calc(300px + 15vw);;
      z-index: 2;
      position: relative;
      height: calc(300px + 15vw);
      width: calc(300px + 15vw);
      background-image: url(${html5back});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      & > .footer_svg2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        background: url(${html5front});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`

export default FooterStyle
