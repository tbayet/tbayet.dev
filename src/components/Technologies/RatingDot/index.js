import React from 'react'
import RatingDotStyle, { DotStyle } from './style'
import PropTypes from 'prop-types'

const Dot = (props) => <DotStyle {...props}> </DotStyle>

const RatingDot = (props) => {
  let dots = []
  for (let i = 0; i < 5; i++) {
    dots.push((props.note - i) > 0 ? (props.note - i >= 1 ? 1 : 0.5) : 0)
  }
  return (
    <RatingDotStyle>
      { dots.map((dot, i) => <Dot key={i} note={props.note} value={dot}></Dot>) }
    </RatingDotStyle>
  )
}

RatingDot.propTypes = {
  note: PropTypes.number.isRequired
}

RatingDot.defaultProps = {
  note: 5
}

export default RatingDot
