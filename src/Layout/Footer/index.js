import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import FooterStyle, { FooterTransitionStyle } from './style'
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
                <div className="footer_svg1">
                  <div className="footer_svg2">
                    HELLO BUTTON
                  </div>
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
