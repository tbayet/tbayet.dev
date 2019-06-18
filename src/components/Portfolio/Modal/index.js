import React from 'react'
import ReactDOM from 'react-dom'
import { PropTypes } from 'prop-types'
import Img from 'gatsby-image'
import ModalTriggerStyle, { ModalContentStyle } from './style'

export const ModalContent = ({ image, text }) =>
  <ModalContentStyle>
    <Img style={{ width: '100%', height: '100%' }} imgStyle={{ objectFit: 'cover' }} fluid={image}/>
    <div dangerouslySetInnerHTML={{ __html: text }}></div>
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
