import styled from '@emotion/styled'

const PersonalityStyle = styled.div`
  position: relative;
  margin: 100% auto;
  margin-top: 0;
  margin-bottom: 50px;
  display: flex;
  /* overflow: hidden; */
  /* width: 100%; */
  width: 80%;
  max-width: 1200px;
  height: 600px;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  /* margin-bottom: 30px; */
  & .info {
    color: ${({ theme }) => theme.primaryColor};
    text-align: center;
    width: 100%;
    max-height: 550px;
    padding-left: 20px;
    padding-right: 50px;
    box-shadow: 0 3px 10px ${({ theme }) => theme.primaryColor};
    background-color: rgba(255, 255, 255, 0.9);
    font-family: ${({ theme }) => theme.fontContent.primary};
    font-weight: bold;
    font-size: calc(0.3vw + 14px);
    position: absolute;
    z-index: 1;
    & a {
      color: ${({ theme }) => theme.primaryColor};
    }
    & li {
      font-size: calc(0.5vw + 10px);
      text-decoration: none;
      display: inline-block;
      border: solid 1px ${({ theme }) => theme.primaryColor};
      border-radius: 20px;
      padding: 8px;
      margin: 5px;
      transition: background-color 0.3s, color 0.3s;
      &:hover {
        background-color: rgb(50, 150, 30);
        color: white;
        cursor: crosshair;
      }
    }
    & ul:last-of-type > li:hover {
      background-color: rgb(150, 50, 30);
    }
    & > div:first-of-type {
      display: inline-block;
      border: solid 5px ${({ theme }) => theme.primaryColor};
      min-height: 80px;
      background-color: ${({ theme }) => theme.primaryColor};
      padding-left: 5%;
      padding-right: 5%;
      margin-top: -20px;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
    }
  }
  & .imageBack {
    border-radius: 50px;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.7;
    padding: 20px;
  }
`

export default PersonalityStyle
