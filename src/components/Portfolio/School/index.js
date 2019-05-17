import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SchoolStyle from './style'
import Img from 'gatsby-image'

class School extends React.Component {
  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            holygraph: allFile(filter: {relativeDirectory: {eq: "portfolio"}}) {
              edges {
                node {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ holygraph: { edges } }) =>
          <SchoolStyle>
            <Img style={{ width: '100%', height: '400px' }} fluid={edges[0].node.childImageSharp.fluid}/>
            <p>
              42 Cursus is a project tree, with his roots on C language, but then it allow a web branche.
               It starts with PHP/HTML/MySQL, but end on security and Javascript like Matcha that is a full
                stack love-meeting web app, or Red tetris, a multiplayer/sockets-based game.
            </p>
          </SchoolStyle>
        }
      />
    )
  }
}
export default School
