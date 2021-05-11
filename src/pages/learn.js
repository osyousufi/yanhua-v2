import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from 'react-bootstrap/Container'


const divStyle = {
  display: "flex",
  justifyContent: "center"
}

const descriptionStyle = {
  textAlign: "center",
}

const Learn = () => (
  <Layout>
    <Seo title="Learn" />
    <div>
      <h1 className="heading">Learn Here</h1>
      <Container>
        <p style={descriptionStyle}>Fill out this form to sign up for a class.</p>
        <div style={divStyle}>
          <iframe title="yanhuaForm" src="https://docs.google.com/forms/d/e/1FAIpQLSe0-H1XpkJQI447mEX_fLqOWIDa0ZBmbVu70nXq_kxzFWeQMQ/viewform?embedded=true" width="880" height="471" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </Container>
    </div>
  </Layout>
)

export default Learn
