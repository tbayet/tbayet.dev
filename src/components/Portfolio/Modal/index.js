import React from 'react'
import ReactDOM from 'react-dom'
import { PropTypes } from 'prop-types'
import Img from 'gatsby-image'
import ModalTriggerStyle, { ModalContentStyle } from './style'

export const ModalContent = (image, text) =>
  <ModalContentStyle>
    <Img style={{ width: '70vw' }} imgStyle={{ objectFit: 'contain' }} fluid={image}/>
    <p>
      { text }
      -------------
      I made a website for my music band and a demo app for subtitle translation in team. My most recent and valuable demonstration is this
      website, made with gatsby/react/emotion, without any component library. I would show you what i did at my work but unfortunatly i can't.
    </p>
  </ModalContentStyle>

class ModalTrigger extends React.Component {
  render () {
    return (
      <ModalTriggerStyle>
        <div className="modal_picture">
          <Img fluid={ this.props.img } />
        </div>
      </ModalTriggerStyle>
    )
  }
}

ModalTrigger.propTypes = {
  img: PropTypes.any.isRequired
}

ModalTrigger.defaultProps = {
}

export default ModalTrigger
