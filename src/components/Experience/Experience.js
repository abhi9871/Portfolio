import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import { ImPointRight } from "react-icons/im";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Work </strong> Experience
        </h1>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
      <Col
        md={7}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}
      >
        <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
           <strong className="purple">Appfoster Innovations Pvt. Ltd.</strong>
        </h2>
        <h3 style={{ fontSize: "1.8em", color: "white", paddingBottom: "20px" }}><strong>Project: Expert Witness Profiler</strong></h3>
        <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul style={{ textAlign: "justify" }}>
          <li className="about-activity mb-3">
              <ImPointRight /> Contributed to the development of the Expert Witness Profiler application, focusing on frontend enhancements using WordPress custom plugins like Advanced Custom Fields (ACF).
            </li>
        
            <li className="about-activity mb-3">
              <ImPointRight /> Implemented new features and functionalities to elevate the user experience.
            </li>
             
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
      </Col>
      <Col
        md={5}
        style={{ paddingTop: "120px", paddingBottom: "50px" }}
        className="about-img"
      >
        <img src={laptopImg} alt="about" className="img-fluid" />
      </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Experience;