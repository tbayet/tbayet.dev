import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import FooterStyle, { CarouselStyle } from './style'
import Img from 'gatsby-image'
import Slider from './Slider'

const json = [
  {
    img: 'yolo.jpg',
    description: 'rube rubarbe rubbaarrbe rubarbe rubarbe rubarrbe rubarbe rubbe rubbe '
  },
  {
    img: 'yolo.jpg',
    description: ' rubararbe rubarrbe rubarberbe rubare rarbe '
  },
  {
    img: 'yolo.jpg',
    description: 'rubadfsgfhjgdhhagdfhfda fsdghdhfdhg dfgh sfhgbarbe '
  },
  {
    img: 'yolo.jpg',
    description: 'rubfdsg gdsfgdsfg dfgsgrubarbe rubafgh sdfgdsfgdf  rubarbe '
  },
  {
    img: 'yolo.jpg',
    description: 'rubarbdfg dsgdfgbe rubarbe rsdfg dgfgsdfg fgdgdfgsd dfgds gdsfgsddfgdfsgarbe '
  }
]

const Carousel = ({ images }) => {
  return (
    <CarouselStyle>
      <Slider>
        {json.map((e, i) => <div key={i}><Img objectFit="cover" style={{ height: '100%' }} objectPosition="50% 50%" fluid={images[i].node.childImageSharp.fluid} /></div>)}
      </Slider>
    </CarouselStyle>
  )
}

class Footer extends React.Component {
  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            carouselImages: allFile(filter: { relativeDirectory: {eq: "carousel" } }) {
              edges {
                node {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  },
                  name
                }
              }
            }
          }
        `}
        render={({ carouselImages: { edges } }) =>
          <FooterStyle>
            <div className="footer_container">
              <div className="footer_svg1">
                <div className="footer_svg2">
                  HELLO BUTTON
                </div>
              </div>
              <div className="footer_timeline">
                <span></span>
                <Carousel images={edges}></Carousel>
                <span></span>
              </div>
            </div>
          </FooterStyle>
        }
      />
    )
  }
}

export default Footer
