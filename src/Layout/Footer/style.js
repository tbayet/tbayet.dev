import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const CarouselStyle = styled.div`
  flex: 1 1 auto;
  padding-top: 8px;
  padding-bottom: 150px;
  overflow-y: hidden;
  height: 100px;
  width: 40vw;
  min-width: 500px;
  background-color: black;
  .slick-track {
    display: flex;
  }
  .slick-slide > div {
    display: flex !important;
  }
  .slick-slide {
    height: auto;
    justify-content: center;
    display: flex !important;
    flex: 1 1 auto;
  }
  slick-slide > div > div {
    flex: auto;
    display: flex;
    flex-flow: column nowrap;
  }
  .slick-slide {
    outline: none;    
  }
  .car_slide {
    position: relative;
    width: 50px !important;
    height: 50px;
    outline: none;
    transition: width 0.5s linear, height 0.5s linear;
  }

  @media screen and (max-width: 768px) {
    .slick-slide .car_slide {
      width: 100px !important;
      height: 100px !important;
    }
  }
  @media screen and (min-width: 769px) {
    .slick-current .car_slide {
      width: 100px !important;
      height: 100px !important;
    }
    .slick-slide:not(.slick-current) .car_slide {
      &:before {
        content: "";
        z-index: 50;
        position: absolute;
        top: 0;
        bottom:0;
        left:0;
        right:0;
        background-color: rgba(0, 0, 0, 0.7);
      }
    }
  }
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
    align-items: flex-end;
    flex-wrap: wrap;
    & > .footer_svg1 {      
      flex: 0 1 calc(300px + 15vw);;
      z-index: 2;
      position: relative;
      height: calc(300px + 15vw);
      width: calc(300px + 15vw);
      background-image: url("data:image/svg+xml;utf8, <svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'><path d='M32 64 L52 56 L60 0 L4 0 L12 56 Z' fill='#DDCC7B' /></svg>");
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
        background: url("data:image/svg+xml;utf8, <svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'><path d='M32 60 L48 52 L56 4 L32 4 Z' fill='#FEFC6A' /></svg>");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    & > .footer_timeline {
      position: relative;
      z-index: 2;
      flex: 1 1 auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 400px;
      & > span:nth-of-type(1) {
        width: 60px;
        height: 100%;
        background: url("data:image/svg+xml;utf8, <svg width='8' height='16' xmlns='http://www.w3.org/2000/svg'><path d='M2.1 3.1c0.2 1.3 0.4 1.6 0.4 2.9 0 0.8-1.5 1.5-1.5 1.5v1c0 0 1.5 0.7 1.5 1.5 0 1.3-0.2 1.6-0.4 2.9-0.3 2.1 0.8 3.1 1.8 3.1s2.1 0 2.1 0v-2c0 0-1.8 0.2-1.8-1 0-0.9 0.2-0.9 0.4-2.9 0.1-0.9-0.5-1.6-1.1-2.1 0.6-0.5 1.2-1.1 1.1-2-0.3-2-0.4-2-0.4-2.9 0-1.2 1.8-1.1 1.8-1.1v-2c0 0-1 0-2.1 0s-2.1 1-1.8 3.1z' fill='#FEFC6A' /></svg>");
        background-size: 120% 80%;
        background-repeat: no-repeat;
        background-position: center;
      }
      & > span:nth-of-type(2) {
        width: 100px;
        height: 100%;
        background: url("data:image/svg+xml;utf8, <svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><path d='M13.9 3.1c-0.2 1.3-0.4 1.6-0.4 2.9 0 0.8 1.5 1.5 1.5 1.5v1c0 0-1.5 0.7-1.5 1.5 0 1.3 0.2 1.6 0.4 2.9 0.3 2.1-0.8 3.1-1.8 3.1s-2.1 0-2.1 0v-2c0 0 1.8 0.2 1.8-1 0-0.9-0.2-0.9-0.4-2.9-0.1-0.9 0.5-1.6 1.1-2.1-0.6-0.5-1.2-1.1-1.1-2 0.2-2 0.4-2 0.4-2.9 0-1.2-1.8-1.1-1.8-1.1v-2c0 0 1 0 2.1 0s2.1 1 1.8 3.1z' fill='#FEFC6A' /></svg>");
        background-size: 100% 50%;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`

export default FooterStyle
