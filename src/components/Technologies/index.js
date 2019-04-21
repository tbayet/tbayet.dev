import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import TechnologiesStyle from './style'
import FlipCard from './FlipCard'

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

const cards = [
  {
    note: 4,
    icon: 'icon-c',
    name: 'Langage C'
  },
  {
    note: 2,
    icon: 'icon-shell',
    name: 'Shell script'
  },
  {
    note: 2,
    icon: 'icon-php',
    name: 'PHP'
  },
  {
    note: 2,
    icon: 'icon-mysql',
    name: 'MySQL'
  },
  {
    note: 4,
    icon: 'icon-html',
    name: 'HTML 5'
  },
  {
    note: 4,
    icon: 'icon-css',
    name: 'CSS 3'
  },
  {
    note: 4,
    icon: 'icon-javascript',
    name: 'Javascript'
  },
  {
    note: 3,
    icon: 'icon-angular',
    name: 'Angular'
  },
  {
    note: 3,
    icon: 'icon-vue',
    name: 'Vue'
  },
  {
    note: 2,
    icon: 'icon-nodejs',
    name: 'NodeJS'
  }
]

const Technologies = () =>
  <StaticQuery
    query={graphql`
      query {
        svgBackground: file(relativePath: { eq: "mac-background.svg" }) {
          publicURL
        }
      }
    `}
    Style
    render={({ svgBackground: { publicURL } }) =>
      <TechnologiesStyle background={publicURL}>
        <div id="mac_container">
          <div id="mac_screen">
            <div id="cards_container">
              {cards.map((card, index) => {
                return (
                  <div key={index} className="card">
                    <FlipCard name={card.name} icon={card.icon} />
                  </div>
                )
              })}
            </div>
          </div>
          <div id="mac_bottom"></div>
          <div id="mac_foot"></div>
        </div>
      </TechnologiesStyle>
    }
  />
export default Technologies
