import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import HistoryStyle, { HistoryDesc } from './style'
import { FadeIn } from '../../Effects'
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
          <FadeIn>
            <HistoryStyle>
              <Slider>
                {edges.map((e, i) =>
                  <span key={'slide-' + i}>
                    <Img imgStyle={{ objectFit: 'contain', objectPosition: '50% 50%' }} style={{ height: '100%', width: '100%' }} fluid={e.node.frontmatter.picture.childImageSharp.fluid} />
                    <HistoryDesc>
                      <h3>{e.node.frontmatter.title}</h3>
                      <span>{e.node.frontmatter.dateFrom} - {e.node.frontmatter.dateTo}</span>
                      <div dangerouslySetInnerHTML={{ __html: e.node.html }}></div>
                    </HistoryDesc>
                  </span>
                )}
              </Slider>
            </HistoryStyle>
          </FadeIn>
        }
      />
    )
  }
}

export default History
