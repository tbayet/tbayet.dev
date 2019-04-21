import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ProfilStyle from './style'

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

const Profil = () =>
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={({ placeholderImage }) =>
      <ProfilStyle>
        <div>
          <div id="profile_description">
            <h2>Web Developper</h2>
            <h3>Front-end Javascript - Freelance</h3>
          </div>
          <div id="profile_picture">
            <Img fluid={ placeholderImage.childImageSharp.fluid } />
          </div>
        </div>
        <div id="profile_presentation">
          "" Hi ! I'm Thomas, 28 years young ! I grew up in France where i learned to code during my studies at 42_Born2Code school after another IT cursus. I'm now looking to manage my own activity in addition to a part-time contract. I need you to choose me for your next freelance needs, in order to help me 
finance my future music jam session houseboat ! ""
        </div>
      </ProfilStyle>
    }
  />
export default Profil
