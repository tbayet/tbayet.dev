import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import HiddenMusicStyle, { HitzakStyle, MAOStyle } from './style'

class HiddenMusic extends React.Component {
  constructor (props) {
    super(props)
    this.state = { selected: 0 }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (i) {
    this.setState({ selected: i })
  }
  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            mp3: allFile(filter: { relativeDirectory: { eq: "mp3" } }, sort: { fields: name}) {
              edges {
                node {
                  name,
                  publicURL
                }
              }
            }
          }
        `}
        render={({ mp3: { edges } }) =>
          <HiddenMusicStyle>
            <HitzakStyle>
              <h2>MY MUSIC BAND</h2>
              <p>I'm also a musician, self-educated multi-instrumentist.
                 I play with the band Hitzak as a percussionnist, and compose
                  some accoustic guitar based music and electronic MAO.</p>
              <iframe src="https://www.youtube-nocookie.com/embed/oyZBT1Wl1Dg?start=133" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </HitzakStyle>
            <MAOStyle selected={this.state.selected}>
              <p>
                Some examples of songs i've wrote with MAO
              </p>
              <figure>
                <figcaption>
                  <h3>
                    {edges[this.state.selected].node.name}
                  </h3>
                </figcaption>
                <audio
                  controls
                  src={edges[this.state.selected].node.publicURL}
                >
                  Your browser does not support the <code>audio</code> element.
                </audio>
              </figure>
              <ul>
                {
                  edges.map((edge, i) =>
                    <li key={i} onClick={() => this.handleClick(i)}>
                      {edge.node.name}
                    </li>
                  )
                }
              </ul>
            </MAOStyle>
          </HiddenMusicStyle>
        }
      />
    )
  }
}

export default HiddenMusic
