import styled from '@emotion/styled'

const PricingStyle = styled.div`
  position: relative;
  padding-left: 5%;
  padding-right: 5%;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  z-index: 1;
  color: ${({ theme }) => theme.primaryColorActive};
  background-color: ${({ theme }) => theme.backgroundColor};
  & > div {
    width: 60vw;
    & > table {
      width: 60vw;
      font-size: calc(0.5vw + 10px);;
      text-align: center;
      border: solid 3px ${({ theme }) => theme.primaryColorActive};
      border-collapse: collapse;
      width: 100%;
      & td, & th {
        border: solid 1px ${({ theme }) => theme.primaryColorActive};
        padding: 8px;
        padding-right: 20vw;
      }
      & tr:nth-of-type(even) {
        background-color: rgba(0, 0, 0, 0.2);
      }
      & tr:hover {
        background-color: rgba(0, 0, 0, 0.4);
      }
      & th {
        font-size: calc(1vw + 14px);
        padding-top: 18px;
        padding-bottom: 18px;
        background-color: ${({ theme }) => theme.primaryColor};
        color: ${({ theme }) => theme.onPrimary};
      }
    }
    & > table:nth-of-type(2) {
      border-top: none;
    }
  }
& > .price {
  margin-left: -15vw;
  margin-top: 120px;
  margin-bottom: -80px;
  background-color: ${({ theme }) => theme.surfaceColor};
  color: ${({ theme }) => theme.onSurface};
  font: ${({ theme }) => theme.fontPrimary.bold};
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  box-shadow: 0 0 20px 10px ${({ theme }) => theme.primaryColor};
  & > div:nth-of-type(1) {
    font-size: calc(20px + 6vw);
    & > span:nth-of-type(1) {
      font-size: 140%;
      text-shadow: 0px 0px 15px ${({ theme }) => theme.primaryColor};
    }
  }
  & > div:nth-of-type(2) {
    font-size: 2vw;
    font-style: italic;
  }
}
`

export default PricingStyle
