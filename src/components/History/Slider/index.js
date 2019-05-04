import React from 'react'
import SliderStyle, { SlideStyle, ContainerStyle } from './style'

class Slider extends React.Component {
  constructor (props) {
    super(props)
    this.state = { current: 0, direction: 1, autoplay: true, hovering: false }
    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
  }
  componentDidMount () {
    if (this.state.autoplay) {
      this.interval = setInterval(
        () => { if (!this.state.hovering) this.handleClick(this.state.direction) }, 3000
      )
    }
  }
  componentWillUnmount () {
    if (this.state.autoplay) {
      clearInterval(this.interval)
    }
  }
  handleHover (enter) {
    if (this.state.autoplay) {
      this.setState({ hovering: enter })
    }
  }
  handleClick (d) {
    const n = (this.state.current + d || this.state.direction)
    this.setState({
      current: n > 0 ? n % React.Children.count(this.props.children) : React.Children.count(this.props.children) - 1,
      direction: d || this.state.direction
    })
  }
  render () {
    return (
      <ContainerStyle onMouseEnter={() => this.handleHover(true)} onMouseLeave={() => this.handleHover(false)}>
        <span onClick={() => this.handleClick(-1)}></span>
        <SliderStyle>
          {React.Children.map(this.props.children, (child, index) =>
            <SlideStyle current={this.state.current} key={'slideA-' + index} index={index}>
              {child.props.children[0]}
            </SlideStyle>
          )}
        </SliderStyle>
        <SliderStyle>
          {React.Children.map(this.props.children, (child, index) =>
            <SlideStyle current={this.state.current} key={'slideB-' + index} index={index}>
              {child.props.children[1]}
            </SlideStyle>
          )}
        </SliderStyle>
        <span onClick={() => this.handleClick(1)}></span>
      </ContainerStyle>
    )
  }
}

export default Slider
