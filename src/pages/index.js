import React from 'react'

import { ThemeProvider } from 'emotion-theming'

import Layout from '../Layout'
import SEO from '../components/seo'
import Profil from '../components/Profil'
import theme from '../theme'
import Technologies from '../components/Technologies'

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" keywords={[`thomas`, `bayet`, `react`, `vue`, `js`, `front`, `font-end`, `developper`, `freelance`, `javascript`]} />
      <Profil />
      <Technologies />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
