import styled from '@emotion/styled'

export const DotStyle = styled.span`
  --dot-size: 12px;
  height: calc(var(--dot-size) / 1.5);
  width: calc(var(--dot-size) / 1.5);
  background-color: ${({ value, theme }) => value > 0 ? theme.onPrimary : theme.primaryColorHover};
  border-radius: 50%;
  border: calc(var(--dot-size) / 5) solid ${({ value, theme }) => value < 1 ? theme.primaryColorHover : theme.onPrimary};
  margin-left: calc(var(--dot-size) / 3);
  margin-right: calc(var(--dot-size) / 3);
  /* large screen */
  @media screen and (min-width: ${({ theme }) => theme.lg}) {
    --dot-size: 16px;
  }
  /* tablet */
  @media screen and (max-width: ${({ theme }) => theme.md}) {
    --dot-size: 8px;
  }
  @media screen and (max-width: ${({ theme }) => theme.sm}) {
    --dot-size: 10px;
  }
`
const RatingDotStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`

export default RatingDotStyle
