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
                  "" Hi ! I'm Thomas, 28 years young ! I grew up in France where i learned to code during my studies at 42_Born2Code school after another 2 years IT cursus.
                   I have developped my skills in teamwork, technologies purpose comprehension, autonomy and self-education, constantly reworking the scope of possibilities for my future.
                   In my work, I try as much as possible to be clear, inclusive, to anticipate wrong usage possibilities and maintenability.
                   I'm now looking for a motivating an modern contract where i will be able to extend my knowledge and keep me up-to-date with new technologies in web (and mobile) development.""
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
