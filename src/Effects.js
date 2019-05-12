import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

const fadeInSlow = keyframes`
  0% { opacity: 0 }
  40% { opacity: 0 }
  100% { opacity: 1 }
`
const fadeInFast = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`
const fadeOut = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0 }
`

const FadeInStyle = styled.div`
  animation: ${({ animating, slow }) => animating ? (slow ? fadeInSlow : fadeInFast) : fadeOut} 2s ease-in forwards;
`

export class FadeIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = { animating: true }
    this.handleScroll = this.handleScroll.bind(this)
    this.myRef = React.createRef()
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    const currentTop = window.scrollY
    const currentBottom = window.scrollY + window.innerHeight
    const limit = this.myRef.current.offsetTop
    if (!this.state.animating && (currentTop + 80 < limit && currentBottom > limit + 300)) {
      this.setState({
        animating: true
      })
    } else if (this.state.animating && (currentTop + 80 > limit || currentBottom < limit + 300)) {
      this.setState({
        animating: false
      })
    }
  }
  render () {
    return <FadeInStyle slow={this.props.slow} ref={this.myRef} animating={this.state.animating}>{this.props.children}</FadeInStyle>
  }
}
