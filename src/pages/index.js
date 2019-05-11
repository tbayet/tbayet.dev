import React from 'react'

import Layout from '../Layout'
import SEO from '../components/seo'
import Profil from '../components/Profil'
import Technologies from '../components/Technologies'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import History from '../components/History'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`thomas`, `bayet`, `react`, `vue`, `js`, `front`, `font-end`, `developper`, `freelance`, `javascript`]} />
    <Profil />
    <Technologies />
    <Portfolio />
    {/* <Pricing /> */}
    <History />
  </Layout>
)

export default IndexPage
