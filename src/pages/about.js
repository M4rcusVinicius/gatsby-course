import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <ul>
      <li>
        <Link to="/about" activeStyle={{ color: "red" }}>
          About
        </Link>
      </li>
      <li>
        <Link to="/" activeStyle={{ color: "red" }}>
          Home
        </Link>
      </li>
    </ul>
  </Layout>
)

export default AboutPage
