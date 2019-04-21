import styled from '@emotion/styled'
import { css } from '@emotion/core'

const FlipCardStyle = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
  ${({ flip }) => flip && css`
    transform: rotateY(180deg);
  `}

  .card_front, .card_back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .card_front {
    z-index: 2;
    flex: 1 1 auto;
    background-color: ${({ theme }) => theme.primaryColorHover};
    color: ${({ theme }) => theme.onPrimary};
    & > div {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px;
      background-color: ${({ theme }) => theme.primaryColor};
    } 
  }
  .card_back {
    background-color: ${({ theme }) => theme.primaryColorHover};
    color: ${({ theme }) => theme.onPrimary};
    transform: rotateY(180deg);
    z-index: 1;
  }

  @media screen and (min-width: ${({ theme }) => theme.lg}) {
    
  }
  /* tablet */
  @media screen and (max-width: ${({ theme }) => theme.md}) {
    
  }
  /* smartphone */
  @media screen and (max-width: ${({ theme }) => theme.sm}) {
    .card_front {
    & > div {
      display: none;
    } 
  }
  }
`

export default FlipCardStyle
