import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import FooterStyle, { FooterTransitionStyle, StyledButton, RoundButton, ButtonsOverlay } from './style'
import Img from 'gatsby-image'
import linkSVG from './link.svg'

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { toggle: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState({
      toggle: !this.state.toggle
    })
  }
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
            <FooterStyle toggle={this.state.toggle}>
              <div className="footer_container">
                <RoundButton onClick={() => this.handleClick()}>
                  <img src={linkSVG} />
                </RoundButton>
                <ButtonsOverlay toggle={this.state.toggle}></ButtonsOverlay>
                <div>
                  <StyledButton href='https://github.com/tbayet' >GITHUB</StyledButton>
                  <StyledButton href='https://companies.intra.42.fr/resumes/LVafEJCf' >PROFIL 42</StyledButton>
                  <StyledButton href='mailto:bayet.thomas@gmail.com' >EMAIL</StyledButton>
                  <StyledButton href='https://www.linkedin.com/in/tbayet' > LINKEDIN </StyledButton>
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
