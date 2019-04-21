import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import FlipCardStyle from './style'
import PropTypes from 'prop-types'

class FlipCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = { flip: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      flip: !this.state.flip
    })
  }

  render () {
    return (
      <FlipCardStyle onClick={this.handleClick} flip={this.state.flip}>
        <div className="card_front">
          <i className={this.props.icon}></i>
          <div>
            {this.props.name}
          </div>
        </div>
        <div className="card_back">
        </div>
      </FlipCardStyle>
    )
  }
}

FlipCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
}

FlipCard.defaultProps = {
  title: ``,
  icon: ``
}

export default FlipCard
