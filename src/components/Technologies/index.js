import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import TechnologiesStyle from './style'
import FlipCard from './FlipCard'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

class Technologies extends React.Component {
  constructor (props) {
    super(props)
    this.state = { video: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    this.setState({
      video: !this.state.video
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
            videoMe: file(relativePath: { eq: "video.mp4" }) {
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
        render={({ svgBackground: { publicURL }, icons: { edges }, cards, videoMe }) =>
          <TechnologiesStyle background={publicURL} video={this.state.video}>
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
                <div className="mac_video">
                  <video src={videoMe.publicURL} autoPlay="autoplay" loop="loop" muted="muted"></video>
                </div>
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
