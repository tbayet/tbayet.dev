import React from 'react'
import ReactDOM from 'react-dom'
import { PropTypes } from 'prop-types'
import Img from 'gatsby-image'
import ModalStyle, { OverlayStyle } from './style'

const Overlay = ({ img, open }) => {
  console.log(open, img)
  return (
    <OverlayStyle open={open}><Img fluid={ img } /></OverlayStyle>
  )
}

class Modal extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount () {
 
  }
  handleClick (e) {
    this.setState({
      open: true
    }, () => {
      let elem = React.createElement(Overlay, { open: this.state.open, img: this.props.img })
      ReactDOM.render(elem, document.querySelector('#root'))
    })
  }
  render () {
    return (
      <ModalStyle open={this.state.open}>
        <div onClick={this.handleClick} className="modal_picture">
          <Img fluid={ this.props.img } />
        </div>
        <div className="modal_description">
          Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem
          Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem
          Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem Carpe Diem
        </div>
      </ModalStyle>
    )
  }
}

Modal.propTypes = {
  img: PropTypes.any.isRequired
}

Modal.defaultProps = {
}

export default Modal
