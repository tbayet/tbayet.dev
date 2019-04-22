import styled from '@emotion/styled'

export const ProfilTransitionStyle = styled.div`
  margin-top: -1px;
  flex: 1 1 auto;
  height: 200px;
  background-image: ${({ theme }) => `url("data:image/svg+xml;utf8, <svg width='64' height='16' xmlns='http://www.w3.org/2000/svg'><path d='M0 16 C52 16 32 0 64 0 L64 0 L58 0 L0 0 Z' fill='${theme.primaryColor}' /></svg>")`};
  background-size: 100% 200px;
  background-repeat: no-repeat;
  background-position: top;
`

const ProfilStyle = styled.div`
  flex: 1 1 auto;
  padding-bottom: 100px;
  z-index: 1;
  color: ${({ theme }) => theme.onPrimary};
  background-color: ${({ theme }) => theme.primaryColor};
  text-shadow: 1px 1px 3px ${({ theme }) => theme.primaryColor}, -1px -1px 3px ${({ theme }) => theme.primaryColor}, 1px -1px 3px ${({ theme }) => theme.primaryColor}, -1px 1px 3px ${({ theme }) => theme.primaryColor};
  & > div:nth-of-type(1) {
    padding: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap-reverse;
    align-items: center;
    
    & > #profile_description {
      margin-top: 5vh;
      flex: 1 5 70%;
      text-align: center;
      & > h2 {
        font-size: ${({ theme }) => theme.font43};
      }
      & > h3 {
        font-size: ${({ theme }) => theme.font30};
      }
    }
    & > #profile_picture {
      flex: 1 1 auto;
      max-height: 350px;
      max-width: 350px;
      min-height: 250px;
      min-width: 250px;
      border-radius: 30px;
      overflow: hidden;
    }
  }
  & > #profile_presentation {
    font: ${({ theme }) => theme.fontPrimary.light};
    margin-left: 20%;
    margin-right: 20%;
    font-size: ${({ theme }) => theme.font14};
    width: 50%;
  }
`

export default ProfilStyle
