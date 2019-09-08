import styled from '@emotion/styled'

const PersonalityStyle = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  margin-bottom: 30px;
  & .info {
    color: ${({ theme }) => theme.primaryColor};
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
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
      min-height: 80px;
      background-color: ${({ theme }) => theme.primaryColor};
      padding-left: 5%;
      padding-right: 5%;
      overflow: hidden;
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
    }
  }
  & .imageBack {
    border-radius: 5%;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
    padding: 20px;
  }
`

export default PersonalityStyle
