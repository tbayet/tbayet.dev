import styled from '@emotion/styled'

export const ProfilTransitionStyle = styled.div`
  margin-top: -1px;
  flex: 1 1 auto;
  height: 200px;
  background-image: ${({ background }) => `url(${background})`};
  background-color: ${({ theme }) => theme.primaryColor};
  background-size: 100% 200px;
  background-repeat: no-repeat;
  background-position: top;
`

const ProfilStyle = styled.div`
  flex: 1 1 auto;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${({ theme }) => theme.onPrimary};
  background-color: ${({ theme }) => theme.primaryColor};
  text-shadow: 1px 1px 3px ${({ theme }) => theme.primaryColor}, -1px -1px 3px ${({ theme }) => theme.primaryColor}, 1px -1px 3px ${({ theme }) => theme.primaryColor}, -1px 1px 3px ${({ theme }) => theme.primaryColor};
  & > div:nth-of-type(1) {
    position: relative;
    overflow: hidden;
    height: 500px;
    width: calc(40% + 400px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (max-width: ${({ theme }) => theme.md}) {
      height: fit-content;
    }
    & > #profile_description {
      flex: 1 1 auto;
      flex-direction: column;
      height: 100%;
      display: flex;
      justify-content: center;
      z-index: 1;
      text-align: left;
      border-radius: 30px;
      background: ${({ theme }) => `radial-gradient(circle at 100% 120%, transparent calc(550px), rgba(0, 0, 0, 0.3) calc(550px + 5vw), transparent calc(550px + 20vw)),
        linear-gradient(to left, transparent, transparent 200px, ${theme.primaryColor} calc(250px + 20vw), ${theme.primaryColor})`};
      @media screen and (max-width: ${({ theme }) => theme.md}) {
        background: transparent;
        flex: 1 1 100%;
        text-align: center;
      }
      & > h2 {
        font-size: ${({ theme }) => theme.font43};
        font-family: ${({ theme }) => theme.fontTitle.primary};
      }
      & > h3 {
        font-size: ${({ theme }) => theme.font30};
        font-family: ${({ theme }) => theme.fontTitle.secondary};
      }
    }
    & > #profile_picture {
      border-radius: 30px;
      overflow: hidden;
      @media screen and (min-width: ${({ theme }) => theme.md}) {
        position: absolute;
        right: 0vw;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100vw;    
      }
      @media screen and (max-width: ${({ theme }) => theme.md}) {
        position: relative;
        width: 400px;
        height: 400px;
        & img {
          object-fit: cover !important;
        }
      }
    }
  }
  & > #profile_presentation {
    font-family: ${({ theme }) => theme.fontTitle.tertiary}, sans-serif;
    margin-top: 100px;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 50px;
    font-size: ${({ theme }) => theme.font14};
    width: 50%;
  }
`

export default ProfilStyle
