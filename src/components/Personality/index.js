import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PersonalityStyle from './style'
import { FadeIn } from '../../Effects'

class Personality extends React.Component {
  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            backgroundImage: file(relativePath: { eq: "backgroundMBTI.svg" }) {
              publicURL
            },
            avatar: file(relativePath: { eq: "avatarMini.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            },
          }
        `}
        render={({ backgroundImage, avatar }) =>
          <PersonalityStyle>
            <img src={backgroundImage.publicURL} className="imageBack" />
            <div className="info">
              <div><Img style={{ height: '80px', width: '80px' }} fluid={avatar.childImageSharp.fluid} /></div>
              <h2>MORE ABOUT MYSELF</h2>
              <a target="_blank" href="https://www.16personalities.com/infp-personality/"><h4>MBTI Type: INFP</h4></a>
              <ul>
                <li>Polyvalent</li>
                <li>Médiateur</li>
                <li>Intègre</li>
                <li>Cohérent</li>
                <li>Astucieux</li>
                <li>Solidaire</li>
                <li>Autodidacte</li>
                <li>Raisonné</li>
                <li>Entousiaste</li>
                <li>Confiant</li>
                <li>Observateur</li>
                <li>Consciliant</li>
                <li>Progressiste</li>
                <li>Créatif</li>
                <li>Respectueux</li>
                <li>Idéaliste</li>
                <li>Méthodique</li>
              </ul>
              <p>...et quelques défauts tout de même...</p>
              <ul>
                <li>Impatient</li>
                <li>Anxieux</li>
              </ul>
            </div>
          </PersonalityStyle>
        }
      />
    )
  }
}

export default Personality
