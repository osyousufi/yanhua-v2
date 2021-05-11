import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import image1 from "../images/yanhuachar.png"
import {Container, Row, Col} from 'react-bootstrap'

const divStyles = {
  // transform: "translateY(15%)",
  padding: "50px 0",
}

const imgStyles = {
  border: "10px solid black",
  borderRadius: "10px",
}

const About = () => (
  <Layout>
    <Seo title="About" />
    <div>
      <h1 className="heading">About Us</h1>

      <div style={divStyles}>
        <Container fluid>
          <Row>
            <Col md={{ span: 4, offset: 2 }}>
              <p>The name of our organization is an emblem of our collective goal to help young students grow.</p>
              <p>
                The words “Yan” and “Hua” combine to create the Chinese word for “evolution,”
                a term that goes beyond surface level growth, but rather extends to our students discovering new versions of themselves and new opportunities to pursue.
              </p>
              <p>
                We are a small team of students working together to better students one lesson at a time.
              </p>
            </Col>
            <Col >
              <img src={image1} className="img-fluid" style={imgStyles} alt="Yanhua chinese character"/>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  </Layout>
)

export default About
