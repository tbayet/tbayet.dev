/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import theme from '../theme'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutDataQuery {
        layoutJson {
          name,
          birthdate
        }
      }
    `}
    render={({ layoutJson: { name, birthdate } }) => (
      <>
        <Global
          styles={css`
            body {
              margin: 0;
              padding: 0;
              margin-top: ${theme.headerSize}; 
              background-color: ${theme.backgroundColor};
              color: ${theme.onBackground};
              font: ${theme.fontPrimary.regular};
            }
          `}
        />
        <Header title={name} />
        <div>
          <main>{children}</main>
          <Footer>{(() => { console.log(name, birthdate) })()}</Footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
