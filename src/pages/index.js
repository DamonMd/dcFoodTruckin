import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TruckList from '../components/truckList'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TruckList />
  </Layout>
)

export default IndexPage
