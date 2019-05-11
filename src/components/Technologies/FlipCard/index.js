import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import FlipCardStyle from './style'
import PropTypes from 'prop-types'
import RatingDot from '../RatingDot'
import { KnowledgeSVG, PhilosophySVG, ExperienceSVG } from './ratings.svg'

const averageNote = v => Math.round((v.reduce((t, s) => (t + s)) / v.length) * 2) / 2

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
      <FlipCardStyle onClick={this.handleClick} flip={this.state.flip} icon={this.props.icon}>
        <div className="card_front">
          <div className="card_icon"></div>
          <div className="card_title">
            <RatingDot note={averageNote(this.props.note)}></RatingDot>
          </div>
        </div>
        <div className="card_back">
          <div className="card_title">
            <div className="card_icon"></div>
            <h4>{this.props.name}</h4>
          </div>
          <div className="card_content">
            <span>
              <RatingDot note={averageNote(this.props.note)}></RatingDot>
            </span>
            <span title="Knowledge">
              <span><KnowledgeSVG /><span>[ Knowledge ]</span></span>
              <RatingDot note={this.props.note[0]}></RatingDot>
            </span>
            <span title="Experience">
              <span><ExperienceSVG /><span>[ Experience ]</span></span>
              <RatingDot note={this.props.note[1]}></RatingDot>
            </span>
            <span title="Philosophy">
              <span><PhilosophySVG /><span>[ Philosophy ]</span></span>
              <RatingDot note={this.props.note[2]}></RatingDot>
            </span>
          </div>
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
