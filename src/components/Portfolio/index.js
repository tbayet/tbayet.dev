import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PortfolioStyle, { Modal } from './style'
import ModalTrigger from './Modal'

class Portfolio extends React.Component {
  constructor (props) {
    super(props)
    this.state = { animating: false, modalOpen: false, modalContent: 0 }
    this.handleScroll = this.handleScroll.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.myRef = React.createRef()
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleClick (e) {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
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
            },
            transitionBackground: file(relativePath: { eq: "transition-background.svg" }) {
              publicURL
            }
          }
        `}
        render={({ IMGwood: { publicURL }, IMGastro: { childImageSharp }, transitionBackground }) =>
          <PortfolioStyle background={publicURL} animating={this.state.animating} transitionBackground={transitionBackground.publicURL}>
            <div className="table_top"></div>
            <div className="table_layer">
              <div ref={this.myRef} className="table_stair">
                <div >
                  <div onClick={this.handleClick} className="element"><ModalTrigger img={childImageSharp.fluid}></ModalTrigger></div>
                  <div onClick={this.handleClick} className="element"><ModalTrigger img={childImageSharp.fluid}></ModalTrigger></div>
                  <div onClick={this.handleClick} className="element"><ModalTrigger img={childImageSharp.fluid}></ModalTrigger></div>
                  <div onClick={this.handleClick} className="element"><ModalTrigger img={childImageSharp.fluid}></ModalTrigger></div>
                </div>
              </div>
            </div>
            <div className="table_end"></div>
            <Modal onClick={this.handleClick} open={this.state.modalOpen}>
              <div onClick={(e) => e.stopPropagation()}>
                {/* {portfolio[this.state.modalContent]} */}
                HELLOOOOOOO
              </div>
            </Modal>
          </PortfolioStyle>
        }
      />
    )
  }
}
export default Portfolio
