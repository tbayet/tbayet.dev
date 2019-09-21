import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ProfilStyle, { ProfilTransitionStyle } from './style'
import { FadeIn } from '../../Effects'

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

class Profil extends React.Component {
  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "profil.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            },
            transitionBackground: file(relativePath: { eq: "transition-background-reverse.svg" }) {
              publicURL
            }
          }
        `}
        render={({ placeholderImage, transitionBackground }) =>
          <>
            <ProfilStyle>
              <div>
                <div id="profile_description">
                  <h2>Web Developper</h2>
                  <h3><FadeIn>Front-end Javascript</FadeIn></h3>
                </div>
                <div id="profile_picture">
                  <Img imgStyle={{ objectPosition: '100% 0%', objectFit: 'contain' }} style={{ height: '100%' }} fluid={ placeholderImage.childImageSharp.fluid } />
                </div>
              </div>
              <div id="profile_presentation">
                <FadeIn slow>
                  <h2>I'M LOOKING FOR A CONTRACT WHERE:</h2>
                  <ul>
                    <li>i'll work in a team, including communication, peer-learning, friendship</li>
                    <li>there is no "you are too Junior": You already know i'm Junior, your target should be to look for someone you really want to work with and trust, it's a long term contract and i'll learn fast</li>
                    <li>my role can expand: not beeing confined to one job, one techno, having the possibility to enlarge the scope of my work and knowledge</li>
                    <li>my team can be flexible: schedule is great for cohesion, but should be more scalable - in both ways - to maximize the productivity and show consideration for the Human aspect</li>
                    <li>we will meet outside: group spirit and afterworks are required, for more complicity, more social links, and knowing our collaborators</li>
                    <li>we all follow the best practices: code reviews, optimization, justified unit tests, git specs, maintainability aims</li>
                    <li>we are not afraid of trying, upgrading and taking new directions</li>
                    <li>i will not feel to have a boss but a leader</li>
                    <li>"Disruptif" is not just a meaningless/unambitious keyword that paradoxically everyone use</li>
                  </ul>
                </FadeIn>
              </div>
            </ProfilStyle>
            <ProfilTransitionStyle background={transitionBackground.publicURL}></ProfilTransitionStyle>
          </>
        }
      />
    )
  }
}

export default Profil
