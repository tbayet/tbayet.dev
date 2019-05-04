import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import HistoryStyle from './style'
import Img from 'gatsby-image'
import Slider from './Slider'

const json = [
  {
    img: 'yolo.jpg',
    description: 'rube rubarbe rubbaarrbe rubarbe rubarbe rubarrbe rubarbe rubbe rubbe '
  },
  {
    img: 'yolo.jpg',
    description: ' rubararbe rubarrbe rubarberbe rubare rarbe '
  },
  {
    img: 'yolo.jpg',
    description: 'rubadfsgfhjgdhhagdfhfda fsdghdhfdhg dfgh sfhgbarbe '
  },
  {
    img: 'yolo.jpg',
    description: 'rubfdsg gdsfgdsfg dfgsgrubarbe rubafgh sdfgdsfgdf  rubarbe '
  },
  {
    img: 'yolo.jpg',
    description: 'rubarbdfg dsgdfgbe rubarbe rsdfg dgfgsdfg fgdgdfgsd dfgds gdsfgsddfgdfsgarbe '
  }
]

class History extends React.Component {
  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            slider: allFile(filter: { relativeDirectory: {eq: "admin"} }) {
              edges {
                node {
                  childMarkdownRemark {
                    html
                  }
                }
              }
            },
            carouselImages: allFile(filter: { relativeDirectory: {eq: "carousel" } }) {
              edges {
                node {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  },
                  name
                }
              }
            }
          }
        `}
        render={({ carouselImages: { edges }, slider }) =>
          <HistoryStyle>
            <Slider>
              {json.map((e, i) =>
                <span key={i}>
                  <Img objectFit="cover" style={{ height: '100%' }} objectPosition="50% 50%" fluid={edges[i].node.childImageSharp.fluid} />
                  <p>blabla {e.description} {i}</p>
                </span>
              )}
            </Slider>
          </HistoryStyle>
        }
      />
    )
  }
}

export default History
