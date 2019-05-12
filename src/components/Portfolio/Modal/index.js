import React from 'react'
import ReactDOM from 'react-dom'
import { PropTypes } from 'prop-types'
import Img from 'gatsby-image'
import ModalStyle, { OverlayStyle } from './style'

class ModalTrigger extends React.Component {
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
    })
  }
  render () {
    return (
      <ModalStyle open={this.state.open}>
        <div className="modal_picture">
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

ModalTrigger.propTypes = {
  img: PropTypes.any.isRequired
}

ModalTrigger.defaultProps = {
}

export default ModalTrigger
