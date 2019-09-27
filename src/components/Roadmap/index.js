import React from 'react'
import RoadmapStyle from './style'

class Roadmap extends React.Component {
  constructor () {
    super()
    this.state = { expanded: false, windowLarge: true }
    this.handleClick = this.handleClick.bind(this)
    this.watchSize = this.watchSize.bind(this)
  }

  watchSize () {
    if (window.innerWidth <= 1100 && this.state.windowLarge) {
      this.setState({
        windowLarge: false
      })
    } else if (window.innerWidth > 700 && !this.state.windowLarge) {
      this.setState({
        windowLarge: true
      })
    }
  }

  handleClick () {
    this.setState({
      expanded: true
    })
  }
  componentDidMount () {
    this.watchSize()
    window.addEventListener('resize', this.watchSize)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.watchSize)
  }

  render () {
    return (
      <RoadmapStyle expanded={this.state.expanded}>
        <div className="roadmap_title">
          <h1>Front-end Roadmap</h1>
          <h3>
            <span>Known</span>
            <span>Familiar</span>
            <span>Unknown</span>
          </h3>
        </div>
        <div className="svg_image">
          <img src={this.state.windowLarge ? './assets/roadmap.large.svg' : './assets/roadmap.small.svg'} />
          { !this.state.expanded && <span onClick={this.handleClick} >-- click to expand --</span> }
        </div>
      </RoadmapStyle>
    )
  }
}

export default Roadmap
