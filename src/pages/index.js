import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"

import BackgroundImage from 'gatsby-background-image'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const imageStyles = {
  height: "100vh",
  backgroundColor: '#d1dd69',
}

const homeTextStyles = {
  textAlign: "center",
  transform: "translateY(150%)",
}

const h1 = {
  fontSize: "6vh",
}

const p = {
  fontSize: "3vh",
}

const IndexPage = () => {

  const data = useStaticQuery(
    graphql`
      query {
        bg: file(relativePath: { eq: "bamboo.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.bg.childImageSharp.fluid

  return (
    <>
      <Seo title="Home" />
      <Header />
      <main>
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          style={imageStyles}
        >
          <Container fluid>
            <div style={homeTextStyles}>
              <h1 style={h1}>Welcome</h1>
              <p style={p}>To a new pathway of opportunities.</p>
              <Link to="/learn" className="nav-link">
                <Button variant="outline-dark">Learn Now</Button>
              </Link>
            </div>
          </Container>
        </BackgroundImage>
      </main>
      <Footer />
    </>
  )

}

export default IndexPage
