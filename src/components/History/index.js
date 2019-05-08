import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import HistoryStyle from './style'
import Img from 'gatsby-image'
import Slider from './Slider'

class History extends React.Component {
  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            slider: allMarkdownRemark (filter: { fileAbsolutePath: { regex : "/static\/slider/" } }) {
              edges {
                node {
                  html
                  frontmatter {
                    title
                    dateFrom(formatString: "YYYY")
                    dateTo(formatString: "YYYY")
                    picture {
                      childImageSharp {
                        fluid(maxWidth: 300) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ slider: { edges } }) =>
          <HistoryStyle>
            <Slider>
              {edges.map((e, i) =>
                <span key={'slide-' + i}>
                  <Img objectFit="cover" style={{ height: '100%' }} objectPosition="50% 50%" fluid={e.node.frontmatter.picture.childImageSharp.fluid} />
                  <div>
                    {e.node.frontmatter.dateFrom} - {e.node.frontmatter.dateTo}
                    {e.node.frontmatter.title}
                    <p dangerouslySetInnerHTML={{ __html: e.node.html }}></p>
                  </div>
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
