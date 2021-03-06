import React from 'react'

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import HeaderStyle from './style'
import theme from '../../theme'
import pdf from '../../images/CV-Thomas_Bayet.pdf'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { fixed: false }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    if (!this.state.fixed && window.scrollY > parseInt(theme.headerSize)) {
      this.setState({
        fixed: true
      })
    } else if (this.state.fixed && window.scrollY <= parseInt(theme.headerSize)) {
      this.setState({
        fixed: false
      })
    }
  }

  render () {
    return (
      <HeaderStyle id="header" fixed={this.state.fixed}>
        <h1>
          <Link to="/">
            {this.props.title}
          </Link>
        </h1>
        <a href={pdf} id="downloadPDF">PDF CV</a>
        <a onClick={() => { this.state.fixed ? window.scrollTo(0, 0) : window.scrollTo(0, document.body.scrollHeight) }}>V</a>
      </HeaderStyle>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: ``
}

export default Header
