import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PortfolioStyle, { Modal } from './style'
import ModalTrigger, { ModalContent } from './Modal'
import Projects from './Projects'
import School from './School'

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
  handleClick (i) {
    return () => {
      this.setState({
        modalOpen: !this.state.modalOpen,
        modalContent: i
      })
    }
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
            portfolio: allMarkdownRemark (filter: { fileAbsolutePath: { regex : "/static\/portfolio/" } }) {
              edges {
                node {
                  html
                  frontmatter {
                    picture {
                      childImageSharp {
                        fluid(maxWidth: 1920) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            },
            IMGwood: file(relativePath: { eq: "wood-pattern.png" }) {
              publicURL
            },
            transitionBackground: file(relativePath: { eq: "transition-background.svg" }) {
              publicURL
            }
          }
        `}
        render={({ portfolio: { edges }, transitionBackground }) =>
          <PortfolioStyle animating={this.state.animating} transitionBackground={transitionBackground.publicURL}>
            <div className="table_top"></div>
            <div className="table_layer">
              <div ref={this.myRef} className="table_stair">
                <div >
                  {
                    edges.map((elem, index) =>
                      <div onClick={this.handleClick(index)} className="element">
                        <ModalTrigger img={elem.node.frontmatter.picture.childImageSharp.fluid}></ModalTrigger>
                      </div>
                    )
                  }
                  {/* <div onClick={this.handleClick(0)} className="element"><ModalTrigger img={edges[0].node.childImageSharp.fluid}></ModalTrigger></div>
                  <div onClick={this.handleClick(1)} className="element"><ModalTrigger img={edges[1].node.childImageSharp.fluid}></ModalTrigger></div>
                  <div onClick={this.handleClick(2)} className="element"><ModalTrigger img={edges[0].node.childImageSharp.fluid}></ModalTrigger></div>
                  <div onClick={this.handleClick(3)} className="element"><ModalTrigger img={edges[0].node.childImageSharp.fluid}></ModalTrigger></div> */}
                </div>
              </div>
            </div>
            <div className="table_end"></div>
            <Modal onClick={this.handleClick(0)} open={this.state.modalOpen}>
              <div onClick={(e) => e.stopPropagation()}>
                {
                  edges.length &&
                  <ModalContent
                    image={edges[this.state.modalContent].node.frontmatter.picture.childImageSharp.fluid}
                    text={edges[this.state.modalContent].node.html}
                  />
                }
              </div>
            </Modal>
          </PortfolioStyle>
        }
      />
    )
  }
}
export default Portfolio
