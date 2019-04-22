import React from 'react'
import PricingStyle, { PricingTransitionStyle } from './style'
import { StaticQuery, graphql } from 'gatsby'

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

const Pricing = () =>
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
      <>
        <PricingStyle>
          <div>
            <table>
              <thead>
                <tr><th>What can i do</th></tr>
              </thead>
              <tbody>
                <tr><td>Statics sites or dynamic web apps</td></tr>
                <tr><td>JSX components with re-usability</td></tr>
                <tr><td>Manual or unitary testing and bugs correction</td></tr>
                <tr><td>Git merge requests check -> comment -> approve</td></tr>
                <tr><td>Clean your code, improving maintainability</td></tr>
                <tr><td>Be present to assist you or a class as an Helper</td></tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr><th>How do i work</th></tr>
              </thead>
              <tbody>
                <tr><td>From my home, or at my school or at your office</td></tr>
                <tr><td>I contact you to keep you in touch about progression</td></tr>
                <tr><td>If a contract feature is missing or incomplete, obviously free fix</td></tr>
              </tbody>
            </table>
          </div>
          <div className="price">
            <div><span>400€</span> /day</div>
            <div>Incl. taxes</div>
          </div>
        </PricingStyle>
        <PricingTransitionStyle></PricingTransitionStyle>
      </>
    }
  />

export default Pricing
