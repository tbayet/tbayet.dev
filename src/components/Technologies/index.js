import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import TechnologiesStyle from './style'
import FlipCard from './FlipCard'
import HiddenMusic from './HiddenMusic'

class Technologies extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hiddenMusic: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    this.setState({
      hiddenMusic: !this.state.hiddenMusic
    })
  }
  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            cards: allCardsJson {
              edges {
                node {
                  note,
                  icon,
                  name
                }
              }
            },
            svgBackground: file(relativePath: { eq: "mac-background.svg" }) {
              publicURL
            },
            icons: allFile(filter: { relativeDirectory: {eq: "icons" } }) {
              edges {
                node {
                  name,
                  publicURL
                }
              }
            }
          }
        `}
        render={({ svgBackground: { publicURL }, icons: { edges }, cards }) =>
          <TechnologiesStyle background={publicURL} hiddenMusic={this.state.hiddenMusic}>
            <div id="mac_container">
              <div id="mac_screen">
                <div id="cards_container">
                  {cards.edges.map(({ node }, index) => {
                    const svg = edges.find(e => e.node.name === node.icon)
                    return (
                      <div key={index} className="card">
                        <FlipCard name={node.name} note={node.note} icon={svg.node.publicURL} />
                      </div>
                    )
                  })}
                </div>
                <HiddenMusic />
              </div>
              <div id="mac_bottom"><button onClick={this.handleClick}></button></div>
              <div id="mac_foot"></div>
            </div>
          </TechnologiesStyle>
        }
      />
    )
  }
}

Technologies.propTypes = {
}

Technologies.defaultProps = {
}

export default Technologies
