import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ProjectsStyle from './style'
import Img from 'gatsby-image'

class Projects extends React.Component {
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
          <ProjectsStyle>
            <Img style={{ width: '80%' }} imgStyle={{ objectFit: 'contain' }} fluid={edges[1].node.childImageSharp.fluid}/>
            <p>
              I made a website for my music band and a demo app for subtitle translation in team. My most recent and valuable demonstration is this
               website, made with gatsby/react/emotion, without any component library. I would show you what i did at my work but unfortunatly i can't.
            </p>
          </ProjectsStyle>
        }
      />
    )
  }
}
export default Projects
