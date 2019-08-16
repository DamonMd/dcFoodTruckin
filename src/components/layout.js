/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import FoodMap from './foodMap'
import "./layout.css"

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-left:2rem;
  grid-gap: 2rem;
`
const Footer = styled.footer`
  background-color: #4ABDAC;
  color: white;
  height: 125px;
  font-size: 2rem;
  padding: 2rem;
  margin-top: 1rem;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainLayout>
        <div>
          {children}
        </div>
        <FoodMap />
      </MainLayout>
      <Footer>
        A Quorom LLC creation
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
