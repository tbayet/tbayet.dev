import React from 'react'

import { ThemeProvider } from 'emotion-theming'

import Layout from '../Layout'
import SEO from '../components/seo'
import Profil from '../components/Profil'
import theme from '../theme'
import Technologies from '../components/Technologies'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <div id="root">
    </div>
    <Layout>
      <SEO title="Home" keywords={[`thomas`, `bayet`, `react`, `vue`, `js`, `front`, `font-end`, `developper`, `freelance`, `javascript`]} />
      <Profil />
      <Technologies />
      <Portfolio />
      <Pricing />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
