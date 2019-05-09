import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import FooterStyle, { FooterTransitionStyle, StyledButton } from './style'
import Img from 'gatsby-image'

class Footer extends React.Component {
  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            transitionBackground: file(relativePath: { eq: "transition-background.svg" }) {
              publicURL
            }
          }
        `}
        render={({ transitionBackground }) =>
          <>
            <FooterTransitionStyle background={transitionBackground.publicURL}></FooterTransitionStyle>
            <FooterStyle>
              <div className="footer_container">
                <div>
                  <StyledButton href='https://w3docs.com' >GITHUB</StyledButton>
                  <StyledButton href='https://w3docs.com' >PROFIL 42</StyledButton>
                  <StyledButton href='https://w3docs.com' >MALT</StyledButton>
                  <StyledButton href='https://w3docs.com' >EMAIL</StyledButton>
                  <StyledButton href='https://w3docs.com' > DEGRADE </StyledButton>
                </div>
              </div>
            </FooterStyle>
          </>
        }
      />
    )
  }
}

export default Footer
