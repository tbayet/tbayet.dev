import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PortfolioStyle from './style'
import Modal from './Modal'

class Portfolio extends React.Component {
  constructor (props) {
    super(props)
    this.state = { animating: false }
    this.handleScroll = this.handleScroll.bind(this)
    this.myRef = React.createRef()
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    const currentTop = window.scrollY
    const currentBottom = window.scrollY + window.innerHeight
    const limit = this.myRef.current.offsetTop
    if (!this.state.animating && (currentTop + 80 < limit && currentBottom > limit + 300)) {
      this.setState({
        animating: true
      })
    } else if (this.state.animating && (currentTop + 80 > limit || currentBottom < limit + 300)) {
      this.setState({
        animating: false
      })
    }
  }
  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            IMGwood: file(relativePath: { eq: "wood-pattern.png" }) {
              publicURL
            },
            IMGastro: file(relativePath: { eq: "gatsby-astronaut.png" }) {
              childImageSharp {
                fluid(maxWidth: 1080) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={({ IMGwood: { publicURL }, IMGastro: { childImageSharp } }) =>
          <PortfolioStyle background={publicURL} animating={this.state.animating}>
            <div className="table_top"></div>
            <div className="table_layer">
              <div ref={this.myRef} className="table_stair">
                <div >
                  <div className="element"><Modal img={childImageSharp.fluid}></Modal></div>
                  <div className="element"><Modal img={childImageSharp.fluid}></Modal></div>
                  <div className="element"><Modal img={childImageSharp.fluid}></Modal></div>
                  <div className="element"><Modal img={childImageSharp.fluid}></Modal></div>
                </div>
              </div>
            </div>
            <div className="table_end"></div>
          </PortfolioStyle>
        }
      />
    )
  }
}
export default Portfolio
